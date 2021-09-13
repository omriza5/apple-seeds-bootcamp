const words = ["boo", "doooo", "hoo", "ro"];

function lengthOfWords(words) {
  let wordsLength = [];

  words.forEach((word) => {
    wordsLength.push(word.length);
  });

  return wordsLength;
}

console.log(lengthOfWords(words));
