// Buttons
var startQuizButton = document.querySelector('.start-button'); 
var answerBtn_1 = document.querySelector('#answerBtn-1');
var answerBtn_2 = document.querySelector('#answerBtn-2');
var answerBtn_3 = document.querySelector('#answerBtn-3');
var answerBtn_4 = document.querySelector('#answerBtn-4');


answerBtn_1.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        checkAnswer(event);
    }
});

answerBtn_2.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        checkAnswer(event);
    }
});

answerBtn_3.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        checkAnswer(event);
    }
});

answerBtn_4.addEventListener('click', function(event) {
    if(!(event.target.type === 'button')); {
        checkAnswer(event);
    }
});


// content Variables
var genQuestion = document.querySelector('#generated-question');
var timerEl = document.querySelector(".countdown");
var scoreEl = document.querySelector("#score");
var score = 0;
var timeLeft = 60;
var userNameInput = 'JDM'//prompt("Enter Your Initials")
var userName =  document.querySelector('#user-name');

// Function Variables
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

// On function call, write this object to the local storage
function writeStats() {

    // var userStats = JSON.parse(localStorage.getItem('userStats'));
    var userStats = {
        userName: userNameInput,
        highScore: 0
    };
    // localStorage.setItem('userStats',JSON.stringify({'userName':'JDM', 'highScore':100}))
    //Write stats only if User Name has changed, or if Score is higher than highest value
    if((userStats['userName'] == userNameInput)){
        console.log(score," ", userStats['highScore'], score > userStats['highScore'])
        // localStorage.setItem('userStats', JSON.stringify(userStats))
        // console.log('Sorry')
    } else {
        localStorage.setItem('userStats', JSON.stringify(userStats));
        // alert("You've beaten your Highest Score! Well Done!");
    }
    // if(userStats['highScore']>score){
    //     localStorage.setItem('userStats', JSON.stringify(userStats))
    //     console.log('Sorry')
    // } else {
    //     localStorage.setItem('userStats', JSON.stringify(userStats));
    //     alert("You've beaten your Highest Score! Well Done!");
    // }

    
    //Alert user of New high score, if highest score yet

}
// Functions
function keepScore() {
    score++;
    scoreEl.textContent = "Score: " + score;
}

startQuizButton.addEventListener('click', function(event) {
    timerFunction();
    startGame();
    score = 0;
    scoreEl.textContent = "Score: " + score;

});


function setGame (){
    // userNameInput.style.visibility = "hidden";
    userName.textContent = "User Name: " + userNameInput;
    genQuestion.style.visibility ="hidden";
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
    timeLeft = 60
    userName.style.visibility = "visible";
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
        if (timeLeft === 0 || Math.sign(timeLeft) == -1) {
            timerEl.textContent = "Seconds Remaining:  "+ "0";
            writeStats();
            startQuizButton.textContent = 'RESET';
            clearInterval(timerInterval);
            startQuizButton.disabled = false;
            startQuizButton.style.visibility = "visible";
            this.startQuizButton.addEventListener('click', function(event) {
                timerInterval;
            })
        } 
    }, 1000);
};

function getQuestion() {
    var questions = Object.keys(questionAnswers);
    var randomIndex = Math.floor(Math.random() * 11);
    genQuestion.textContent = questions[randomIndex];
    assignAnswers();
    
};

function assignAnswers() {
        var answers = ['answer1','answer2','answer3','answer4','answer5','answer6','answer7','answer8','answer9','answer10','answer11']
        var answerButtons = [answerBtn_1, answerBtn_2, answerBtn_3, answerBtn_4];
    //while selectedButtons does not include randombuttonIndex do assign random buttons()
    random(); 
    function random() {
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
    } 
    // for(var i = 0;i<4;i++){
    //     console.log(questionAnswers[genQuestion.textContent]);
    // }
    
};
// Check the answer when a user clicks a button
function checkAnswer(event) {
    var genQuestionKey = genQuestion.textContent;
    if(event.target.textContent === questionAnswers[genQuestionKey]){
        keepScore();
        delete questionAnswers[genQuestionKey]; 
        getQuestion();
    } else {timeLeft -= 10;
        getQuestion();
    }
    
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