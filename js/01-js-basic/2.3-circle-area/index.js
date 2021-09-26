const PI = 3.1415926535898;
function circleArea(radius) {
  return PI * (radius * radius);
}

console.log("without rounding: ", circleArea(10));
console.log("round two decimal: ", circleArea(10).toFixed(2));
