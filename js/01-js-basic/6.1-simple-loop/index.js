const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) console.log(arr[i]);

function arrayLength(arr) {
  let length = 0;

  arr.forEach((element) => length++);

  return length;
}

function arraySum(arr) {
  let sum = 0;

  arr.forEach((element) => (sum += element));

  return sum;
}

function arrayMulti(arr) {
  let sum = 0;

  arr.forEach((element) => (sum *= element));

  return sum;
}

console.log("array length:", arrayLength(arr));
console.log("array sum:", arraySum(arr));
console.log("array sum:", arrayMulti(arr));
