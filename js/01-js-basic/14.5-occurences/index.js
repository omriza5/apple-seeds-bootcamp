function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter = counter + 1;
    }
  }
  return counter;
}
const res = countOccurrences("ini mini miny moe", "n");

console.log(res);

// incrementing non-l-value  by one
