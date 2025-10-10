const express = require("express");
const signupController = require("../controllers/signup");

const router = express.Router();

router.post("/register", signupController.createUser);
// this defines "/register" and maps to signupcontroller.createuser

module.exports = router;

// this file maps incoming requests to controller
