const lorem50 = document.querySelector("#lorem50");
const increaseBtn = document.querySelector("#increase");
const descreaseBtn = document.querySelector("#decrease");

increaseBtn.addEventListener("click", () => {
  let currentFontSize = parseFloat(getComputedFontSize(lorem50));
  if (!isValidFontSize(currentFontSize)) {
    alert(`Font Size ${currentFontSize} is out of range(6px-100px)`);
    lorem50.style.fontSize = "100px";
    return;
  }
  currentFontSize++;
  lorem50.style.fontSize = `${currentFontSize}px`;
});

descreaseBtn.addEventListener("click", () => {
  let currentFontSize = parseFloat(getComputedFontSize(lorem50));
  if (!isValidFontSize(currentFontSize)) {
    alert(`Font Size ${currentFontSize} is out of range(6px-100px)`);
    lorem50.style.fontSize = "6px";
    return;
  }
  currentFontSize--;
  lorem50.style.fontSize = `${currentFontSize}px`;
});

function isValidFontSize(size) {
  return size >= 6 && size <= 100;
}

function getComputedFontSize(elementId) {
  return window.getComputedStyle(elementId, null).getPropertyValue("font-size");
}
