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

/** c ==> longest word */
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const sortByLength = words.sort((a, b) => {
  if (a.length > b.length) return -1;
  if (a.length < b.length) return 1;

  return 0;
});

console.log(sortByLength);
