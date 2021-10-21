const express = require("express");
const bodyParser = require("body-parser");
const categoriesController = require("./controllers/categoriesController");
const jokesController = require("./controllers/jokesController");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => res.redirect("/categories"));
app.get("/categories", categoriesController.listCategories);
app.get("/jokes", jokesController.randomJoke);
app.get("/jokes/:category", jokesController.randomJokeFromCategory);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
