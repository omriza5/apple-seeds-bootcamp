/** hamburger click event listeners */

const rightSideBar = document.getElementById("rightSideBar");
const hamIcon = document.getElementById("hamIcon");
const exitIcon = document.getElementById("exitIcon");

hamIcon.addEventListener("click", () => {
  rightSideBar.style.display = "initial";
  rightSideBar.style.right = "0";
});

exitIcon.addEventListener("click", () => {
  rightSideBar.style.display = "none";
});
