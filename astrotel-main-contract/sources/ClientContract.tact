// import "@stdlib/deploy";

// message UpdateBirthDetails {
//     place_of_birth: String;
//     datetime_of_birth: Int as uint32;
// }

// contract ClientContract with Deployable {
//     owner: Address;
//     parent: Address;
//     datetime_of_birth: Int as uint32;
//     place_of_birth: String;

//     init(owner: Address) {
//         self.owner = owner;
//         self.parent = sender();
//         self.datetime_of_birth = 0;
//         self.place_of_birth = "";
//     }


//     receive(msg: UpdateBirthDetails) {
//         require(self.parent == sender(), "Only parent can update birth details");
//         self.datetime_of_birth = msg.datetime_of_birth;
//         self.place_of_birth = msg.place_of_birth;
//     }
// }

