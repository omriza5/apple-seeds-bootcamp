const words = ["hello", "apple", "welcome", "love"];
const numbers = [1, 2, 3];

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (!isStringArray(words))
      reject("the contains at least a non string item");
    else {
      const capitalizedWords = words.map((word) => word.toUpperCase());

      resolve(capitalizedWords);
    }
  });
}
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!isStringArray(words))
      reject("ERROR: the array contains at least a non string item");
    else {
      const sorted = words.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });

      resolve(sorted);
    }
  });
}

/** helper function that checks if all array elements are strings */
function isStringArray(arr) {
  for (let item of arr) if (typeof item !== "string") return false;

  return true;
}

/*************************** Main ***********************************/
makeAllCaps(words)
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

makeAllCaps(numbers)
  .then((data) => sortWords(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
