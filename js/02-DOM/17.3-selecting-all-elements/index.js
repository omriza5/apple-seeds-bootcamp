/** way one */
const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");

/** way two */
const divs = [];
const allDivs = document
  .querySelectorAll("div")
  .forEach((div) => divs.push({ [div.id]: div }));

console.log(divs[0].myFirstDiv);
