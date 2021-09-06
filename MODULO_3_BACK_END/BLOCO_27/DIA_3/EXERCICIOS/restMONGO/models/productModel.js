const { ObjectId } = require("mongodb");
const connection = require("./conection.js");

const add = (name, brand) =>
  connection()
    .then((db) => db.collection("products").insertOne({ name, brand }))
    .catch((err) => {
      console.error(err);
      return process.exit(1);
    });

const getAll = () =>
  connection()
    .then((db) => db.collection("products").find().toArray())
    .catch((err) => {
      console.error(err);
      return process.exit(1);
    });

const getById = (id) =>
  connection()
    .then((db) =>
      ObjectId.isValid(id)
        ? db.collection("products").findOne(ObjectId(id))
        : null
    )
    .catch((err) => {
      console.error(err);
      return process.exit(1);
    });

const update = (id, name, brand) =>
  connection()
    .then((db) =>
      ObjectId.isValid(id)
        ? db
            .collection("products")
            .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } })
        : null
    )
    .catch((err) => {
      console.error(err);
      return process.exit(1);
    });

const exclude = (id) =>
  connection()
    .then((db) =>
      ObjectId.isValid(id)
        ? db.collection("products").deleteOne({ _id: ObjectId(id) })
        : null
    )
    .catch((err) => {
      console.error(err);
      return process.exit(1);
    });

module.exports = { add, getAll, getById, update, exclude };
