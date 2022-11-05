var question = document.getElementById("question")
var highScores = JSON.parse(localStorage.getItem('score')) || [];
var scores = document.getElementById('scores')
console.log(question)
var answers = document.getElementById("answers")
console.log(answers)
var nextButton = document.getElementById("nxt-button")
var startButton = document.getElementById("start-btn")
console.log(startButton)
var hsButton = document.getElementById('hs-btn')
var saveButton = document.getElementById('save-btn')
var timerCount = 40;
var timerElement = document.getElementById('time')
var score = 0;
var currentIndex = 0;
var highest = document.getElementById('highScores')

// variable used to store the questions and answers
var questionArray = [
    {
        question: "What should appear at the very end of your JavaScript?",
        possibleAnswers: ["The < script >", "The END statement", "None of the above", "</script>"],
        correctAnswer: "</script>",
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        possibleAnswers: ["_first_and_last_names", "FirstAndLast", "None of the above", "firstLast"],
        correctAnswer: "None of the above",
    },
    {
        question: " ____________operator is used to assign a value to a variable?",
        possibleAnswers: [
            "*",
            "x",
            "+", "="],
        correctAnswer: "=",
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        possibleAnswers: [
            "Reverse",
            "Shift",
            "Slice", "Splice"],
        correctAnswer: "slice",
    },
    {
        question: "Which statement is not true in java language ?",
        possibleAnswers: [" A public member of a class can be accessed in all the packages.",
            "A private member of a class cannot be accessed from its derived class.",
            " A protected member of a class can be accessed from its derived class.", "A private member of a class cannot be accessed by the methods of the same class."],
    },
]
// Random question and answers picker
var currentQuestion = "";

const lastQuestion = currentQuestion - 1;
// starts the game
function startGame() {
    console.log("Started the game yay");
    answers.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    saveButton.classList.remove('hidden');
    hsButton.classList.remove('hidden');
    question.classList.remove('hidden');
    // now i will set the css to visible display block
    startTimer();
    setNextQuestion();
    //  Gives the next question and answers
}
function setNextQuestion() {
    if (currentIndex < questionArray.length) {
        question.textContent = questionArray[currentIndex].question;
        for (var i = 0; i < 4; i++) {
            answers.children[i].textContent = questionArray[currentIndex].possibleAnswers[i];
            answers.children[i].addEventListener('click', selectAnswer)
        }
        nextButton.addEventListener('click', setNextQuestion)
    }
    else {
        endGame();
    }
}
function saveGame() {
    console.log("Saved to the highscores yay");
    highScores.push(score)
    localStorage.setItem('score', JSON.stringify(highScores))
    highScore();
}
function highScore() {
    console.log(" Did you get the highest score?");
    for (var i = 0; i < highScores.length; i++) {
        var newLi = document.createElement('li')
        newLi.textContent = highScores[i];
        highest.append(newLi)
    }

}
// Time starts at 40 and incorrect answer will deduct 10 secs from the timercount.
function startTimer() {
    timer = setInterval(function () {
        timerElement.textContent = timerCount;
        timerCount--;
    }, 1000);
}

// Challenge Question (time+10)
function challenge() {
    timerCount += 10;
    timerElement.textContent = timerCount;
}

startButton.addEventListener('click', startGame)
saveButton.addEventListener('click', saveGame)



function selectAnswer(event) {
    var isCorrect = event.target.textContent == questionArray[currentIndex].correctAnswer
    if (!isCorrect) {
        timerCount -= 10;
    }
    else {
        score += 5;
        scores.textContent = "Score: " + score;

    }
    currentIndex++;
    setNextQuestion();

}

function endGame() {
    answers.classList.add('hidden');
    nextButton.classList.add('hidden');
    hsButton.classList.add('hidden');
    question.classList.add('hidden');
    clearInterval(timer)
}