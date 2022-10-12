const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");

// const { authenticate } = require("../config/passport-setup");
const {  createShortlets, getShortletsByState, getShortlets } = require("../controller/shortlets.controller");

router.post("/create",upload.single('image'), createShortlets);
router.get("/:byState", getShortletsByState);
router.get("/", getShortlets);
// router.get("/:AllAvailable", authenticate, getAllAvailableShortlets);

module.exports = router;