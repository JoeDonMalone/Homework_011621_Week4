// Variables
var correctBool; //This can be defined based off of user entry;
var startQuizButton; 
var submitButton
var clearHighScore
var timerEl = document.querySelector(".countdown");
var questionAnswers = {
    'Question1': 'answer1',
    'Question2': 'answer2',
    'Question3': 'answer3',
    'Question4': 'answer4',
    'Question5': 'answer5',
    'Question6': 'answer6',
    'Question7': 'answer7',
    'Question8': 'answer8',
    'Question9': 'answer8',
    'Question10': 'answer10',
    'Question11': 'answer11',
}

// Functions
function timerFunction() {
    var timeLeft = 5;
    var timerInterval = setInterval(function() {
    timerEl.textContent = "Seconds Remaining: " + timeLeft;
    timeLeft--;
    console.log(timeLeft);
    
        if (timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timerInterval);
            timerFunction();
        }
    }, 1000);
};


timerFunction();

// Script
