import "@stdlib/deploy";

message UpdateDetails {
    expertise: String;
    fees: Int as uint32;
    telegram_id: String;
}


struct Astrologer {
    owner: Address;
    expertise: String;
    fees: Int as uint32;
    telegram_id: String;
}

contract AstrologerContract {
    owner: Address;
    parent: Address;
    expertise: String;
    fees: Int as uint32;
    telegram_id: String;

    init(owner: Address) {
        self.owner = owner;
        self.parent = sender();
        self.expertise = "";
        self.fees = 0;
        self.telegram_id = "";
    }

    receive(msg: UpdateDetails) {
        require(sender() == self.owner, "Only owner can account details");
        self.expertise = msg.expertise;
        self.fees = msg.fees;
        self.telegram_id = msg.telegram_id;
    }

    get fun getAccountDetails() : Astrologer {
        return Astrologer{
            owner: self.owner,
            expertise: self.expertise,
            fees: self.fees,
            telegram_id: self.telegram_id,
        };
    }

}

