const workTime = 25 * 60; // 25 minutes in seconds
const breakTime = 5 * 60; // 5 minutes in seconds

let isWorking = false;
let intervalId;

function startTimer() {
  const workTimerDisplay = document.getElementById('workTimer');
  const breakTimerDisplay = document.getElementById('breakTimer');
  const startButton = document.getElementById('startButton');
  const resetButton = document.getElementById('resetButton');

  let duration = isWorking ? breakTime : workTime;

  intervalId = setInterval(() => {
    if (duration >= 0) {
      if (isWorking) {
        breakTimerDisplay.textContent = `Break Time: ${formatTime(duration)}`;
      } else {
        workTimerDisplay.textContent = `Work Time: ${formatTime(duration)}`;
      }
      duration--;
    } else {
      clearInterval(intervalId);
      if (isWorking) {
        isWorking = false;
        duration = workTime;
        breakTimerDisplay.style.display = 'none';
        workTimerDisplay.style.display = 'block';
      } else {
        isWorking = true;
        duration = breakTime;
        workTimerDisplay.style.display = 'none';
        breakTimerDisplay.style.display = 'block';
      }
      startButton.style.display = 'block';
      resetButton.style.display = 'block';
    }
  }, 1000);

  startButton.style.display = 'none';
  resetButton.style.display = 'none';

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}

document.getElementById('startButton').addEventListener('click', () => {
  startTimer();
});

document.getElementById('resetButton').addEventListener('click', () => {
  clearInterval(intervalId);
  isWorking = false;
  document.getElementById('workTimer').textContent = '';
  document.getElementById('breakTimer').textContent = '';
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('resetButton').style.display = 'none';
});