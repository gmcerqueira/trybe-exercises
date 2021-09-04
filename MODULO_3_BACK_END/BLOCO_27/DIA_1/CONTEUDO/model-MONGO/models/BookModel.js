const connection = require("./connections.js");
const { ObjectId } = require("mongodb");

const Author = require("./AuthorModel.js");

const getAll = () =>
  connection().then((db) => db.collection("books").find().toArray());

const getByAuthorId = (id) =>
  connection().then((db) => {
    const books = db
      .collection("books")
      .find({ author_id: parseInt(id) })
      .toArray();

    if (!books) return null;

    return books;
  });

const isValid = async (title, author_id) => {
  const author = await Author.findById(author_id);
  if (!author || !author_id || author_id.length !== 24 || author_id === "")
    return false;
    
  if (!title || typeof title !== "string" || title === "" || title.length < 3)
    return false;

  return true;
};

const create = (title, author_id) =>
  connection().then((db) =>
    db.collection("books").insertOne({ title, author_id })
  );

module.exports = { getAll, getByAuthorId, isValid, create };
