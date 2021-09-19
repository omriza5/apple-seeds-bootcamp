const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const asce = foods.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
});

console.log(asce);

const desc = foods.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;

  return 0;
});

console.log(desc);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const withCaseSenAsce = (arr) => {
  return arr.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();

    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;

    return 0;
  });
};

const withCaseSenDesc = (arr) => {
  return arr.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();

    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;

    return 0;
  });
};

console.log("b1: ", withCaseSenAsce(foodsWithUpperCase));
console.log("b2: ", withCaseSenDesc(foodsWithUpperCase));

/** c ==> longest word */
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const sortByLength = words.sort((a, b) => {
  if (a.length > b.length) return -1;
  if (a.length < b.length) return 1;

  return 0;
});

console.log(sortByLength);
