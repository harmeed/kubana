const express = require('express');
const { bookShortlets } = require('../controller/user.controller');
// const {getByState} = require('../controller/shortlets.controller');
const router = express.Router();

router.post('/book', bookShortlets);


module.exports = router;
