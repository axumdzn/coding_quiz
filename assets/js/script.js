var startScreenEl = document.querySelector("#startScreen");
var questionScreenEl = document.querySelector("#questionScreen");
var resultScreenEl = document.querySelector("#resultScreen");
var highscoresEl = document.querySelector("#highscores");
var timerEl = document.querySelector('#timeEl');
var questiontxt = document.querySelector('#question');
var resultText = document.querySelector('#resultText');
var scoreText = document.querySelector('#scoreText');
var initialInput = document.querySelector('#initialsInput');
var leaderboardEl = document.querySelector('#leaderboards');

var startbtn = document.querySelector('#startButton');
var answer1btn = document.querySelector('#answer1');
var answer2btn = document.querySelector('#answer2');
var answer3btn = document.querySelector('#answer3');
var answer4btn = document.querySelector('#answer4');
var submitbtn = document.querySelector("#submitInput");
var goBackbtn = document.querySelector("#goBack");
var resetbtn = document.querySelector("#resetScore");

var leaderboard;
var guess;
var score;
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
var shuffledQuestion = questions.sort(() => Math.random()-0.5);

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

function init() {
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"))

    if (leaderboard === undefined) {
        leaderboard = [{
            highscore: 0,
            initials: " "
        }]

        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    }
    else {
        makeList()}

}
// question timer function
function countdown() {

    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
          // Clears interval
          clearInterval(timer);

        }
      }, 1000);
}
// Ask question and changes question
function nextQuestion() {


    questiontxt.textContent = shuffledQuestion[currentQuestion].question;
    answer1btn.textContent = shuffledQuestion[currentQuestion].answers[0];
    answer2btn.textContent = shuffledQuestion[currentQuestion].answers[1];
    answer3btn.textContent = shuffledQuestion[currentQuestion].answers[2];
    answer4btn.textContent = shuffledQuestion[currentQuestion].answers[3];
    resultText.style.visibility = "hidden";

}

//function to test to see if its right and give an answer based off it
function answerResult(event) {
    guess = event.currentTarget.value;
    if(guess == shuffledQuestion[currentQuestion].correctAns)
    {
        resultText.textContent = "Correct";
        resultText.style.visibility = "visible";
        currentQuestion++;
        if(currentQuestion != shuffledQuestion.length) {
            nextQuestion();
        }
        else {
            resultText.style.visibility = "hidden";
             score = timerCount;
             timerCount = 0;
             toScoreScreen();
        }
    }
    else {
        resultText.textContent = "Wrong";
        resultText.style.visibility = "visible";
        timerCount = timerCount - 10;
    }

}
//function to get to the score screen after all questions are displayed
function toScoreScreen() {
    questionScreenEl.style.visibility = "hidden";
    resultScreenEl.style.visibility = "visible";
    scoreText.textContent = "You score is " + score;
}

//function to submit intials to highscore
function submitScore() {
    resultScreenEl.style.visibility = "hidden";
    highscoresEl.style.visibility = "visible";
    leaderboard.push(score, initialInput.value);
    makeList();
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

}

// makes leaderboard list
function makeList() {
    leaderboardEl.children.clear;
    if(leaderboard != null){
        leaderboard.sort(function(a, b){return b - a});
    
        for (let i = 0;i < leaderboard.length;i++) {
            var li = document.createElement('li');
            li.textContent = leaderboard[i].initials + ": " + leaderboard[i].highscore;
            leaderboardEl.append(li);
        }
    }
}
// function to reset highscore list 
function resetScore() {
    leaderboardEl.children.clear;
    localStorage.clear();

}

//function to go back to the main screen
function mainScreen() {
    highscoresEl.style.visibility = 'hidden';
    startScreenEl.style.visibility = "visible";
}



//event listeners
init();
startbtn.addEventListener('click', startGame);
answer1btn.addEventListener('click', answerResult);
answer2btn.addEventListener('click', answerResult);
answer3btn.addEventListener('click', answerResult);
answer4btn.addEventListener('click', answerResult);
submitbtn.addEventListener('click', submitScore);
goBackbtn.addEventListener('click', mainScreen);
resetbtn.addEventListener('click', resetScore);
