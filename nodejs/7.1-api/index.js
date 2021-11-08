const { getRandomJokeUsingAxios } = require("./fetchWithAxios");
const { getRandomJokeUsingRequestModule } = require("./fetchWithRequestModule");
const { getRandomJokeUsingGot } = require("./fetchWithGot");

getRandomJokeUsingAxios().then((joke) => console.log("Using Axios: ", joke));

getRandomJokeUsingRequestModule().then((joke) =>
  console.log("Using Request Module: ", joke)
);

getRandomJokeUsingGot().then((joke) =>
  console.log("Using Got(3rd party library): ", joke)
);
