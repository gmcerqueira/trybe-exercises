const { MongoClient } = require("mongodb");

const MONGO_URL = "mongodb://127.0.0.1:27017";

const connection = () =>
  MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db("rest_exercicios"))
    .catch((err) => {
      console.log(err);
      process.exit();
    });

module.exports = connection;
