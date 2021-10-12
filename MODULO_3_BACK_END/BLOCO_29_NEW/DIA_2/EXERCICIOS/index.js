const express = require("express");
const bodyParser = require("body-parser");
const Book = require('./controllers/bookController.js')


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/books", Book.getAll);
app.get("/books/:id", Book.getById);

app.post("/books", Book.newBook);
app.post("/books/:id", Book.edit);

app.delete("/books/:id", Book.remove);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
