/** Filter implementation */
Array.prototype.myfilter = function (func) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) result.push(this[i]);
  }

  return result;
};

const filteredArr = [1, 2, 3, 4, 5, 6].myfilter(function (element) {
  return element % 2 === 0;
});

const oddArr = [1, 2, 3].myfilter((e) => {
  return e % 2 !== 0;
});
console.log(oddArr);
// console.log(filteredArr);

/** map implementation */
Array.prototype.myMap = function (func) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i]));
  }
  return result;
};

const mappedArr = [1, 2, 3, 4].myMap(function (element) {
  return element + 2;
});

// console.log(mappedArr);

/** reduce implementation */

Array.prototype.myReduce = function (func, initialValue) {
  let acc = initialValue ? initialValue : this[0];
  let current = initialValue ? 0 : 1;

  const iterationLimit = initialValue ? this.length : this.length - 1;
  for (let i = 0; i < iterationLimit; i++) {
    acc = func(acc, this[current++]);
  }

  return acc;
};

const reduced = [1, 2, 3, 4, 5].myReduce(function (acc, current) {
  return acc + current;
});

// console.log(reduced);

/*
 * Create a function that takes length and width and finds the perimeter of a rectangle.
 */

function calculateRectanglePerimeter(length, width) {
  return width * 2 + length * 2;
}

console.log(calculateRectanglePerimeter(2, 9));
