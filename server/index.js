const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());

require("./database/dbConfig"); //connects the dbConfig.js file

dotenv.config({ path: "../.env" }); // loads .env but tells it exactly where to look in the root
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0,0,0,0", () => {
  console.log(`Application listening on port ${PORT}`);
});
// had to add "0,0,0,0" for some reason to view all endpoints on localhost.
// it means, “Listen on all interfaces,” including both localhost and your local IP.
// React app and express server are running on differnt IP's and ports. Interesting...
