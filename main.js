const countdownContainer = document.createElement("div");
countdownContainer.id = "countdown-container";

const countdownText = document.createElement("p");
countdownText.id = "countdown-text";
const countdownValueElement = document.createElement("span");
countdownValueElement.id = "countdown-value";
countdownValueElement.innerText = formatTime(600);
countdownText.innerText = " ";
countdownText.appendChild(countdownValueElement);

const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.innerText = "Start Count";

const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.innerText = "Reset Count";

countdownContainer.appendChild(countdownText);
countdownContainer.appendChild(startButton);
countdownContainer.appendChild(resetButton);

document.body.appendChild(countdownContainer);

let countdownValue = 600;
let countdownInterval;

function startCountdown() {
  if (!countdownInterval) {
    countdownValue--;
    countdownInterval = setInterval(updateCountdown, 1000);
  }
}

function updateCountdown() {
  countdownValue--;

  if (countdownValue === 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    alert("Countdown finished!");
  }

  countdownValueElement.innerText = formatTime(countdownValue);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  countdownValue = 600; //
  countdownValueElement.innerText = formatTime(countdownValue);
}

function formatTime(time) {
  const minutes = Math.floor((time % 3600) / 60);

  const seconds = time % 60;

  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return String(value).padStart(2, "0");
}

startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
