const form = document.querySelector(".form");
const formInputs = document.querySelector(".form-inputs");
console.dir(formInputs.children);

formInputs.children[0].addEventListener("paste", (e) => {
  const code = e.clipboardData.getData("text");

  for (let i = 0; i < formInputs.children.length; i++) {
    formInputs.children[i].value = code[i];
  }
});

formInputs.children[0].addEventListener("keyup", (e) => {
  console.log("target: ", e.target);
});

form.addEventListener("input", (e) => {});
