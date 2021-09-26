const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find((candy) => candy.id === id);
}

function getPrice(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);

  if (!candy) return "Candy with the given id was not found";

  return candy.price;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name,
    id,
    price,
    amount: 1,
  });
}

function buy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);

  if (!candy) return "Candy with the given id was not found";

  candyStore.cashRegister += candy.price;
  candy.amount -= 1;
}

console.log(candyStore);
buy(candyStore, "5hd7y");
console.log(candyStore);
