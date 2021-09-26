function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
const result = getSum([1, 2, 3], [5, 66, 23]);
console.log(result);

// line 2 and 11
// vscode debug tool
// syntax error in getSum arguments
// try to assign value to a const var
