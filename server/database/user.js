const mongoose = require("./dbConfig");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
});
// role defines a feild of type String, can only be admin or customer, default value if no role provided

module.exports = mongoose.model("User", userSchema);
