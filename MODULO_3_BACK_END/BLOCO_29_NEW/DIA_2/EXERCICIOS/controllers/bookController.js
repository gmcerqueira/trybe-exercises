const { Book } = require("../models");

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: "Not found!" });

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

const newBook = async (req, res) => {
  const body = req.body;

  try {
    const book = await Book.create(body);

    if (!book) return res.status(404).json({ message: "Not found!" });

    res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const book = await Book.update(body, { where: { id } });

    if (!book.length) return res.status(404).json({ message: "Not found!" });

    const editedBook = await Book.findByPk(id);

    res.status(200).json(editedBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.destroy({ where: { id } });

    if (!book) return res.status(404).json({ message: "Not found!" });


    res.status(200).json(`Book removed, id: ${id}`);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = {
  getAll,
  getById,
  newBook,
  edit,
  remove,
};
