const ageInput = document.querySelector("#age");
const ageBtn = document.querySelector("#age-btn");
const ageMessage = document.querySelector("#age-message");

ageBtn.addEventListener("click", () => {
  const age = Number(ageInput.value);

  if (age >= 18) ageMessage.innerHTML = "you can drink appear";
  else ageMessage.innerHTML = "you’re too young";
});
