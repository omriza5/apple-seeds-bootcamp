const container = document.querySelector(".container");

const DOGS_END_POINT = "https://dog.ceo/api/breeds/image/random";
let scroll = 200;
let lastScrollTop = 0;
let firstFetch = false;

if (!firstFetch) {
  getDogImgs(30);
  firstFetch = true;
}
document.addEventListener("scroll", async (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    if (window.pageYOffset >= scroll) {
      getDogImgs(5);
      console.log(window.pageYOffset);
      scroll += 200;
    }
  }
});

async function getDogImgs(numOfImgs) {
  const dogs = [];

  try {
    for (let i = 0; i < numOfImgs; i++) {
      const { message } = await (await fetch(DOGS_END_POINT)).json();

      dogs.push(message);
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
