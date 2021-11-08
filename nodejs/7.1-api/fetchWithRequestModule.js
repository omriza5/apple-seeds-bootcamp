const request = require("request");

const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

const getRandomJokeUsingRequestModule = () => {
  return new Promise((resolve, reject) => {
    request(API_ENDPOINT, (err, res, body) => {
      const joke = JSON.parse(body);
      resolve(joke.value);
    });
  });
};

module.exports = {
  getRandomJokeUsingRequestModule,
};
