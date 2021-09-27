var startScreenEl = document.getElementById("#startScreen");
var questionScreenEl = document.getElementById("#questionScreen");
var resultScreenEl = document.getElementById("#resultScreen");
var highscoresEl = document.getElementById("#highscores");

var startbtn = document.getElementById('#startButton');
var answer1btn = document.getElementById('#answer1');
var answer2btn = document.getElementById('#answer2');
var answer3btn = document.getElementById('#answer3');
var answer4btn = document.getElementById('#answer4');
var submitbtn = document.getElementById("#submitInput");
var goBackbtn = document.getElementById("#goBack");
var resetbtn = document.getElementById("#resetScore");

var timerCount = 99;

//start function
function startGame() {


}

// question timer function
function countdown() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
          // Tests if win condition is met
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            winGame();
          }
        }
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          loseGame();
        }
      }, 1000);
}

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
