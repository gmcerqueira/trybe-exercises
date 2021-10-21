const axios = require("axios");

const getJoke = async () => {
  const randomJoke = await axios.get(
    "https://api.chucknorris.io/jokes/random"
  );

  return randomJoke.data;
};

const getJokeFromCategory = async (category) => {
  const randomJoke = await axios.get(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );

  return randomJoke.data;
};

module.exports = { getJoke,getJokeFromCategory };
