const express = require("express");
const router = express.Router();

const { authenticate } = require("../config/passport-setup");
const { postShortlets, getShortlets, getShortletsByState, getAllAvailableShortlets } = require("../controller/shortlets.controller");

router.post("/create", postShortlets);
router.get("/get", authenticate, getShortlets);
router.get("/:ByState", authenticate, getShortletsByState);
router.get("/:AllAvailable", authenticate, getAllAvailableShortlets);
