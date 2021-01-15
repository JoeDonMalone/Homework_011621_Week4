// Variables
var correctBool; //This can be defined based off of user entry;
var startQuizButton = document.querySelector('.start-button'); 
var submitButton
var clearHighScore
var timerEl = document.querySelector(".countdown");
var wins = 0;
var losses = 0;
var words = [];//Maybe for answers?
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
startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    console.log(this.textContent);
    startQuizButton.disabled = true;
    startQuizButton.style.visibility = "hidden"
    // document.getElementById("myBtn").disabled = true;

});

var timeLeft = 11;
function timerFunction() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Seconds Remaining: " + timeLeft;
        console.log(timeLeft);

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds Remaining: "+ timeLeft;
            startQuizButton.textContent = 'RESET';
            clearInterval(timerInterval);
            startQuizButton.disabled = false;
            startQuizButton.style.visibility = "visible"
            this.startQuizButton.addEventListener('click', function(event) {
                event.preventDefault();
                timeLeft = 11;
                timerInterval;
            })
        }
    }, 1000);
};

for (var [key, value] of Object.entries(questionAnswers)) {
    if(value.includes('answer1')) {
    console.log('Well Done');
    console.log(key,':', value);
    } else {
        console.log('not here')
    }
};
// timerFunction();

// Script
