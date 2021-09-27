const checkboxInput = document.querySelector("#show");
const imgSection = document.querySelector(".img");
let showImage = false;
checkboxInput.addEventListener("click", () => {
  showImage = checkboxInput.checked;

  if (showImage) {
    imgSection.style.display = "block";
  } else {
    imgSection.style.display = "none";
  }
});
