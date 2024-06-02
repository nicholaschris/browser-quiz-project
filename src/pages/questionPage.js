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
import { initFinalPage } from './finalPage.js';


export const initQuestionPage = (continueQuiz = false) => {
  // let currentQuestion = null
  if(continueQuiz){
    loadScore()
    loadIndex()
    quizData.currentQuestionIndex = loadIndex()
  }

  /*---------------------------------------------------------------------------------------------*/
  let currentQuestionIndex = quizData.currentQuestionIndex;

  console.log('Current Question Index:', currentQuestionIndex); // Debugging log
  if (currentQuestionIndex < 0 || currentQuestionIndex >= quizData.questions.length) {
    console.error('Invalid question index:', currentQuestionIndex); // Debugging log
    return;
  }

  let currentQuestion = quizData.questions[currentQuestionIndex];

  if (!currentQuestion) {
    console.error('Question not found:', currentQuestionIndex); // Debugging log
    return;
  }

  console.log('Current Question:', currentQuestion); // Debugging log

  /*---------------------------------------------------------------------------------------------*/

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';


  const correctAnswer = currentQuestion.correct;

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //create element to show the score
  createScoreElement(quizData.currentScore, quizData.questions.length);
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

    
  const answers = answersListElement.querySelectorAll('button');
  answers.forEach(answer => {
    answer.addEventListener('click', (event) => {
      const selectedAnswerKey = event.target.id;
      currentQuestion.selected = selectedAnswerKey;
      answer.disabled = true
      checkAnswer(selectedAnswerKey, correctAnswer, answers)
      displayScore()
      saveScore()
      saveIndex()

  // Disable other answers once one is selected
  answers.forEach(answer => {
    answer.disabled = true; // Disable the answer if its id doesn't match the selected answer key
  }
);
  // Hide the Skip button when an answer is selected
  // hideSkipButton();
      transformButtonToNext();
    });
  });
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length-1){
    initFinalPage();
  } else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
  }
  // displayScore();
};

   // This function allows the user to skip a question
  export const skipQuestion = () => {
  // To remove the question from scoring when you skip it  
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
   // currentQuestion.skipped = true; // Marks question as skipped

   
  // Highlight the correct answer with green color and disable the answer buttons
  const answers = document.getElementById(ANSWERS_LIST_ID).querySelectorAll('button');
  answers.forEach(answer => {
    if (answer.id === currentQuestion.correct) {
      answer.classList.add('correct');
    }
    answer.disabled = true;
  });


    saveIndex();

   // Hide the Skip button
   // hideSkipButton();
    transformButtonToNext(); // Call this to change the button to "Next"
  };




  // Function to hide the Skip button
  const hideSkipButton = () => {
  const skipButton = document.getElementById(SKIP_BUTTON_ID);
  if (skipButton) {
    skipButton.classList.add('hidden');
  }
};

export const displayScore = () => {
  document.getElementById('score').innerText = `🏆 ${quizData.currentScore}/${quizData.questions.length}`
}




const checkAnswer = (selectedAnswer, correctAnswer, answers) => {
  const isCorrect = selectedAnswer === correctAnswer;
  if (isCorrect) {
    quizData.currentScore++;
  }

  displayCorrectAnswer(selectedAnswer, correctAnswer, answers);
};


const displayCorrectAnswer = (selectedAnswer, correctAnswer, answers) => {
  answers.forEach(answer => {
    if (answer.id === correctAnswer) {
      answer.classList.add('correct'); //highlight the correct answer with green
    } else if (answer.id === selectedAnswer) {
      answer.classList.add('incorrect'); //if the wrong answer was selected - highlight it with red
    } else {
      answer.classList.remove('correct', 'incorrect');//set the color of the rest of the buttons to default
    }
  });
}

// save score function
const saveScore = () => {
  localStorage.setItem('quizScore', quizData.currentScore);
}

// loadScore function
export const loadScore = () => {
  quizData.currentScore = parseInt(localStorage.getItem('quizScore'));
}
// saveIndex progress
const saveIndex = () => {
  localStorage.setItem('currentIndex', quizData.currentQuestionIndex + 1);
}

// loadIndex function
export const loadIndex = () => {
  let questionIndex = quizData.currentQuestionIndex = parseInt(localStorage.getItem('currentIndex'));
  return questionIndex
  
}

const transformButtonToNext = () => {
  const button = document.getElementById(SKIP_BUTTON_ID);
  button.id = NEXT_QUESTION_BUTTON_ID;
  button.textContent = "Next";
  button.removeEventListener('click', skipQuestion);
  button.addEventListener('click', nextQuestion);
}

const transformButtonToSkip = () => {
  const button = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  button.id = SKIP_BUTTON_ID;
  button.textContent = "Skip";
  button.removeEventListener('click', nextQuestion);
  button.addEventListener('click', skipQuestion);
}