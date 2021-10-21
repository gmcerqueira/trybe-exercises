const jokeModel = require("../models/jokeModel");

const listJoke = async (_req, res) => {
  const { joke } = await jokeModel.getJoke();

  return res.render("jokesView", { joke });
};

module.exports = { listJoke };
