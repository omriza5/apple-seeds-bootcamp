const numbers = [1, 2, 3, 4, 15, 18, 23];

const doubleValues = (numbers) => numbers.map((num) => num * 2);

const onlyEvenValues = (numbers) => {
  const evenValues = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) evenValues.push(number);
  });
  return evenValues;
};

const showFirstAndLast = (elements) => {
  const result = [];
  //   const firstElement = numbers[0];
  //   const lastElement = numbers[numbers.length - 1];

  //   result.push(firstElement + "");
  //   result.push(lastElement + "");

  for (let i = 0; i < elements.length; i++) {
    if (i === 0 || i === elements.length - 1) result.push(elements[i] + "");
  }

  return result;
};

const vowelCount = (word) => {
  const wordMap = new Map();
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let count = wordMap.has(word[i]) ? wordMap.get(word[i]) : 0;
    wordMap.set(word[i], count + 1);
  }

  const result = {};

  for (let [key, value] of wordMap) result[key] = value;

  return result;
};

const capitalize = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) newStr += str[i];
    else newStr += String.fromCharCode(str.charCodeAt(i) - 32);
  }
  return newStr;
};

const shiftLetters = (str) => {
  str = str.toLowerCase();

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 97)
      newStr += String.fromCharCode(str.charCodeAt(i) + 25);
    else newStr += String.fromCharCode(str.charCodeAt(i) - 1);
  }

  return newStr;
};

const swapCase = (str) => {
  const strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) strArr[i] = capitalize(strArr[i]);

  return strArr.join(" ");
};

console.log(swapCase("Omri Zaher"));

const str1 = "seeham";

const arr1 = str1.split("");
// console.log(arr1);

const vowelObj = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0,
};

arr1.map((letter) => {
  if (vowelObj.hasOwnProperty(letter)) {
    vowelObj[letter]++;
  }
});

// for (let letter in vowelObj) {
//   if (vowelObj[letter] === 0) {
//     delete vowelObj[letter];
//   }
// }
console.log(vowelObj);
