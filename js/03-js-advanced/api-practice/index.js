const container = document.querySelector(".container");

const DOGS_END_POINT = "https://dog.ceo/api/breeds/image/random";
const CATS_END_POINT = "https://cataas.com/cat?json=true";

let scroll = 150;
let lastScrollTop = 0;
let firstFetch = false;
let index = 0;

/** on first load */
if (!firstFetch) {
  getPetImgs(25, "dog");
  firstFetch = true;
}

document.addEventListener("scroll", async (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    if (window.pageYOffset >= scroll) {
      index % 2 === 0 ? getPetImgs(5, "cat") : getPetImgs(5, "dog");

      scroll += 150;
      index++;
    }
  }
});

async function getPetImgs(numOfImgs, pet) {
  const dogs = [];
  const endpoint = pet === "dog" ? DOGS_END_POINT : CATS_END_POINT;
  try {
    for (let i = 0; i < numOfImgs; i++) {
      const response = await fetch(endpoint);
      const result = await response.json();

      dogs.push(result.message || `https://cataas.com/${result.url}`);
    }

    updateView(dogs);
  } catch (error) {
    console.log(err);
  }
}

function updateView(dogs) {
  for (let i = 0; i < dogs.length; i++) {
    const img = document.createElement("img");
    img.src = dogs[i];
    container.appendChild(img);
  }
}
