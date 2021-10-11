const mongoose = require("mongoose");

//controller function to connect database and fetch collections from the database
exports.createConnection = async (req, res) => {
  try {
    const { connectionUrl } = req.body;
    mongoose
      .connect(connectionUrl.toString(), {
        useNewUrlParser: true,
      })
      .then(() => {
        mongoose.connection.db
          .listCollections()
          .toArray(function (err, names) {
            res.send(names);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).send(err);
          });
      });
  } catch (err) {
    console.log(err);
    res.status(400).send("Cannot connect database..");
  }
};

//controller function to create collection
exports.createCollection = async (req, res) => {
  try {
    const { connectionUrl, collectionName } = req.body;
    mongoose
      .connect(connectionUrl.toString(), {
        useNewUrlParser: true,
      })
      .then(() => {
        const mySchema = new mongoose.Schema({});
        mongoose.model(collectionName, mySchema);
        res.send("Collection created successfully");
      })
      .catch((err) => {
        res.send("Invalid connection string");
      });
  } catch (err) {
    console.log(err);
  }
};
