function fibonacci(n) {
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return sum;
}

function tribonacci(n) {
  let a = 0;
  let b = 1;
  let c = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = a + b + c;
    a = b;
    b = c;
    c = sum;
  }

  return sum;
}

// console.log(fibonacci(1));
console.log(tribonacci(5));
