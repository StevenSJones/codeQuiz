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
        console.log(timerCounter)
    } 
    // If timer has already gone 2 times, then stop timer
    else {
        //The clearInterval() method stops the executions of the function specified in the setInterval() method
        clearInterval(myTimer);
    }
    timerCounter -= 1
    }
    var z = 0;
    function example() {