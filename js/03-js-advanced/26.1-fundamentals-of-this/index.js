/**
 * Question 1:
 * In your own words what will this point to and why?(Note
 * this is the global scope)
 */

console.log("Q1: ", this);

/** "this" will point to empty object in node, and to window object in browser */

/**
 * Question 2:
 * a. In your own words what will this point to and why.
 * b. How can you fix this code
 */

const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Q2: Hello ${this}`);
  },
};
myObj.greet();

/**
 * a => "this" will point to empty object because arrow functions dont bind the "this" keyword
 * b => change arrow function to be normal function
 */

/**
 * Question 3:
 * In your own words what will this point to and why?
 */

const myFuncDec = function () {
  console.log("Q3: ", this);
};
myFuncDec();

/** "this"  will point to global object because this is a stand alone function (doesnt belong to any object)*/

/**
 * Question 4:
 * In your own words what will this point to and why?
 */

const myFuncArrow = () => {
  console.log("Q4: ", this);
};
myFuncArrow();

/** it will point to the global object */

/**
 * Question 5:
 * a. In your own words what will this point to and why.
 * b. How can you fix this code.
 */

// document.querySelector(".element").addEventListener("click", () => {
//   console.log(this);
// });

/** it will point to the window object */
/** replace the arrow function with a regular one */
