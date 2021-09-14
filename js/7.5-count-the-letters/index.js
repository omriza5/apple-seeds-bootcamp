const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
  const str = mapWordsArrToSingleStr(arr);
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    let count = map.has(str[i]) ? map.get(str[i]) : 0;
    map.set(str[i], count + 1);
  }

  /* convert the map to object */
  let obj = {};

  map.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};

/* recieves array of words and returns a concatinated string */
const mapWordsArrToSingleStr = (arr) => {
  let buffer = "";

  arr.forEach((word) => {
    buffer += word.trim().toLowerCase();
  });

  return buffer;
};

console.log(countLetters(array));
