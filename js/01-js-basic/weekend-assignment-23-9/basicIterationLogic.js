/**
 * It's pretty straightforward. Your goal is to create a function that removes the first and last
 * characters of a string. You're given one parameter, the original string. You don't have to worry
 * with strings with less than two characters.
 */

function trimString(str) {
  let trimed = "";

  for (let i = 1; i < str.length - 1; i++) trimed += str[i];

  return trimed;
}

/**
 * Write a function called repeat_str which repeats the given string src exactly count times.
 * repeatStr(6, "I") // "IIIIII"
 * repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

function repeatString(n, str) {
  let result = "";
  for (let i = 0; i < n; i++) result += str;

  return result;
}

// console.log(repeatString(5, "Omri"));

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel
 * casing. The first word within the output should be capitalized only if the original word was
 * capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 * Examples
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

function toCamelCase(str) {
  let camelCaseStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      camelCaseStr += str[i + 1].toUpperCase();
      i++;
    } else camelCaseStr += str[i];
  }

  return camelCaseStr;
}

// console.log(toCamelCase("Omri_zaherpowe_r"));

/**
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
 * string with all even indexed characters in each word upper cased, and all odd indexed
 * characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
 * index is even, therefore that character should be upper cased.
 * The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
 * be present if there are multiple words. Words will be separated by a single space(' ').
 * Examples:
 * toWeirdCase( "String" );//=> returns "StRiNg"
 * toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

function toWeirdCase(str) {
  let weirdStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    weirdStr += currentChar;
  }

  return weirdStr;
}

// console.log(toWeirdCase("String"));

/**
 * Write a function to convert a name into initials. This kata strictly takes two words with one space
 * in between them.
 * The output should be two capital letters with a dot separating them.
 * It should look like this:
 * Sam Harris => S.H11
 */

function convertToInitial(str) {
  const strArr = str.split(" ");

  return strArr[0][0].toUpperCase() + "." + strArr[1][0].toUpperCase();
}

// console.log(convertToInitial("omri zaher"));

/**
 * Usually when you buy something, you're asked whether your credit card number, phone number
 * or answer to your most secret question is still correct. However, since someone could look over
 * your shoulder, you don't want that shown on your screen. Instead, we mask it.
 * Your task is to write a function maskify, which changes all but the last four characters into '#'.
 * Examples
 * maskify("4556364607935616") == "############5616"
 * maskify( "64607935616") == "#######5616"
 * maskify( "1") == "1"
 * maskify( "") == ""
 * "What was the name of your first pet?"
 * maskify("Skippy") == "##ippy"
 * maskify("Nananananananananananananananana Batman!") =="####################################man!"
 */

function maskify(str) {
  const maskChar = "#";
  const maskArr = str.split("");

  for (let i = 0; i < maskArr.length - 4; i++) {
    maskArr[i] = maskChar;
  }

  return maskArr.join("");
}

console.log(maskify("15498998"));

/**
 * Simple, given a string of words, return the length of the shortest word(s).
 *  String will never be empty and you do not need to account for different data types.
 */

function shortestWord(words) {
  const wordsObj = mapWordsToObj(words);

  let shortestLength = Number.MAX_VALUE;

  for (let key in wordsObj)
    if (wordsObj[key] < shortestLength) shortestLength = wordsObj[key];

  return shortestLength;
}

function longestWord(words) {
  const wordsObj = mapWordsToObj(words);

  let longestLength = Number.MIN_VALUE;

  for (let key in wordsObj)
    if (wordsObj[key] > longestLength) longestLength = wordsObj[key];

  return longestLength;
}

/*
 * helper function that accepts words array and map it to single object ===> words as key, length as value.
 * {word:length, ... ,word:length}
 */
function mapWordsToObj(words) {
  let wordsObj = {};
  for (let word of words) wordsObj = { ...wordsObj, [word]: word.length };

  return wordsObj;
}

// console.log(shortestWord(["Omri", "Zaher"]));
// console.log(longestWord(["Omri", "Zaher"]));
