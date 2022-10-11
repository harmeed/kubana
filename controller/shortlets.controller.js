const db = require('../models/index');
// const shortletsDb = require('../models/shortlets.model');
const shortlets = db.shortlets;
const cloudinary = require('../utils/cloudinary');
const User = db.user;


exports.createShortlets = async (req, res) => {
  try {
    const { apartmentsName, state, numberOfRooms, address, amountPerNight, NumberOfNights, image} = req.body;
    if (!apartmentsName && !state && !numberOfRooms && !address && !amountPerNight && !NumberOfNights) {
      res.status(400).send ({ message: "content can not ba empty"});
      return;
  }
  const checkShortlets = await shortlets.findOne({
    where: { apartmentsName: apartmentsName },
  });
  if (checkShortlets) {
    res.status(404).json({ message: "shortlets already exists" });
}

const id = req.params.id;
const user = await User.findOne({ where : { id: id } });
if (user.role !== "admin") {
  return res.status(401).json({ message: "You are not authorized"});
}
const shortlets = await shortlets.create({
  apartmentsName: req.body.apartmentsName,
  state: req.body.state,
  numberOfRooms: req.body.numberOfRooms,
  address: req.body.address,
  amountPerNight: req.body.amountPerNight,
  NumberOfNights: req.body.numberOfNights,
});
res.status(200).json({ message: "shortlets successfully created", shortlets});
} catch (error) {
  res.status(500).send({ message: error.message});
}
};


exports.getShortletsByState = async (req, res) => {
  try {
    const shortlets = await shortlets.findOne({where:{ title: req.params.title}});
    return res.status(200).json({ message: "Found shortletsByState", shortlets });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

exports.getShortlets = async (req, res) => {
  try {
    const { page, limit } = req.query;
     const shortlets = await Shortlets.findAll()
       .sort({ createdAt: 1 })
       .skip((page - 1) * limit)
       .limit(limit * 1);
    return res.status(200).json({ message: "successful", shortlets: shortlets });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
