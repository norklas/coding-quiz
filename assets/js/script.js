// Element variables
var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector(".container-main");
var startBtn = document.querySelector(".start-button");
var titleEl = document.querySelector(".title-h1");
var startTextEl = document.querySelector(".start-text");

// Creating Elements
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

var answerSpan = document.createElement("span");

// Adding class attributes for styling
btn1.setAttribute("class", "answer-button");
btn2.setAttribute("class", "answer-button");
btn3.setAttribute("class", "answer-button");
btn4.setAttribute("class", "answer-button");

answerSpan.setAttribute("class", "answer-style");

// Timer variables for countdown function
var counter = 60;
var timer = setInterval(countdown, 1000);

// Function for timer
function countdown() {
  if (counter == 0) {
    clearTimeout(timer);
  } else {
    timerEl.innerHTML = "Time: " + counter;
    counter--;
  }
}

// Start button event listener
startBtn.addEventListener("click", function () {
  questionOne();
});

// Function for first question

function questionOne() {
  titleEl.textContent = "Commonly used data types do NOT include:";
  // Removing elements that will not be used
  mainEl.removeChild(startBtn);
  mainEl.removeChild(startTextEl);

  // Appending buttons for answers
  mainEl.appendChild(btn1);
  mainEl.appendChild(btn2);
  mainEl.appendChild(btn3);
  mainEl.appendChild(btn4);

  // Adding text content to list elements
  btn1.innerText = "1. Strings";
  btn2.innerText = "2. Booleans";
  btn3.innerText = "3. Alerts";
  btn4.innerText = "4. Numbers";

  // Event Listeners for buttons
  mainEl.addEventListener("click", function (event) {
    if (event.target == btn1 || event.target == btn2 || event.target == btn4) {
      mainEl.appendChild(answerSpan);
      answerSpan.innerText = "Wrong!";
    } else if (event.target == btn3) {
      mainEl.appendChild(answerSpan);
      answerSpan.innerText = "Correct!";
    }
  });
}
