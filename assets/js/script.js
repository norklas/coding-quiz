// Element variables
var timerEl = document.querySelector(".timer");

// Timer variables for countdown function
var counter = 60;
var timer = setInterval(countdown, 1000);

// Function for timer
function countdown() {
  if (counter === 0) {
    clearTimeout(timer);
  } else {
    timerEl.innerHTML = "Time: " + counter;
    counter--;
  }
}
