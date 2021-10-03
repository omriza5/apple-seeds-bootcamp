const storm = {
  // add code here
  superPower: "flying",
  printSuperPower() {
    console.log("my superpower is " + this.superPower);
  },
};

storm.printSuperPower();

const printSuperPower1 = storm.printSuperPower.bind(storm);

printSuperPower1();
