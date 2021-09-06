const BookModel = require("../models/BookModel.js");

const getAll = async () => BookModel.getAll();

const getByAuthorId = async (id) => {
  const books = await BookModel.getByAuthorId(id);
  if (!books) {
    return {
      error: {
        code: "notFound",
        message: `Não foi possível encontrar livros do autor com o id ${id}`,
      },
    };
  }

  return books;
};

const create = async (title, author_id) => {
  const bookExist = await BookModel.findByTitle(title, author_id);

  if (bookExist)
    return {
      error: {
        code: "alreadyExists",
        message: "Um livro já existe com esse nome e autor",
      },
    };

  return await BookModel.create(title, author_id);
};

module.exports = { getAll, getByAuthorId, create };
