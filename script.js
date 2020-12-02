
//    V A R I A B L E S   //

var quizContainer = $("#quizPageContainer");
var startContainer = $("#startPageContainer");
var highScoresContainer = $("#highScoresContainer");
var startButton = $("#startButton");
var answerButton0 = $("#answerButton0");
var answerButton1 = $("#answerButton1");
var answerButton2 = $("#answerButton2");
var answerButton3 = $("#answerButton3");
var correctIncorrect = $("#correctIncorrect");
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
console.log(questions[0].answers[3].text);
// ^ = quack

// timer starts at 60

// ---------------------------------------------- //

var totalQuestionCount = questions.length;
var currentQuestionCount = 0;
var userScore = 0;

quizContainer.hide();
highScoresContainer.hide();
correctIncorrect.hide();
remainingQuestions.hide();
correctIncorrect.text("heyeheyehey");

// start game function
startButton.on("click", function startGame() {
    // user score
    let userScore = 0;
    // starts the time
    function startTime() {
        // s t a r t   the   t i m e 

    }
    // hides the welcome page, shows the welcome page, hides the correctIncorrect, shows the remaining questions
    startContainer.hide();
    quizContainer.show();
    correctIncorrect.hide();
    remainingQuestions.show();
    runGame();
    }
)

function runGame() {
    //while (totalQuestionCount != currentQuestionCount)  // || time != 0 )
    //{
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
//}

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

    // add event listeners to each button --> input to checkCorrect = the boolean value of the pressed button 
    answerButton0.on("click"), checkCorrect(questions[QuestionsIndex].answers[0].correct);
    answerButton1.on("click"), checkCorrect(questions[QuestionsIndex].answers[1].correct);
    answerButton2.on("click"), checkCorrect(questions[QuestionsIndex].answers[2].correct);
    answerButton3.on("click"), checkCorrect(questions[QuestionsIndex].answers[3].correct);

    return

    // console.log(answerButton0.text(questions[QuestionsIndex].answers[0].text));
    // console.log(answerButton1.text(questions[QuestionsIndex].answers[1].text));
    // console.log(answerButton2.text(questions[QuestionsIndex].answers[2].text));
    // console.log(answerButton3.text(questions[QuestionsIndex].answers[3].text));
}

// user clicks and function checks if correct
function checkCorrect(clickedButtonBoolean) {
    // the boolean is true and answer is correct, user score increased by 1, messages show
    var QuestionsIndex = questions[this];
    if (clickedButtonBoolean) {
        userScore ++;
        correctIncorrect.text("Correct!");
        correctIncorrect.show();
        remainingQuestions.text(QuestionsIndex + "of " + totalQuestionCount + ".");
        remainingQuestions.show();
        return
    }
    else {
        // time -= 5;
        // the boolean is false and answer is incorrect, time -=5, messages show
        correctIncorrect.text("Incorrect boooooo!");
        correctIncorrect.show();
        remainingQuestions.text(QuestionsIndex + " of " + totalQuestionCount + ".");
        remainingQuestions.show();
        return
    }
    // fxn listens for button clicks
    // checks to see if the answer (questions[indexOfQuestionArray].answers[indexOfPressedButton].correct == true)
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