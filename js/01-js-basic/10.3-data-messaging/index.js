const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

/** Create a function that returns all the names from the array */

const personsNames = (persons) => persons.map((person) => person.name);

// console.log(personsNames(data));

/** Create a function that returns all the objects that are born before 1990 */

const personsByBirthYear = (persons, birthDate) => {
  const dateArg = new Date(birthDate);
  return persons.filter((person) => {
    const personDate = new Date(person.birthday);
    return personDate < dateArg;
  });
};

// console.log(personsByBirthYear(data, "1-1-1990"));

/**Create a function that returns an object of all the different foods from all
the objects as the key and the number of times that food is present in all the
objects as the value */

const getFoodList = (food) => {
  const foodList = [];

  food.forEach((f) => {
    foodList.push(...f.favoriteFoods.meats, ...f.favoriteFoods.fish);
  });

  return foodList;
};

const countFoodOccurrence = (data) => {
  const food = getFoodList(data);
  const foodMap = new Map();

  for (let i = 0; i < food.length; i++) {
    let count = foodMap.has(food[i]) ? foodMap.get(food[i]) : 0;
    foodMap.set(food[i], count + 1);
  }
  return foodMap;
};

console.log(countFoodOccurrence(data));
