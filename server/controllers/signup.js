const userService = require("../database/signup");

async function createUser(req, res) {
  console.log("createUser controller triggered");
  try {
    const userData = req.body; // extracts user data from req.body
    console.log("Incoming user data:", req.body);
    const user = await userService.createUser(userData); // calls signup func
    res.status(201).json({ user: user, message: "User created successfully" });
  } catch (error) {
    console.log(`There was an error creating an account: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createUser };

// this files handles requests/ response logic and call DB/service functions
