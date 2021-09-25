/**
 * This time no story, no theory. The examples below show you how to write function
 * accum:
 * Examples:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(str) {
  let newStr = "";
  const strArr = str.split("").map((letter) => letter.toUpperCase());

  for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i];
    for (let j = 0; j < i; j++) {
      newStr += String.fromCharCode(strArr[i].charCodeAt(strArr[i]) + 32);
    }
    if (i != strArr.length - 1) newStr += "-";
  }
  console.log(newStr);
}

accum("cwAt");

/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and
 * numeric digits that occur more than once in the input string. The input string can be assumed to
 * contain only alphabets (both uppercase and lowercase) and numeric digits.
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function countDuplicates(str) {
  let charsObj = {};

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLowerCase();
    if (charsObj.hasOwnProperty(currentChar)) charsObj[currentChar]++;
    else charsObj[currentChar] = 1;
  }

  for (let key in charsObj) if (charsObj[key] > 1) count++;

  return count;
}

console.log(countDuplicates("aA11"));

/**
 * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
 * longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2.
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 */

function organizeStrings(strA, strB) {
  const set = new Set();
  // concatinate strings
  const concatinated = strA + strB;

  // remove duplicated letter
  for (let i = 0; i < concatinated.length; i++) set.add(concatinated[i]);

  // convert string to array
  const distinctArr = Array.from(set);
  // sort the array in ascending order
  distinctArr.sort();

  // return array as string
  return distinctArr.join("");
}

// console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
 * a function that determines whether a string that contains only letters is an isogram. Assume the
 * empty string is an isogram. Ignore letter case.
 * isIsogram("Dermatoglyphics") == true
 * isIsogram("aba") == false
 * isIsogram("moOse") == false // -- ignore letter case
 */

function isOgram(str) {
  const map = new Map();
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) return false;

    map.set(str[i], 0);
  }

  return true;
}

// console.log(isOgram("123345"));
