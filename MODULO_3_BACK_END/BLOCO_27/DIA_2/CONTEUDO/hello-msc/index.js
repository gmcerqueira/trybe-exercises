const express = require("express");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middlewares/error");
const AuthorController = require("./controllers/AuthorController.js");
const BookController = require("./controllers/BookController.js");

const app = express();

app.use(bodyParser.json());

app.get("/authors", AuthorController.getAll);
app.get("/authors/:id", AuthorController.findById);
app.post("/authors", AuthorController.create);

app.get("/books", BookController.getBooks);

app.post("/books", BookController.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
