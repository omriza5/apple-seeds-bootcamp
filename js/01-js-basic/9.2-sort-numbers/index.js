const numbers = [1, -5, 666, 2, 400, 11];

const asce = numbers.sort();
console.log(asce);

const desc = numbers.sort((a, b) => b - a);
console.log(desc);
