const User = require("./user");
const bcrypt = require("bcrypt");

// bcrypt is a password hashing algo

async function createUser(userData) {
  const { name, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    role: "customer",
  });

  const savedUser = await createdUser.save(); // save() is a mongoDB method
  return savedUser;
}

//this function hashes password, creates new mongo user, saves it to DB

module.exports = { createUser }; // <-- 'named export' means we export an object, mostly used to export multiple functions
// module.exports = createUser; would work too
