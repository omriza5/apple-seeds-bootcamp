const listElement = document.querySelector(".start-here");

/** change the title */
listElement.innerHTML = "Main Title";

/** add new li item */
const newListElement = document.createElement("li");
newListElement.innerHTML = "sub title 4";
listElement.nextElementSibling.children[0].append(newListElement);

/** remove last li child  */
const lastLiChild = listElement.nextElementSibling.nextElementSibling;
lastLiChild.remove();

/** change the document title */
document.title = "Master Of The Dom";

/** change the content of p */
listElement.parentNode.nextSibling.nextSibling.innerHTML = "Omri Zaher!!!";
