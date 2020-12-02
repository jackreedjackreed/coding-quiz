
//    V A R I A B L E S   //

var quizContainer = $("#quizPageContainer");
var startContainer = $("#startPageContainer");
var highScoresContainer = $("#highScoresContainer");
var startButton = $("#startButton");
var answerButton0 = $("#answerButton0");
var answerButton1 = $("#answerButton1");
var answerButton2 = $("#answerButton2");
var answerButton3 = $("#answerButton3");
var correctIncorret = $("#correctIncorrect");
var remainingQuestions = $("#remainingQuestions");


// user score
    // var userScore = 0
// questions array
    var questions = [
        { // question 1  --> questions[0]
            question: "what's my name?",
            // 
            answers: [
                {text: "jack", correct: true}, // borrowed this question array layout from https://www.youtube.com/watch?v=riDzcEQbX6k
                {text: "hack", correct: false},
                {text: "sack", correct: false},
                {text: "quack", correct: false}
            ]
        },
        { // question 2
            question: "how many plants are nearby?",
            answers: [
                {text: "4", correct: false},
                {text: "7", correct: true},
                {text: "5", correct: false},
                {text: "9", correct: false}
            ]
        }
    ]

console.log(questions[0]);
console.log(questions[0].question);
console.log(questions[0].answers[0].text);
// ^ = jack

// timer starts at 60

// ---------------------------------------------- //

quizContainer.hide();
highScoresContainer.hide();
correctIncorret.hide();
remainingQuestions.hide();

// start game function
startButton.on("click", function startGame() {
    // user score
    var userScore = 0;
    // starts the time
    function startTime() {
        // s t a r t   the   t i m e 

    }
    // hides the welcome page, shows the quiz
    startContainer.hide();
    quizContainer.show();

    // loop through the length of the questions until end or time = 0
    for (i=0; i<questions.length; i++) {
        // calls for  question
        if (time = 0) {
            endGame();
        }
        else {
            newQuestion(i);
        }
        }
    }
)
    

// start timer function
    // subtract time when wrong answer

// present question and answers
function newQuestion(QuestionsIndex) {
    // grab the h3 from html to display our question
    var question = $(".questionDisplayed");
    // sets text of question to the question at the input index
    question.text(questions[QuestionsIndex].question);
    // change button text for each button
    answerButton0.text(questions[QuestionsIndex].answers[0].text);
    answerButton1.text(questions[QuestionsIndex].answers[1].text);
    answerButton2.text(questions[QuestionsIndex].answers[2].text);
    answerButton3.text(questions[QuestionsIndex].answers[3].text);

    // console.log(answerButton0.text(questions[QuestionsIndex].answers[0].text));
    // console.log(answerButton1.text(questions[QuestionsIndex].answers[1].text));
    // console.log(answerButton2.text(questions[QuestionsIndex].answers[2].text));
    // console.log(answerButton3.text(questions[QuestionsIndex].answers[3].text));
}

console.log(newQuestion(0));

// user answers a question

    // new question

    // IF WRONG, subtract time from timer

// when no more questions or time = 0

    // game over function

    // display high scores

        // add new names

        // clear names