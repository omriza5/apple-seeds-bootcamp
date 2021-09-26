const person = {
  firstName: "Omri",
  lastName: "Zaher",
};
const swapKeyAndValue = (obj) => {
  let newObj = {};
  for (let item in obj) {
    newObj[obj[item]] = item;
  }

  return newObj;
};

console.log(swapKeyAndValue(person));
