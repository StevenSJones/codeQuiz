// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];
//alert me cannot have () here because if it does, the timer won't have anything to reference
/*inside setInterval is the function alertMe and the unit of time * 1000 because unit of time for 
  setInterval is milliseconds*/
let myTimer = setInterval(alertMe, 1000);
//initialize the timerCount and set it to 60
var timerCounter = 60;
function alertMe() {
  /* Originally I had If timer has gone 2 or less times, console log time is up but I changed it too
   always true because it will be always true*/
  if (true) {
    //console.log(timerCounter);
  }
  // If timer has already gone 2 times, then stop timer
  else {
    //The clearInterval() method stops the executions of the function specified in the setInterval() method
    clearInterval(myTimer);
  }
  timerCounter -= 1;
}

var questionIndex = 0;
var wrongQuestions = [];

function startQuiz() {
  // Reset everything and display first question
  questionIndex = 0;
  displayCurrentQuestion();
}

function displayCurrentQuestion() {
  if (questionIndex < questions.length) {
    document.getElementById("questionNum").innerHTML =
      "Question " + (questionIndex + 1) + ":";
    document.getElementById("question").innerHTML =
      questions[questionIndex].title;
    document.getElementById("q1").innerHTML =
      questions[questionIndex].choices[0];
    document.getElementById("q2").innerHTML =
      questions[questionIndex].choices[1];
    document.getElementById("q3").innerHTML =
      questions[questionIndex].choices[2];
    document.getElementById("q4").innerHTML =
      questions[questionIndex].choices[3];
  } else {
    // Quiz is over
    // Show score and prompt to save
    document.getElementById("questionNum").innerHTML = "";
    document.getElementById("question").innerHTML =
      "Your Score: " +
      (questions.length - wrongQuestions.length) +
      "/" +
      questions.length +
      " You got questions " +
      wrongQuestions +
      " wrong";
    questions.length;
    document.getElementById("q1").innerHTML = "Answer 1";
    document.getElementById("q2").innerHTML = "Answer 2";
    document.getElementById("q3").innerHTML = "Answer 3";
    document.getElementById("q4").innerHTML = "Answer 4";
  }
}

function answer() {
  var radios = document.getElementsByName("answer");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      let answer = questions[questionIndex].answer;
      let choice = questions[questionIndex].choices[i];
      if (choice == answer) {
        alert("Correct");
      } else {
        alert("Incorrect");
        wrongQuestions.push(questionIndex);
      }
    }
  }
  questionIndex += 1;
  displayCurrentQuestion();
}




