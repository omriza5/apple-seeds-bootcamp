const person = {
  name: "omri zaher",
  printMe: function () {
    console.log(this.name);
  },
  asyncPrintMe: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

person.printMe();
person.asyncPrintMe();
