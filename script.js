// Declare global variables
var startBtn = document.getElementById("startBtn");
var time = 75;
var time_remaining = true;
var time_start = false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer");
var high_scores = [];
var output = "";
var score = 0;
let i = 0;

var questionsArray = [
    {
      question: "1. What is the correct way to declare a variable in JavaScript?",
      answerChoice: [
        "A. variable myVar;",
        "B. var myVar;",
        "C. int myVar;",
        "D. let myVar;"
      ],
      correctAnswer: 1
    },
    {
      question: "2. Which of the following is not a primitive data type in JavaScript?",
      answerChoice: [
        "A. String",
        "B. Number",
        "C. Array",
        "D. Boolean"
      ],
      correctAnswer: 2
    },
    {
      question: "3. Which HTML tag is used to include a JavaScript file?",
      answerChoice: [
        "A. <script>",
        "B. <javascript>",
        "C. <js>",
        "D. <link>"
      ],
      correctAnswer: 0
    },
    {
      question: "4. What is the correct way to create a function in JavaScript?",
      answerChoice: [
        "A. function myFunction()",
        "B. create function myFunction()",
        "C. func myFunction()",
        "D. def myFunction()"
      ],
      correctAnswer: 0
    }
  ];
  

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
  if (time_start) time--;
  if (time <= 0) {
    end_quiz();
    time = 0;
  }
  document.getElementById("timer").innerHTML = time;
}

startBtn.addEventListener("click", function () {
  quizContainer.style.display = "block";
  homeContainer.style.display = "none";
  countdownTimer.style.display = "block";
  document.getElementById("score_keeper").style.display = "block";
  document.getElementById("score").innerHTML = score;
  setCountdownTimer();
  setQuizQuestions();
  time_start = true;
});

function setQuizQuestions() {
  questionHeading.textContent = questionsArray[i].question;
  answerChoiceA.textContent = questionsArray[i].answerChoice[0];
  answerChoiceB.textContent = questionsArray[i].answerChoice[1];
  answerChoiceC.textContent = questionsArray[i].answerChoice[2];
  answerChoiceD.textContent = questionsArray[i].answerChoice[3];
}

answerChoiceA.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    if (0 === correctAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    updateQuiz();
  });
  
  answerChoiceB.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    if (1 === correctAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    updateQuiz();
  });
  
  answerChoiceC.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    if (2 === correctAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    updateQuiz();
  });
  
  answerChoiceD.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    if (3 === correctAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    updateQuiz();
  });
  
  function handleCorrectAnswer() {
    document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
    setTimeout(function () {
      document.getElementById("AnswerResponse").innerHTML = "";
    }, 1000);
    score++;
    document.getElementById("score").innerHTML = score;
  }
  
  function handleIncorrectAnswer() {
    time -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
    setTimeout(function () {
      document.getElementById("AnswerResponse").innerHTML = "";
    }, 1000);
  }
  
  function updateQuiz() {
    if (i >= questionsArray.length - 1) {
      end_quiz();
    } else {
      i++;
      setQuizQuestions();
    }
  }
  

function end_quiz() {
  document.getElementById("game_over").style.display = "block";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("countdownTimer").style.display = "none";
  document.getElementById("score_keeper").style.display = "none";
  document.getElementById("AnswerResponse").innerHTML = "";
  document.getElementById("end_score").innerHTML = score;
}

function submit_score() {
  high_scores.push(document.getElementById("initials").value + " " + score);
  view_high_scores();
}

function view_high_scores() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("game_over").style.display = "none";
  document.getElementById("high_scores_page").style.display = "block";

  output = "";
  for (let k = 0; k < high_scores.length; k++) {
    output = output + "  " + high_scores[k];
  }
  document.getElementById("high_scores").innerHTML = output;
  clear_up();
}

function go_home() {
  document.getElementById("high_scores_page").style.display = "none";
  document.getElementById("homeContainer").style.display = "block";
  clear_up();
}

function clear_hs() {
  high_scores = [];
}

function clear_up() {
  time = 75;
  time_remaining = true;
  time_start = false;
  i = 0;
 }