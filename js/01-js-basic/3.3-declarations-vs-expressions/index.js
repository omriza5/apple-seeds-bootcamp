const WORLD_POPULATION = 7900;
function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / WORLD_POPULATION) * 100;
}

const chinaPop = percentageOfWorld1(1441);
const germanyPop = percentageOfWorld1(800);
const usaPop = percentageOfWorld1(1250);

console.log("China: ", chinaPop);
console.log("Germany: ", germanyPop);
console.log("Usa: ", usaPop);

const percentageOfWorld2 = (countryPopulation) => {
  return (countryPopulation / WORLD_POPULATION) * 100;
};

const chinaPop1 = percentageOfWorld2(1441);
const germanyPop1 = percentageOfWorld2(800);
const usaPop1 = percentageOfWorld2(1250);
console.log(
  "***********************************************************************************************************"
);
console.log("China: ", chinaPop1);
console.log("Germany: ", germanyPop1);
console.log("Usa: ", usaPop1);
