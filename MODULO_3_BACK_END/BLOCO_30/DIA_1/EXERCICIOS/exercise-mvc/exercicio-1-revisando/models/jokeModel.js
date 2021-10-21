const axios = require("axios");

const getJoke = async () => {
  const joke = await axios.get(
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"
  );

  return joke.data;
};

module.exports = { getJoke };
