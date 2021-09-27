var startScreenEl = document.querySelector("#startScreen");
var questionScreenEl = document.querySelector("#questionScreen");
var resultScreenEl = document.querySelector("#resultScreen");
var highscoresEl = document.querySelector("#highscores");
var timerEl = document.querySelector('#timeEl');
var questiontxt = document.querySelector('#question');

var startbtn = document.querySelector('#startButton');
var answer1btn = document.querySelector('#answer1');
var answer2btn = document.querySelector('#answer2');
var answer3btn = document.querySelector('#answer3');
var answer4btn = document.querySelector('#answer4');
var submitbtn = document.querySelector("#submitInput");
var goBackbtn = document.querySelector("#goBack");
var resetbtn = document.querySelector("#resetScore");

var shuffledQuestion;
var timerCount = 99;
var questions = [{
    question: "_____ is a picture in which the flows of computational paths are depicted.",
    answers: ["1. Algorithm", "2. Program", "3. Code", "4. Flow chart"],
    correctAns: 4
}, {
    question: "Among unary operation which operator represents increment?",
    answers: ["1. --", "2. ++", "3. -", "4. !"],
    correctAns: 2
}, {
    question: "If the function returns no value then it is called ____",
    answers: ["1. Data type function", "2. Calling function", "3. Main function", "4. Void function"],
    correctAns: 2
}, {
    question: "Which character is used to indicate the end of the string?",
    answers: ["1. Any alphabet", "2. A", "3. Null", "4. None of these"],
    correctAns: 3
} ]
var currentQuestion = 0;

//start function
function startGame() {
shuffledQuestion = questions.sort(() => Math.random()-0.5);
startScreenEl.style.visibility = "hidden";
questionScreenEl.style.visibility = "visible";
questiontxt.textContent = shuffledQuestion[0].question;
answer1btn.textContent = shuffledQuestion[0].answers[0];
answer2btn.textContent = shuffledQuestion[0].answers[1];
answer3btn.textContent = shuffledQuestion[0].answers[2];
answer4btn.textContent = shuffledQuestion[0].answers[3];
countdown();
}

// question timer function
function countdown() {

    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);

        }
      }, 1000);
}
// Ask question and changes question
function nextQuestion() {}

//function to test to see if its right and give an answer based off it
function answerResult() {

}

//function to submit intials to highscore
function submitScore() {

}

// function to reset highscore list 
function resetScore() {

}

//function to go back to the main screen
function mainScreen() {

}

//event listeners

startbtn.addEventListener('click', startGame);
answer1btn.addEventListener('click', answerResult);
answer2btn.addEventListener('click', answerResult);
answer3btn.addEventListener('click', answerResult);
answer4btn.addEventListener('click', answerResult);
submitbtn.addEventListener('click', submitScore);
goBackbtn.addEventListener('click', mainScreen);
resetbtn.addEventListener('click', resetScore);
