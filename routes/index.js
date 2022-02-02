const express = require('express');
const router = express.Router();
const passport = require('../config/passport-local-strategy');
const userController = require("../controller/userController");



// homepage router
router.get("/", userController.home);


module.exports = router;