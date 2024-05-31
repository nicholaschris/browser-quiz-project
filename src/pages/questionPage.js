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
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  console.log(quizData);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //create element to show the score

  const scoreElement = document.createElement('h2');
  scoreElement.id = 'score';
  scoreElement.textContent = `Score: 0 out of ${quizData.questions.length}`;
  userInterface.appendChild(scoreElement);


  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  
   const answers = answersListElement.querySelectorAll('button');
  answers.forEach(answer => {
    answer.addEventListener('click', (event) => {
      const selectedAnswerKey = event.target.id;
      quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswerKey;

      checkAnswer(selectedAnswerKey, correctAnswer, answers);

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
    answer.style.backgroundColor = 'green'; 
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

  const nextQuestion = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length-1){
    console.log("end of quiz") // to do: add the final page for the final score
  }
  else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  }

  initQuestionPage();
  calculateScore();
};


const checkAnswer = (selectedAnswer, correctAnswer, answers) => {
  const isCorrect = selectedAnswer === correctAnswer;

  if (isCorrect) {
    console.log(`here's the logic if user clicked on correct answer`);
  } else {
    console.log(`here's the logic if user clicked on wrong answer`);
  }

  answers.forEach(answer => {
    if (answer.id === correctAnswer) {
      answer.style.backgroundColor = 'green'; //highlight the correct answer with green
     } else if (answer.id === selectedAnswer) {
      answer.style.backgroundColor = 'red'; //if the wrong answer was selected - highlight it with red
    } else {
      answer.style.backgroundColor = DEFAULT_ANSWER_COLOR; //set the color of the rest of the buttons to default
    }
  })
};

// adding a function to calculate the score

const calculateScore = () => {
  let score = 0
  let totalScore = quizData.questions.length
  for (const question of quizData.questions){
    if(question.selected === question.correct){
      score++
    }
  }
  displayScore(score, totalScore)
}

// adding a function to display the score

const displayScore = (score, totalScore) => {
  const scoreElement = document.getElementById('score')
  scoreElement.textContent = `Score: ${score} out of ${totalScore}`
}
