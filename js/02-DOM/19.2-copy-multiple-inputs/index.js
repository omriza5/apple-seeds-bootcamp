const container = document.querySelector(".container");
const form = document.querySelector(".form");
const formInputs = document.querySelector(".form-inputs");
const randomCodePar = document.querySelector("#random-code");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

const randomCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
let copiedCode = "";

/** populate the code paragraph with some random number */
randomCodePar.innerHTML = randomCode;

formInputs.children[0].addEventListener("paste", (e) => {
  copiedCode = e.clipboardData.getData("text");

  for (let i = 0; i < formInputs.children.length; i++) {
    formInputs.children[i].value = copiedCode[i];
  }
});

form.addEventListener("input", (e) => {
  if (e.target.nextElementSibling && e.target.value.length === 1)
    e.target.nextElementSibling.focus();
});

btn.addEventListener("click", (e) => {
  const userInput = extractUserCode(form.childNodes[1].children) || copiedCode;

  if (userInput == randomCode) {
    message.innerHTML = "Successfully Verified";
    message.style.color = "green";
  } else {
    message.innerHTML = "Code Was Not Verified";
    message.style.color = "red";
  }
  message.style.display = "block";
});

function extractUserCode(inputs) {
  let code = "";

  for (let input of inputs) code += input.value;

  return code;
}
