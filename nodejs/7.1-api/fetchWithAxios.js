const axios = require("axios");

const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

const getRandomJokeUsingAxios = async () => {
  const { data: joke } = await axios.get(API_ENDPOINT);
  return joke.value;
};

module.exports = {
  getRandomJokeUsingAxios,
};
