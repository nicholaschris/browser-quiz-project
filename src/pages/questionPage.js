//src/pages/questionPage.js
import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  DEFAULT_ANSWER_COLOR,
  USER_INTERFACE_ID,
  SKIP_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { quizData } from '../data.js';

export const initQuestionPage = (continueQuiz = false) => {
  let currentQuestion = null
  if(continueQuiz){
    loadScore()
    loadIndex()
    quizData.currentQuestionIndex = loadIndex()
  }
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //create element to show the score
  const scoreElement = createScoreElement(quizData.currentScore, quizData.questions.length)
  userInterface.appendChild(scoreElement)
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
    
  const answers = answersListElement.querySelectorAll('button');
  answers.forEach(answer => {
    answer.addEventListener('click', (event) => {
      const selectedAnswerKey = event.target.id;
      quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswerKey;
      answer.disabled = true
      checkAnswer(selectedAnswerKey, correctAnswer, answers)
      displayScore()
      saveScore()
      saveIndex()

  // Disable other answers once one is selected
  answers.forEach(answer => {
  if (answer.id !== selectedAnswerKey) {
    answer.disabled = true; // Disable the answer if its id doesn't match the selected answer key
  }
});
  // Hide the Skip button when an answer is selected
  hideSkipButton();
    });
  });
  
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_BUTTON_ID)
    .addEventListener('click', skipQuestion);
};

   // This function allows the user to skip a question
  const skipQuestion = () => {
  // To remove the question from scoring when you skip it  
   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];  
   currentQuestion.skipped = true; // Marks question as skipped

   
  // Highlight the correct answer with green color
  const answers = document.getElementById(ANSWERS_LIST_ID).querySelectorAll('button');
  answers.forEach(answer => {
  if (answer.id === currentQuestion.correct) {
    // answer.style.backgroundColor = 'green';
    answer.disabled = false; // Enable only the correct answer to be clickable
    } else {
    answer.disabled = true; // Disable the clickability of other options
    }
   
  });

   // Hide the Skip button
   hideSkipButton();
};

  // Function to hide the Skip button
  const hideSkipButton = () => {
  const skipButton = document.getElementById(SKIP_BUTTON_ID);
  if (skipButton) {
    skipButton.classList.add('hidden');
  }
};

const hideButtons = () => {
  const btn = document.getElementById(SKIP_BUTTON_ID)
  const btn1 = document.getElementById(NEXT_QUESTION_BUTTON_ID)
    btn.classList.add('hidden')
    btn1.classList.add('hidden')
}

  const nextQuestion = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length-1){
    hideButtons()
    console.log("end of quiz") // to do: add the final page for the final score
  }
  else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  }
  initQuestionPage();
  displayScore();
};


const checkAnswer = (selectedAnswer, correctAnswer, answers) => {
  const isCorrect = selectedAnswer === correctAnswer;

  if (isCorrect) {
    console.log(`here's the logic if user clicked on correct answer`);
    quizData.currentScore++
  } else {
    console.log(`here's the logic if user clicked on wrong answer`);
  }
  answers.forEach(answer => {
    if (answer.id === correctAnswer) {
      answer.classList.add('correct'); //highlight the correct answer with green
    } else if (answer.id === selectedAnswer) {
      answer.classList.add('incorrect'); //if the wrong answer was selected - highlight it with red
      answer.style.backgroundColor = 'green'; //highlight the correct answer with green
     } else if (answer.id === selectedAnswer) {
      answer.style.backgroundColor = 'red'; //if the wrong answer was selected - highlight it with red
    } else {
      answer.classList.remove('correct', 'incorrect');//set the color of the rest of the buttons to default
    }
  })
};

const displayScore = () => {
  document.getElementById('score').innerText = `Score: ${quizData.currentScore} out of ${quizData.questions.length - 1}`
}

// save score function
const saveScore = () => {
  // console.log(quizData.currentScore)
  localStorage.setItem('quizScore', quizData.currentScore);
  // console.log(quizData.currentScore)
}

// loadScore function
const loadScore = () => {
  quizData.currentScore = parseInt(localStorage.getItem('quizScore'));
}
// saveIndex progress
const saveIndex = () => {
  // console.log(quizData.currentQuestionIndex)
  localStorage.setItem('currentIndex', quizData.currentQuestionIndex + 1);
  // console.log(quizData.currentQuestionIndex)
}

// loadIndex function
const loadIndex = () => {
  let questionIndex = quizData.currentQuestionIndex = parseInt(localStorage.getItem('currentIndex'));
  console.log(questionIndex)
  return questionIndex
  
}
