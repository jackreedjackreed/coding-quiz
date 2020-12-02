//    V A R I A B L E S   //

var quizContainer = $("#quizPageContainer");
var startContainer = $("#startPageContainer");
var highScoresContainer = $("#highScoresContainer");

// user score
    // var userScore = 0
// questions array
    var questions = [
        { // question 1
            question: "what's my name?",
            answers: [
                {text: "jack", correct: true}, // borrowed this question array layout from https://www.youtube.com/watch?v=riDzcEQbX6k
                {text: "hack", correct: false}
            ]
        },
        { // question 2
            question: "how many plants are nearby?",
            answers: [
                {text: "4", correct: false},
                {text: "7", correct: true}
            ]
        }
    ]
// timer starts at 60

// ---------------------------------------------- //

quizContainer.hide();
highScoresContainer.hide();

// start game function
function startGame() {
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

        // calls for  question 


}
    

// start timer function
    // subtract time when wrong answer



// present question and answers

// user answers a question

    // new question

    // IF WRONG, subtract time from timer

// when no more questions or time = 0

    // game over function

    // display high scores

        // add new names

        // clear names