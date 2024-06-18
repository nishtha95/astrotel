import "@stdlib/deploy";

message UpdateDetails {
    expertise: String;
    experience: String;
    fees: Int as uint32;
    telegram_id: String;
}


struct Astrologer {
    owner: Address;
    expertise: String;
    experience: String;
    fees: Int as uint32;
    telegram_id: String;
}

contract AstrologerContract {
    owner: Address;
    expertise: String;
    experience: String;
    fees: Int as uint32;
    telegram_id: String;

    init(parent: Address) {
        self.owner = sender();
        self.expertise = "";
        self.experience = "";
        self.fees = 0;
        self.telegram_id = "";
    }

    receive(msg: UpdateDetails) {
        require(sender() == self.owner, "Only owner can update account details");
        self.expertise = msg.expertise;
        self.experience = msg.experience;
        self.fees = msg.fees;
        self.telegram_id = msg.telegram_id;
    }

    get fun getAccountDetails() : Astrologer {
        return Astrologer{
            owner: self.owner,
            expertise: self.expertise,
            experience: self.experience,
            fees: self.fees,
            telegram_id: self.telegram_id,
        };
    }

}