const jokeModel = require("../models/jokesModel");

const randomJoke = async (_req, res) => {
  const { value } = await jokeModel.getJoke();

  return res.render("jokes/index", { joke: value });
};

const randomJokeFromCategory = async (req, res) => {
  const { category } = req.params;
  const { value } = await jokeModel.getJokeFromCategory(category);

  return res.render("jokes/index", { joke: value });
};

module.exports = { randomJoke, randomJokeFromCategory };
