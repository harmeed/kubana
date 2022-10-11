const db = require("../models");
const Shortlets = db.shortlets;
const book = db.book;
const User = db.user;

exports.bookShortlets = async (req, rers) => {
    try {
        const { apartmentsName, state, numberOfRooms, address, amountPerNights, numberOfNights } = req.body;
        if (!apartmentsName && !state && !numberOfRooms && !address && !amountPerNights && !numberOfNights) {
        return    res.status(400).send ({ message: "Please Fill All Fields"});
      
}}catch(err){

}}