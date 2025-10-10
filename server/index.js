const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // tells express when a req comes in with a JSON body, parse it and attach the result to req.body
app.use("/user", signupRoute); // really "user/register"
// all routes in routes/signup will be reachable under "/user"

require("./database/dbConfig"); //connects the dbConfig.js file upon the server starting

dotenv.config({ path: "../.env" }); // loads .env but tells it exactly where to look in the root
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0,0,0,0", () => {
  console.log(`Application listening on port ${PORT}`);
});
// had to add "0,0,0,0" for some reason to view all endpoints on localhost.
// it means, “Listen on all interfaces,” including both localhost and your local IP.
// React app and express server are running on differnt IP's and ports. Interesting...
