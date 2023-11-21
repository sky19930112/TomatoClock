let timer;
let isRunning = false;

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay  = document.getElementById("timer");

function startTimer(duration){
    let minutes, seconds;
    timer = setInterval(function () {
        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--duration < 0) {
            clearInterval(timer);
            timerDisplay.textContent = "00:00";
            alert("Time's up!");
            isRunning = false;
        }
    }, 1000)
}


startButton.addEventListener("click", function(){
    if (!isRunning) {
        startTimer(25 * 60); // 25 minutes in seconds
        isRunning = true;
        startButton.textContent = "Pause";
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.textContent = "Resume";
    }
});

resetButton.addEventListener("click", function(){
    clearInterval(timer);
    isRunning = false;
    timerDisplay.textContent = "25:00";
    startButton.textContent = "Start";
});