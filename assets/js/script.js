// Global Variables

var startBtn = document.querySelector(".start-button");
var homeDiv = document.querySelector(".home-container");
var startBtn = document.querySelector(".start-button");
var quizDiv = document.querySelector(".quiz-container");
var questionTitle = document.querySelector(".question-title");
var timerSpan = document.querySelector(".timer");
var answerDiv = document.querySelector(".answers");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var timer = 75;
var timeStart = false;
var timeRemain = true;

// Question Index
var i = 0;

// Questions Array

var questionsArr = [
  {
    question: "Commonly used data types do NOT include:",
    answerChoices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if/else statement is enclosed with _______",
    answerChoices: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    correctAnswer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answerChoices: [
      "1. Numbers and strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Strings values must be enclosed within _______ when being assigned to variables.",
    answerChoices: [
      "1. Commas",
      "2. Curly Brackets",
      "3. Quotations",
      "4. Parenthesis",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loop",
      "4. console.log",
    ],
  },
];

// Countdown logic

var countdownTimer = setInterval(countdownStart, 1000);

function countdownStart() {
  if (timeStart) {
    timer--;
  } else if (timer <= 0) {
    timer = 0;
  }
  timerSpan.innerHTML = timer;
}

// Start button eventlistener
startBtn.addEventListener("click", function () {
  homeDiv.remove();
  quizDiv.style.display = "flex";
  countdownStart();
  timeStart = true;
  showQuizQuestions();
});

// Function to display quiz questions

function showQuizQuestions() {
  questionTitle.textContent = questionsArr[i].question;
  answerOne.textContent = questionsArr[i].answerChoices[0];
  answerTwo.textContent = questionsArr[i].answerChoices[1];
  answerThree.textContent = questionsArr[i].answerChoices[2];
  answerFour.textContent = questionsArr[i].answerChoices[3];
}

// Event listeners and function for button clicks

answerOne.addEventListener("click", function (e) {
  var correctAnswer = questionsArr[i].correctAnswer;
  console.log("correctAnswer " + correctAnswer);
});

answerTwo.addEventListener("click", function (e) {
  var correctAnswer = questionsArr[i].correctAnswer;
  console.log("correctAnswer " + correctAnswer);
});

answerThree.addEventListener("click", function (e) {
  var correctAnswer = questionsArr[i].correctAnswer;
  console.log("correctAnswer " + correctAnswer);
});

answerFour.addEventListener("click", function (e) {
  var correctAnswer = questionsArr[i].correctAnswer;
  console.log("correctAnswer " + correctAnswer);
});
