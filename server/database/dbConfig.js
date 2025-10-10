const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://evanclevenger_db_user:saVH7kJRjvHY3Lla@cluster0.x1xif3j.mongodb.net/`
); //connects to our DB

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`There was an error connecting to the DB: ${err}`);
});

module.exports = mongoose;
