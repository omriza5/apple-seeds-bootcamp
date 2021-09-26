const textArea = document.querySelector("#jobInterest");
const textAreaBtn = document.querySelector("#jobInterestBtn");
const danger = document.querySelector("#dangerDiv");

textAreaBtn.addEventListener("click", () => {
  const currentLength = textArea.value.length;

  if (!isValidLength(currentLength)) {
    danger.style.display = "block";
  } else {
    danger.style.display = "none";
  }
});

function isValidLength(length) {
  return length >= 100;
}
