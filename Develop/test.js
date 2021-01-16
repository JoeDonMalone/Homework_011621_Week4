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


var score = 0;


// Function Variables
var answersOnly = ['answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1','answer1']
var timeLeft = 11;
var correctBool; //This can be defined based off of user entry;
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
// Functions


startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    console.log(this.textContent);
    startGame()

});

function setGame (){
    genQuestion.style.visibility ="hidden"
    answerBtn_1.style.visibility = "hidden";
    answerBtn_2.style.visibility = "hidden";
    answerBtn_3.style.visibility = "hidden";
    answerBtn_4.style.visibility = "hidden";
}

function startGame (){
    startQuizButton.style.visibility = "hidden";
    startQuizButton.className = "btn btn-light start-button";
    genQuestion.style.visibility ="visible";
    answerBtn_1.style.visibility = "visible";
    answerBtn_2.style.visibility = "visible";
    answerBtn_3.style.visibility = "visible";
    answerBtn_4.style.visibility = "visible";
    startQuizButton.disabled = true;
    getQuestion();
}

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

function getQuestion() {
    var questions = Object.keys(questionAnswers);
    var randomIndex = Math.floor(Math.random() * 11);
    genQuestion.textContent = questions[randomIndex];
    var genQuestionKey = genQuestion.textContent;
    getAnswer(genQuestionKey);
};


function getAnswer (genQuestionKey){
    var correctAnswer = questionAnswers[genQuestionKey];
    // console.log(correctAnswer)
};

function assignAnswers() {

};

function answerFound() {
    for (var [key, value] of Object.entries(questionAnswers)) {
        if(value.includes('answer1')) {
        console.log(key,':', value);
        } else {
            console.log('not here')
        }
    };
};



// Function Calls 
 
setGame();








// Future
// var clearHighScore

// function selectQuestionAnswer(){
//     for(var i = 0; i<Object.keys(questionAnswers).length; i++) {
//         var randomIndex = Math.floor((Math.random() * 36)/2)
//         var items = Object.keys(questionAnswers);
//     console.log( );
//     };

// };
// selectQuestionAnswer()