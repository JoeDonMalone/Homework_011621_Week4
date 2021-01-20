// Buttons
var startQuizButton = document.querySelector('.start-button'); 
var answerBtn_1 = document.querySelector('#answerBtn-1');
var answerBtn_2 = document.querySelector('#answerBtn-2');
var answerBtn_3 = document.querySelector('#answerBtn-3');
var answerBtn_4 = document.querySelector('#answerBtn-4');

answerBtn_1.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        answerFound(event);
    }
});

answerBtn_2.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        answerFound(event);
    }
});

answerBtn_3.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        answerFound(event);
    }
});

answerBtn_4.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        answerFound(event);
    }
});

// content Variables
var genQuestion = document.querySelector('#generated-question');
var timerEl = document.querySelector(".countdown");
var score = 0;


// Function Variables
// Functions

var timeLeft = 11;
var  questionAnswers = {
    'Question1': 'answer1',
    'Question2': 'answer2',
    'Question3': 'answer3',
    'Question4': 'answer4',
    'Question5': 'answer5',
    'Question6': 'answer6',
    'Question7': 'answer7',
    'Question8': 'answer8',
    'Question9': 'answer9',
    'Question10': 'answer10',
    'Question11': 'answer11'
};

startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    // console.log(this.textContent);
    startGame()

});


function setGame (){
    genQuestion.style.visibility ="hidden"
    answerBtn_1.style.visibility = "hidden";
    answerBtn_2.style.visibility = "hidden";
    answerBtn_3.style.visibility = "hidden";
    answerBtn_4.style.visibility = "hidden";
}
// Initialize global Variables  & Get Questions and Answers assigned to buttons
function startGame (){
    questionAnswers = {
        'Question1': 'answer1',
        'Question2': 'answer2',
        'Question3': 'answer3',
        'Question4': 'answer4',
        'Question5': 'answer5',
        'Question6': 'answer6',
        'Question7': 'answer7',
        'Question8': 'answer8',
        'Question9': 'answer9',
        'Question10': 'answer10',
        'Question11': 'answer11'
    };
    startQuizButton.style.visibility = "hidden";
    startQuizButton.className = "btn btn-light start-button";
    genQuestion.style.visibility ="visible";
    answerBtn_1.style.visibility = "visible";
    answerBtn_2.style.visibility = "visible";
    answerBtn_3.style.visibility = "visible";
    answerBtn_4.style.visibility = "visible";
    startQuizButton.disabled = true;
    getQuestion();
    // getAnswer();
}

function timerFunction() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Seconds Remaining:  " + timeLeft;
        if (timeLeft === 0) {
            timerEl.textContent = "Seconds Remaining:  "+ timeLeft;
            startQuizButton.textContent = 'RESET';
            clearInterval(timerInterval);
            startQuizButton.disabled = false;
            startQuizButton.style.visibility = "visible"
            this.startQuizButton.addEventListener('click', function(event) {
                event.preventDefault();
                timeLeft = 5;
                timerInterval;
            })
        }
    }, 1000);
};

function getQuestion() {
    var questions = Object.keys(questionAnswers);
    var randomIndex = Math.floor(Math.random() * 11);
    genQuestion.textContent = questions[randomIndex];
    // return getAnswer(genQuestionKey);
    assignAnswers();
    
};

function assignAnswers() {
    var answers = ['answer1','answer2','answer3','answer4','answer5','answer6','answer7','answer8','answer9','answer10','answer11']
    var answerButtons = [answerBtn_1, answerBtn_2, answerBtn_3, answerBtn_4]
    for(var i = 0;i<4;i++) {
        randomButtonIndex = Math.floor(Math.random() * answerButtons.length);
        randomAnswerIndex = Math.floor(Math.random() * answers.length);
        buttonAssignment =  answerButtons[randomButtonIndex];
        buttonToRemove = answerButtons.indexOf(buttonAssignment);
        answerButtons.splice(buttonToRemove,1);
        answerAssignment = answers[randomAnswerIndex];
        answerToRemove = answers.indexOf(answerAssignment);
        answers.splice(answerToRemove,1);
        buttonAssignment.textContent = answerAssignment;
    };
    

};

function getAnswer(){
    var genQuestionKey = genQuestion.textContent;
    var correctAnswer = questionAnswers[genQuestionKey];
    // console.log('Question: ', genQuestionKey, 'Answer: ', correctAnswer)
};



function answerFound(event) {
    var genQuestionKey = genQuestion.textContent;
    var userSelection = event.target.textContent;
    for (var [key, value] of Object.entries(questionAnswers)) {
        if(value.includes(userSelection)) {
            console.log('HERE IS THE ANSWER: ', key,':', value);
            delete questionAnswers[genQuestionKey];
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