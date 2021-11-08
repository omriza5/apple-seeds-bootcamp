const got = require("got");

const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

const getRandomJokeUsingGot = async () => {
  try {
    const { body } = await got(API_ENDPOINT);
    const { value: joke } = await JSON.parse(body);

    return joke;
  } catch (error) {}
};

module.exports = {
  getRandomJokeUsingGot,
};
