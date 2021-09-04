const connection = require("./connections.js");
const Author = require("./AuthorModel.js");

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT id, title, author_id FROM books`
  );

  return result;
};

const getByAuthorId = async (id) => {
  const [result] = await connection.execute(
    `SELECT id, title, author_id FROM books WHERE author_id = ?`,
    [id]
  );

  if (result.length === 0) return null;

  return result;
};

const isValid = async (title, author_id) => {
  const author = await Author.findById(author_id);
  if (!title || typeof title !== "string" || title === "" || title.length < 3)
    return false;
  if (!author_id || !Number.isInteger(author_id) || author_id === "" || !author)
    return false;

  return true;
};

const create = async (title, author_id) =>
  connection.execute(
    `INSERT INTO model_example.books (title, author_id) VALUES (?, ?)`,
    [title, author_id]
  );

module.exports = { getAll, getByAuthorId, isValid, create };
