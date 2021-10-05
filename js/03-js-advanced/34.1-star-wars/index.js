const request = new XMLHttpRequest();
const table = document.querySelector(".stars-table");

const tableHeaders = [
  "Name",
  "Hair",
  "Height",
  "Planet Name",
  "Planet Population",
];

(function getStarWars() {
  request.open("get", "https://swapi.dev/api/people", true);
  request.setRequestHeader("Accept", "application/json");
  request.send();
})();

request.onload = async function () {
  const { results } = JSON.parse(this.responseText);
  if (results) {
    const mappedData = results.map(async (star) => {
      return {
        name: star.name,
        hair: star.hair_color,
        height: star.height,
        planet: await getStarPlanetOrPopulation(star.homeworld, "name"),
        planetPopultion: await getStarPlanetOrPopulation(
          star.homeworld,
          "population"
        ),
      };
    });

    populateTable(await Promise.all(mappedData));
  }
};

request.onerror = function (err) {
  console.log(err);
};

/**
 * prop == "name" ==> it returns planet name
 * prop == "population" ==> it returns population number
 */
async function getStarPlanetOrPopulation(starUlr, prop) {
  const response = await fetch(starUlr, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const planet = await response.json();

  return planet[prop];
}

function populateTable(starsArray) {
  let headerRow = document.createElement("tr");
  tableHeaders.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  starsArray.forEach((star) => {
    let row = document.createElement("tr");

    Object.values(star).forEach((prop) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(prop);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
}

// populateTable();
