const englishLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const SUCCESS_MESSAGE = "Right Letter!";
const FAIL_MESSAGE = "Nope, Wrong letter";
const ALREADY_GUESSED_MESSAGE = "has already been guessed!";

const randomIndex = Math.floor(Math.random() * 26);
const letterToBeGuessed = englishLetters[randomIndex];

const guessedKeys = [];

/** elements queries */
const guessedLetterBox = document.querySelector(".guessedLetterBox");
const userLetterInput = document.querySelector("#user-input");
const guessedKeysPar = document.querySelector(".keys-guessed");
const gameStatus = document.querySelector(".gameStatus");
const container = document.querySelector(".container");

/** For me - dont delete */
console.log("Letter To Be Guessed:", letterToBeGuessed);
/** For me - dont delete */

function main(e) {
  const userLetter = e.target.value.toLowerCase();

  if (userLetter === letterToBeGuessed) {
    console.log("hey");
    // replace the "?" with the guessed letter in uppercase
    guessedLetterBox.innerHTML = userLetter.toUpperCase();
    // show success message
    gameStatus.innerHTML = SUCCESS_MESSAGE;
    applyColor(gameStatus, "green");

    // ask the user to play again(create a function)
    playAgain();
    // end the game (return)
    return;
  }

  /** push the letter into guessedKeys if its not exists there */
  if (!isAlreadyGuessed(userLetter)) {
    guessedKeys.push(userLetter);

    displayGuessedKeys();

    // show wrong letter message
    gameStatus.innerHTML = FAIL_MESSAGE;
    applyColor(gameStatus, "red");
  } else if (isAlreadyGuessed(userLetter)) {
    // show alredy guess message
    gameStatus.innerHTML = `${userLetter} ${ALREADY_GUESSED_MESSAGE}`;
    applyColor(gameStatus, "#8B4000");
  }

  e.target.value = "";
}

function isAlreadyGuessed(letter) {
  return guessedKeys.includes(letter);
}

function displayGuessedKeys() {
  guessedKeysPar.innerHTML = guessedKeys.join(",");
}

function applyColor(element, color) {
  element.style.color = color;
}

function playAgain() {
  const playAgainDiv = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = "Would you like to play again?";
  p.classList.add("gameStatus");

  const btn = document.createElement("input");
  btn.type = "submit";
  btn.value = "Yes";
  btn.classList.add("btn");
  btn.addEventListener("click", resetGame);

  playAgainDiv.append(p);
  playAgainDiv.append(btn);
  console.dir(container);
  container.replaceChild(playAgainDiv, container.childNodes[7]);
}

function resetGame() {
  location.reload();
}

/** Event listeners */
userLetterInput.addEventListener("keyup", main);

userLetterInput.addEventListener("focus", () => {
  userLetterInput.placeholder = "";
});
userLetterInput.addEventListener("blur", () => {
  userLetterInput.placeholder = "Type a Letter";
});
