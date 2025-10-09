const User = require("./user");
const bcrypt = require("bcrypt");

// bcrypt is a password hashing algo

async function createUser(userData) {
  const { name, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = new User({
    name,
    email,
    hashedPassword,
    role: "customer",
  });

  const savedUser = await createdUser.save();
  return savedUser;
}

module.exports = { createUser };
