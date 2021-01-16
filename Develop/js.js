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
    'Question11': 'answer11'
};
var answersOnly = ['answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1']
// Functions
startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    console.log(this.textContent);
    startQuizButton.disabled = true;
    startQuizButton.style.visibility = "hidden"
    startQuizButton.className = "btn btn-light start-button";

});


// function generatQuestions () {
    // for(var i = 0; i<questionAnswers.length(); i++)
            // key.answers[i] i
// {    //Loop through our questionobject
//     //select 1 question:answer
//     //select 3 items from our answers that are incorrect
//      add false questions to some button context
// }

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
