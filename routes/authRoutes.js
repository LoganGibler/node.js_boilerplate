const express = require("express");
const { Pool } = require("pg");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const authController = require("../controllers/authController");

const router = express.Router();



router.get("/authMe", authController.authMe);

module.exports = router;
