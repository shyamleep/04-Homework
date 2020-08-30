$(document).ready(function () {

  // variables to keep track of quiz state
  var currentQuestionIndex = 0;
  var time = questions.length * 3;
  var timerId;

  // variables to reference DOM elements
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var submitBtn = document.getElementById("submit");
  var startBtn = document.getElementById("start");
  var initialsEl = document.getElementById("initials");
  var feedbackEl = document.getElementById("feedback");

  // sound effects
  var sfxRight = new Audio("assets/sfx/correct.wav");
  var sfxWrong = new Audio("assets/sfx/incorrect.wav");

  function startQuiz() {
    // hide start screen
    $("#start-screen").hide();
    // un-hide questions section
    $("#questions").show();
    // start timer
    setInterval(function () {
      time--
      // show starting time
      timerEl.textContent = time
    }, 1000)
  }


getQuestion();

function getQuestion() {
    // clear out any old question choices
    choicesEl.innerHTML = ""
  // get current question object from array
  var i
  for (i=0; i<questions[currentQuestionIndex].choices.length; i++) {
  // update title with current question
  document.getElementById("question-title").innerHTML = questions[currentQuestionIndex].title
  

  // loop over choices
  
  
    
  // create new button for each choice
  
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", choices);
    answerBtn.setAttribute("value", i)
    answerBtn.innerHTML = `${parseInt(i) + 1}. ${questions[currentQuestionIndex].choices[i]}`;
    choicesEl.appendChild(answerBtn);
    }
}

// on("click", function questionClick() {
//   // check if user guessed wrong
//   if (choice !==0)
//     // penalize time
//     time - 15
//     // display new time on page
//     // play "wrong" sound effect
//     // else
//     // play "right" sound effect
//     // flash right/wrong feedback on page for half a second
//     // move to next question
//     // check if we've run out of questions
//     // quizEnd
//     // else
//     // getQuestion
//   })

//   function quizEnd() {
//     // stop timer
//     clearInterval(time)
//     // show end screen
//     $("#end-screen").show()
//     // show final score
//     $("#final-score").show()
//     // hide questions section
//     $("#questions").hide()
//   }

//   function clockTick() {
//     // ? for loop to display each second?
//     // update time
//     // check if user ran out of time
//     if (time === 0) {
//       quizEnd
//     }
//   }

//   function saveHighscore() {
//     // get value of input box
//     $("#initials").value
//     // make sure value wasn't empty
//     // get saved scores from localstorage, or if not any, set to empty array
//     // format new score object for current user
//     // save to localstorage
//     // redirect to next page
//   }

//   function checkForEnter(event) {
//     // check if event key is enter
//     // saveHighscore
//   }

// // user clicks button to submit initials
// submitBtn.onclick = saveHighscore;

// // user clicks button to start quiz
// startBtn.onclick = startQuiz();

initialsEl.onkeyup = checkForEnter;
})