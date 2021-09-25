// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// - the function nb_year should return n number of entire years needed to get a population
// greater or equal to p.
// - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function growthOfPopulation(
  population,
  populationInc,
  numOfInhabitans,
  populationTarget
) {
  let sum = population;
  let numOfYears = 0;

  populationInc = populationInc / 100;

  while (sum <= populationTarget) {
    sum = sum + sum * populationInc + numOfInhabitans;
    numOfYears++;
  }

  return numOfYears;
}

// growthOfPopulation(1500000, 2.5, 10000, 2000000);

const busArr = [
  [2, 0],
  [5, 2],
  [7, 3],
  [5, 7],
  [5, 5],
];

function bus(arr) {
  let peopleIn = 0;
  let peopleOut = 0;

  for (let i = 0; i < arr.length; i++) {
    peopleIn += arr[i][0];
    peopleOut += arr[i][1];
  }

  return peopleIn - peopleOut;
}

// console.log(bus(busArr));
