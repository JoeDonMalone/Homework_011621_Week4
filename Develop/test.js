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
};

// Functions
function selectQuestionAnswer(){
    for(var i = 0; i<Object.keys(questionAnswers).length; i++) {
        var items = Object.keys(questionAnswers);
    console.log(items[i] );
    }
};
selectQuestionAnswer()