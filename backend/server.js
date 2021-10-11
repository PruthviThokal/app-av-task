const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
const morgan = require("morgan");

require("dotenv").config();

//initialization express server
const app = express();

//print endpoint log on console
app.use(morgan("dev"));

//body parser
app.use(bodyParser.json());

//cross origin resource sharing
app.use(cors());

//keep all the files in sync
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//listening port from .env files
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
