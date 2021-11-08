const fs = require("fs");
const generateUniqId = require("uniqid");

function addUser(name, email) {
  const users = getAllUsers();

  const newUser = {
    id: generateUniqId(),
    name,
    email,
  };
  users.push(newUser);

  fs.writeFileSync("./users.json", JSON.stringify(users));
}

function getUser(userId) {
  const users = getAllUsers();
  const user = users.find((user) => user.id === userId);

  return user;
}
function getAllUsers() {
  const buffer = fs.readFileSync("./users.json");

  return JSON.parse(buffer.toString());
}

function updateUser(userId, name, email) {
  const users = getAllUsers();
  const user = users.find((user) => user.id === userId);

  user.name = name ? name : user.name;
  user.email = email ? email : user.email;

  fs.writeFileSync("./users.json", JSON.stringify(users));
}

function deleteUser(userId) {
  const users = getAllUsers();
  const newUsers = users.filter((user) => user.id !== userId);

  fs.writeFileSync("./users.json", JSON.stringify(newUsers));
}

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
