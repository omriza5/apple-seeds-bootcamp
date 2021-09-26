const words = ["boo", "doooo", "hoo", "ro"];

function lengthOfWords(words) {
  let wordsLength = [];

  let i = 0;

  while (i < words.length) {
    wordsLength.push(words[i].length);
    ++i;
  }

  return wordsLength;
}

console.log(lengthOfWords(words));
