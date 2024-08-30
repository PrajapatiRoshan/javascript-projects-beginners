const time = document.getElementById('timer');

let timer;
let seconds = 0;

const updateTimer = () => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(remainingSeconds).padStart(2, '0')}`;
  time.textContent = formattedTime;
  seconds++;
};

const startTimer = () => {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  stopTimer();
  updateTimer();
  seconds = 0;
};
