const cartAmount = document.getElementById("cartAmount");
const cartAdd = document.getElementById("cartAdd");

const badge = document.querySelector(".badge");

cartAdd.addEventListener("click", () => {
  const amount = parseInt(cartAmount.innerText);
  const numOfProductsInCart = amount + 1;

  /** make the amount on middle of the cart(CSS) */
  if (numOfProductsInCart >= 10) badge.style.left = "1.39rem";

  /* update the view*/
  cartAmount.innerText = numOfProductsInCart;
});
