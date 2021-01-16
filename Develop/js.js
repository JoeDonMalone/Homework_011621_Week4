
// Buttons
var startQuizButton = document.querySelector('.start-button'); 
var answerBtn_1 = document.querySelector('#answerBtn-1');
var answerBtn_2 = document.querySelector('#answerBtn-2');
var answerBtn_3 = document.querySelector('#answerBtn-3');
var answerBtn_4 = document.querySelector('#answerBtn-4')

// content Variables
var genQuestion = document.querySelector('#generated-question');

var genQuestion = document.querySelector('#generated-question')
var timerEl = document.querySelector(".countdown");

// var clearHighScore
var score = 0;
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


// Function Variables
var answersOnly = ['answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1']
var timeLeft = 11;
var correctBool; //This can be defined based off of user entry;


// Functions
startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    console.log(this.textContent);
    startQuizButton.disabled = true;
    startQuizButton.style.visibility = "hidden";
    startQuizButton.className = "btn btn-light start-button";
    getQuestion();

});

function getQuestion() {
    var questions = Object.keys(questionAnswers);
    var randomIndex = Math.floor(Math.random() * 11)
    genQuestion.innerHTML = questions[randomIndex]
}


// function generatQuestions () {
    // for(var i = 0; i<questionAnswers.length(); i++)
            // key.answers[i] i
// {    //Loop through our questionobject
//     //select 1 question:answer
//     //select 3 items from our answers that are incorrect
//      add false questions to some button context
// }


function timerFunction() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Seconds Remaining:  " + timeLeft;
        console.log(timeLeft);

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds Remaining:  "+ timeLeft;
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

// for (var [key, value] of Object.entries(questionAnswers)) {
//     if(value.includes('answer1')) {
//     console.log('Well Done');
//     console.log(key,':', value);
//     } else {
//         console.log('not here')
//     }
// };
// timerFunction();

// Script
