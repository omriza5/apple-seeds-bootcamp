function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const result1 = describeCountry("Germany", 81, "Berlin");
const result2 = describeCountry("Israel", 9, "Jerusalim");
const result3 = describeCountry("Finland", 6, "Helsinki");
console.log(result1);
console.log(result2);
console.log(result3);
