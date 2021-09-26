function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
const res = calcAverage([85, 90, 92]);

console.log(res);

// sum variable must be initialized
