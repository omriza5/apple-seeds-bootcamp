/** Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false */

function yesOrNo(value) {
  if (value === true) return "Yes";
  return "No";

  //   return value === true ? "Yes" : "No"
}

/**
 * Sum of lowest numbers
 * Create a function that returns the sum of the two lowest positive numbers given an array of
 * minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
 *
 *  algorithm 1:
 *
 *  1)initiate new array "lowestNumbers" with initial values 0:numbers[0], 1:numbers[1]
 *  2)foreach number in numbers start from i=2 till i < numbers length
 *      2.1)if numbers[i] less than at least one of the numbers in lowestNumbers array
 *          2.1)if subtraction of numbers[i] with lowestNumbers[0] <= subtraction of numbers[i] with lowestNumbers[1]
 *              2.1.1) lowestNumbers[0] = numbers[i]
 *          2.1) if subtraction of numbers[i] with lowestNumbers[0] >= subtraction of numbers[i] with lowestNumbers[1]
 *              2.1.2) lowestNumbers[1] = numbers[i]
 *
 * 3)return lowestNumbers[0] + lowestNumbers[1]
 *
 *
 * algorithm 2:
 *
 * 1) sort the array in asce order
 * 2) return numbers[0] + numbers[1]
 *
 * algorithm 3:
 *
 * 1) sort the array in desc order
 * 2) return numbers[numbers.length-1] + numbers[numbers.length]
 */

const numbers = [10, 343445353, 3453445, 3453545353453];
function sumOfLowestNumbers(numbers) {
  const lowestNumbers = [numbers[0], numbers[1]];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] <= lowestNumbers[0] || numbers[i] <= lowestNumbers[1]) {
      if (numbers[i] - lowestNumbers[0] <= numbers[i] - lowestNumbers[1]) {
        lowestNumbers[0] = numbers[i];
      } else {
        lowestNumbers[1] = numbers[i];
      }
    }
  }

  return lowestNumbers[0] + lowestNumbers[1];
}

// console.log(sumOfLowestNumbers(numbers));

/**
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 *  [0, 0, 0, 1] ==> 1
 *  [0, 1, 0, 1] ==> 5
 */

const binary = [1, 0, 1, 0, 1];

function binaryToDecimal(binary) {
  let pow = 0;
  let sum = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === 1) sum += 2 ** pow;

    pow++;
  }

  return sum;
}

function binaryToDecimal1(binary) {
  const binaryStr = binary.join("");

  return parseInt(binaryStr, 2);
}

// console.log(binaryToDecimal1(binary));

/**
 * Find the Next Perfect Square
 *
 * You might know some pretty large perfect squares. But what about the NEXT one?
 * Complete the findNextSquare method that finds the next integral perfect square after the one
 * passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
 * also an integer.
 * If the parameter is itself not a perfect square then -1 should be returned. You may assume the
 * parameter is positive.
 *
 * findNextSquare(121) --> returns 144
 * findNextSquare(625) --> returns 676
 * findNextSquare(114) --> returns -1 since 114 is not a perfect
 */

function findNextSquare(num) {
  const root = Math.sqrt(num);

  if (root % 1 != 0) return -1;

  return (root + 1) ** 2;
}

// console.log(findNextSquare(625));

/**
 * Unique
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 * It’s guaranteed that array contains at least 3 numbers.
 */

const uniqueNums = [0, 0, 0.55, 0, 0];

function unique(arr) {
  const first = arr[0];
  const second = arr[1];
  const third = arr[2];
  let repeated = 0;

  if (first === second || first === third) repeated = first;
  else repeated = second;

  for (let num of arr) {
    if (num !== repeated) return num;
  }

  return repeated;
}

// console.log("odd: ", unique(uniqueNums));

/**
 * Write a program that finds the summation of every number from 1 to num. The number will
 * always be a positive integer greater than 0.
 */

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}

function summationRecursive(n) {
  if (n <= 1) return n;

  return summationRecursive(n - 1) + n;
}

/**
 * The first century spans from the year 1 up to and including the year 100, The second - from the
 * year 101 up to and including the year 200, etc.
 * Task :
 * Given a year, return the century it is in.
 * Input , Output Examples ::
 * centuryFromYear(1705) returns (18)
 * centuryFromYear( 1900) returns (19)
 * centuryFromYear(1601) returns (17)
 * centuryFromYear(2000) returns (20)
 */

function centuryFromYear(year) {
  if (year <= 100) return 1;
  else if (year % 100 === 0) return year / 100;
  else return Math.floor(year / 100 + 1);
}

// console.log("century: ", centuryFromYear(1705));

/**
 * Your task is to create a function that does four basic .
 * The function should take three arguments - operation(string/char), value1(number),
 * value2(number).
 * The function should return result of numbers after applying the chosen operation.
 * Examples
 * basicOp('+', 4, 7) // Output: 11
 * basicOp('-', 15, 18) // Output: -3
 * basicOp('*', 5, 5) // Output: 25
 * basicOp('/', 49, 7) // Output: 7
 */

function basicOp(operation, firstNum, secondNum) {
  switch (operation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "/":
      return firstNum / secondNum;
    case "*":
      return firstNum * secondNum;
    default:
      return NaN;
  }
}

console.log(basicOp("8", 3, 3));
