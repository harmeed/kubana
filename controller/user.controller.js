const db = require("../models/index");
// const Shortlets = db.shortlets;
const book = db.book;
const User = db.user;

exports.bookShortlets = async (req, res) => {
    try {
        const { apartmentName, state, numberOfRooms, address, amountPerNights, numberOfNights } = req.body;
    //     console.log(req.body);
    //     if (!apartmentName || !state || !numberOfRooms || !address || !amountPerNights || !numberOfNights) {
    //        return res.status(400).send ({ message: "Please Fill All Fields"});
            
    //   }
    const bookShortlets = await book.create({
        apartmentName: apartmentName,
        state: state,
        numberOfRooms: numberOfRooms,
        address: address,
        amountPerNights: amountPerNights,
        numberOfNights: numberOfNights,
    });
    res.status(200).json({ message: "processing", bookShortlets});
    }catch(error) {
        console.log(error);
        res.status(500).json({ message: error.message});

}};