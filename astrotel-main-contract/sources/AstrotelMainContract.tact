import "@stdlib/deploy";
import "./AstrologerContract";

message AddAstrologer {
    expertise: String;
    fees: Int as uint32;
    telegram_id: String;
}

message RequestChat {
    astrologer_address: Address;
    client_telegram_id: String;
}

contract AstrotelMainContract with Deployable {
    id: Int as uint8;
    owner: Address;
    walletAddressToAstrologerId: map<Address, Int>;
    astrologerIdToContractAddress: map<Int, Address>;
    astrologerCount: Int as uint32;

    init(id: Int) {
        self.id= id;
        self.owner = sender();
        self.astrologerCount = 0;
    }

    receive(msg: AddAstrologer) {
        require(self.walletAddressToAstrologerId.get(sender()) == null, "Address already registered");
        let init: StateInit = initOf AstrologerContract(sender());
        send(SendParameters{
            to: contractAddress(init),
            value: ton("0.1"),              // pay for message, the deployment and give some TON for storage
            mode: SendIgnoreErrors,
            code: init.code,                // attaching the state init will cause the message to deploy
            data: init.data,
            body: msg.toCell(),
        });
        self.astrologerCount += 1;
        self.walletAddressToAstrologerId.set(sender(),self.astrologerCount);
        self.astrologerIdToContractAddress.set(self.astrologerCount, contractAddress(init));
    }

    // receive(msg: RequestChat) {
    //     let astrologer = AstrologerContract(msg.astrologer_address);
    //     astrologer.requestChat(msg.client_telegram_id);
    // }

    get fun getAllAstrologers(): map<Int,Address> {
        return self.astrologerIdToContractAddress;
    }
}

