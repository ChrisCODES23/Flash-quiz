var questions = [];
var hidden = document.getElementById('questions')
var startButton = document.getElementById('start-btn')
var hsButton = document.getElementById('hs-btn')
var saveButton = document.getElementById('save-btn')
var timerCount = 40;
var timerElement = document.getElementById('time')
var score = 0;
// variable used to store the questions and answers
var questionArray = [
    {
        question1: "What should appear at the very end of your JavaScript?",
        possibleAnswers1: ["The < script >", "The END statement", "None of the above"],
        correctAnswer1: "</script>"

    },
    {
        question2: "Which of the following is not a valid JavaScript variable name?",
        possibleAnswers2: ["_first_and_last_names", "FirstAndLast", "None of the above"],
        correctAnswer2: ""
    },
    {
        question3: " ____________operator is used to assign a value to a variable?",
        possibleAnswers3: [
            "*",
            "x",
            "+"],
        correctAnswer3: "="
    },
    {
        question4: "The _______ method of an Array object adds and/or removes elements from an array.",
        possibleAnswers4: [
            "Reverse",
            "Shift",
            "Slice"],
        correctAnswer4: "Splice"
    },
    {
        question5: "Which statement is not true in java language ?",
        possibleAnswers5: [" A public member of a class can be accessed in all the packages.",
            "A private member of a class cannot be accessed from its derived class.",
            " A protected member of a class can be accessed from its derived class."],
        correctAnswer5: "A private member of a class cannot be accessed by the methods of the same class."
    },
]
// Random question picker
var currentQuestion = "";
for (var i = 0; i < questionArray.length; i++) {
    var randomIndex = Math.floor(Math.random() * questionArray.length);
    questions.textContent = randomIndex
    randomIndex = currentQuestion;
}

// starts the game
function startGame() {
    console.log("Started the game yay");
    startButton.style.visibility = "hidden";
    hsButton.style.visibility = "hidden";
    saveButton.style.visibility = "hidden";
    hidden.style.visibility = "visible";
    startTimer();

    //  Gives the next question and answers
    function setNextQuestion() {
        if (currentQuestion > 1)
            questions.textContent = 
    }


    function selectAnswer() {
        EventTarget
    }
}


function saveGame() {
    console.log("Saved to the highscores yay");
    localStorage.setItem
}
function highScore() {
    console.log(" Did you get the highest score?");
    localStorage.getItem
}



// if (currentQuestion > lastQuestion - 1) then display next question
// if (currentQuestion > lastQuestion - 1)




startButton.addEventListener('click', startGame)
saveButton.addEventListener('click', saveGame)
hsButton.addEventListener('click', highScore)
nxtButton.addEventListener('click', setNextQuestion)



// Time starts at 40 and incorrect answer will deduct 10 secs from the timercount.
// ? Doesn't function well
function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        // if (!currentQuestion) {
        //     timerCount - 10;
        //     timerElement.textContent = timerCount
        //     clearInterval(timer);


    }, 1000);
}





// ? Challenge Question (time+10)
