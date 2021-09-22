/** Block 1 */
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}

funcA();

// undefined
// 2

/** Block 2 */
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// Colin Ihrig
// undefined

/** Block 3 */
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//undefined
//number

/** Block 4 */
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

// 2
// 2

/** Block 5 */

function funcD1() {
  d = 1;
}
funcD1();

console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e);

// 1
// error

/** Block 6 */
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// "Value of f in global scope: " undefined
// "Value of f in local scope: " 1
