const obj1 = { name: "Omri Zaher" };
const obj2 = { name: "Saleh Faraj" };
const obj3 = { name: "Rawnak Kanwar" };

const map = new Map();

map.set(0, obj1);
map.set(1, obj2);
map.set(2, obj3);

map.forEach((element) => console.log(element));
