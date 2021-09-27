const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const ol = document.createElement("ol");

document.body.append(ol);

users.forEach((user) => {
  const li = document.createElement("li");

  li.innerHTML = `${user.firstName} ${user.lastName}`;
  li.style.listStyle = "none";
  li.setAttribute("data-id", user.id);

  ol.append(li);
});
