$(document).ready(function () {

  // variables to keep track of quiz state
  var currentQuestionIndex = 0;
  var time = questions.length * 10;
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
  var sfxRight = new Audio("../sfx/correct.wav");
  var sfxWrong = new Audio("../sfx/incorrect.wav");

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
    // update title with current question
    document.getElementById("question-title").innerHTML = questions[currentQuestionIndex].title
    // loop over choices

    var i
    for (i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      // create new button for each choice
      var answerBtn = document.createElement("button");
      answerBtn.setAttribute("class", "answer");
      answerBtn.setAttribute("value", i);
      answerBtn.innerHTML = `${parseInt(i) + 1}. ${questions[currentQuestionIndex].choices[i]}`;
      choicesEl.appendChild(answerBtn);
    }
  }
  
  // $(".answer").on("click", questionClick());

  $(".answer").on("click",function questionClick() {
    var chosenAnswer = $(".answer").val()
    // check if user guessed wrong
    console.log(currentQuestionIndex)
    if (chosenAnswer !== questions[currentQuestionIndex].answer) {
      // penalize time
      time = time - 3
      // play "wrong" sound effect
      sfxWrong.play;
      feedbackEl.innerHTML = "Wrong";
    }
    else {
      // play "right" sound effect
      sfxRight.play
      feedbackEl.innerHTML = "Correct!"
      console.log(currentQuestionIndex)
      // flash right/wrong feedback on page for half a second
      setTimeout(rightWrong, 500)
      function rightWrong() {
        feedbackEl.style.display = block
      }
    }
    currentQuestionIndex = (currentQuestionIndex + 1)
    console.log(currentQuestionIndex)
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      console.log(currentQuestionIndex)
      console.log(questions.length)
      quizEnd();
    }
    else {
      getQuestion();
    }
  })

  
    function quizEnd() {
      // stop timer
      clearInterval(time)
      // show end screen
      $("#end-screen").show()
      // show final score
      $("#final-score").show()
      // hide questions section
      $("#questions").hide()
    }

    function timeEnds() {

      if (time === 0) {
        quizEnd
      }
    }

    function saveHighscore() {
      // get value of input box
      $("#initials").value
      // make sure value wasn't empty
      // get saved scores from localstorage, or if not any, set to empty array
      // format new score object for current user
      // save to localstorage
      // redirect to next page
    }

    function checkForEnter(event) {
      // check if event key is enter
      // saveHighscore
    }

    // user clicks button to submit initials
    submitBtn.onclick = saveHighscore;

  // user clicks button to start quiz
  startBtn.onclick = timeEnds;
  
  startBtn.onclick = startQuiz;

  // initialsEl.onkeyup = checkForEnter;
})