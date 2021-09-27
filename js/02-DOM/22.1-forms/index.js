const form = document.querySelector(".form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const messagePar = document.querySelector(".message");

function handleSubmit(e) {
  e.preventDefault();

  const isConfirmed = confirm(`
            ${name.value}
            ${age.value} 
            ${email.value}
  
            Are You Sure?`);

  if (isConfirmed) messagePar.style.display = "block";
}

form.addEventListener("submit", handleSubmit);
