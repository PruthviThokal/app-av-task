const express = require("express");
const router = express.Router();

//controller methods
const { createConnection, createCollection } =
  (require = require("../controllers/connectDatabase"));

//route for connect database
router.post("/connectdb", createConnection);

//route for create collection
router.post("/createcollection", createCollection);

module.exports = router;
