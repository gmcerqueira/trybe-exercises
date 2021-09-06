const rescue = require("express-rescue");
const Joi = require("joi");
const BookService = require("../services/BookService.js");

const getBooks = rescue(async (req, res, next) => {
  const { author_id } = req.query;

  const books = author_id
    ? await BookService.getByAuthorId(author_id)
    : await BookService.getAll();

  if (books.error) return next(books.error);

  res.status(200).json({ books });
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, author_id } = req.body;

  const newBook = await BookService.create(title, author_id);

  if (newBook.error) return next(newBook.error);

  return res.status(201).json(newBook);
});

module.exports = {
  getBooks,
  create,
};
