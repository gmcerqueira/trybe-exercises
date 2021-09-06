const connection = require("./connection.js");
const { ObjectId } = require("mongodb");

const Author = require("./AuthorModel.js");

const renameId = ({ _id, ...document }) => ({ id: _id, ...document });

const getAll = () =>
  connection()
    .then((db) => db.collection("books").find().toArray())
    .then((results) => results.map(renameId));

const getByAuthorId = (id) =>
  connection()
    .then((db) =>
      db
        .collection("books")
        .find({ author_id: parseInt(id) })
        .toArray()
    )
    .then((res) => (res.length === 0 ? null : res.map(renameId)));

const create = (title, author_id) =>
  connection()
    .then((db) => db.collection("books").insertOne({ title, author_id }))
    .then((result) => ({ id: result.insertedId, title, authorId }));

const findByTitle = async (title, author_id) => {
  const book = await connection().then((db) =>
    db.collection("books").findOne({ title, author_id })
  );

  if (!book) return null;

  return book;
};

module.exports = { getAll, getByAuthorId, create, findByTitle };
