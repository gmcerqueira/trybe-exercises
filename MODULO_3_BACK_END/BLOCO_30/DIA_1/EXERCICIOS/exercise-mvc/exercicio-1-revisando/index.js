const express = require("express");
const bodyParser = require("body-parser");
const jokeController = require("./controllers/jokeController");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", jokeController.listJoke);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
