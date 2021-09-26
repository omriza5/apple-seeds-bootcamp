const myCountry = {
  name: "Israel",
  capital: "Jerusalim",
  language: ["Hebrew", "Arabic", "Russian"],
  population: 9_000_000,
  neighbours: ["Lebanon", "Syria", "Jordan", "Egypt"],
  describe: function () {
    console.log(
      `${this.name} has ${this.population} million people, their mother tounge is ${this.language[0]}, they
      have ${this.neighbours.length} neighbours countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    if (this.neighbours.length === 0) this["isIsland"] = true;
    else this["isIsland"] = false;
  },
};

myCountry.describe();

myCountry.checkIsland();

console.log(myCountry);
