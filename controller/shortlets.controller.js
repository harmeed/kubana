const db = require('../models/index');
// const shortletsDb = require('../models/shortlets.model');
const Shortlets = db.shortlets;
const cloudinary = require('../utils/cloudinary');
const User = db.user;


exports.createShortlets = async (req, res) => {
  try {
    const { apartmentName, state, numberOfRooms, address, amountPerNight, numberOfNights, image} = req.body;
    if (!apartmentName && !state && !numberOfRooms && !address && !amountPerNight && !numberOfNights) {
      res.status(400).send ({ message: "content can not ba empty"});
      return;
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    // const findShortlets = await shortlets.findOne({
    //   where: { apartmentName: apartmentName },
    // });
    // if (findShortlets) {
    //   res.status(404).json({ message: "shortlets already exists" });
    // }
    // console.log(findShortlets);

// const id = req.params.id;
// const user = await User.findOne({ where : { id: id } });
// if (user.role !== "admin") {
//   return res.status(401).json({ message: "You are not authorized"});
// }
const newShortlets = await Shortlets.create({
  apartmentName: req.body.apartmentName,
  state: req.body.state,
  numberOfRooms: req.body.numberOfRooms,
  address: req.body.address,
  amountPerNight: req.body.amountPerNight,
  numberOfNights: req.body.numberOfNights,
  image: result.secure_url,
});
res.status(200).json({ message: "shortlets successfully created", newShortlets});
} catch (error) {
  console.log(error);
  res.status(500).json({ message: error.message});
}
};


// exports.getShortletsByState = async (req, res) => {
//   try {
//     const shortlets = await Shortlets.findOne({where:{ title: req.params.title}});
//     return res.status(200).json({ message: "Found shortletsByState", shortlets });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Internal Server error",
//     });
//   }
// };

exports.getShortletsByState = async (req, res) => {
  try {
    const state = req.params.id;
    const shortlets = await Shortlets.findOne({ where: { state: state } });
    return res.status(200).json(shortlets);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

exports.getShortlets = async (req, res) => {
  try {
    const { page, limit } = req.query;
     const shortlets = await Shortlets.findAll({
      limit:10 ,
      skip:((page - 1) * limit)
    })
    return res.status(200).json({ message: "successful", shortlets });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
