const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());

require("./dbConfig"); //connects the dbConfig.js file

dotenv.config({ path: "../.env" }); // loads .env but tells it exactly where to look in the root
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
