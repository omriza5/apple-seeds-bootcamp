const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
const hoursSpan = document.querySelector("#hours");

let seconds = 0;
let minutes = 0;
let hours = 0;
setInterval(() => {
  seconds++;
  if (seconds > 59) seconds = 0;
  secondsSpan.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

setInterval(() => {
  minutes++;
  if (minutes > 59) minutes = 0;
  minutesSpan.innerHTML = seconds < 10 ? "0" + minutes : minutes;
}, 60000);

setInterval(() => {
  hours++;
  if (hours > 24) hours = 0;
  hoursSpan.innerHTML = hours < 10 ? "0" + hours : hours;
}, 3600000);
