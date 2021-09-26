const smileys = document.querySelector(".smileys");
const smileysBtn = document.querySelector("#smileysBtn");
const smileysInput = document.querySelector("#smileysAmount");
const smileysDiv = document.querySelector(".smileys");

let amount = 0;

function displaySmilyes(amount) {
  amount = Math.floor(Number(smileysInput.value));
  if (isNaN(amount)) {
    alert("type only numbers please");
    return;
  }
  if (amount < 0) {
    alert("type number greater than 0");
    return;
  }

  /** remove previous state */
  smileysDiv.innerHTML = "";

  /** render the smile img */
  for (let i = 0; i < amount; i++) {
    const smilyImg = document.createElement("img");
    smilyImg.src = "./smily.jpg";
    smilyImg.style.width = "200px";
    smilyImg.style.height = "200px";
    smileysDiv.append(smilyImg);
  }
}

smileysBtn.addEventListener("click", displaySmilyes);
