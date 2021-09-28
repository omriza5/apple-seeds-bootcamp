const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
const millisecondsSpan = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;

function start() {
  if (!timer) timer = setInterval(run, 10);
}

function pause() {
  clearInterval(timer);
  timer = false;
  isStopped = true;
}

function run() {
  millisecondsSpan.innerHTML =
    milliseconds < 10 ? "0" + milliseconds : milliseconds;
  secondsSpan.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesSpan.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  milliseconds++;

  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
}
function reset() {
  location.reload();
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
