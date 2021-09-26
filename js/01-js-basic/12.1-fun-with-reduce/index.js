const numbers = [5, 100, 10, 15, 20];

const findMax = (nums) =>
  nums.reduce((acc, current) => (acc > current ? acc : current));

console.log("Max: ", findMax(numbers));

const sumEven = (nums) => {
  return nums.reduce((acc, current) => {
    acc += current % 2 === 0 ? current : 0;
    return acc;
  }, 0);
};

console.log("SumEven: ", sumEven(numbers));

const findAvg = (nums) => {
  return (
    nums.reduce((acc, current) => {
      return acc + current;
    }) / nums.length
  );
};

console.log("Avg: ", findAvg(numbers));
