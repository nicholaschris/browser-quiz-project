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
  console.log(quizData)
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);


  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  
   const answers = answersListElement.querySelectorAll('button');
  answers.forEach(answer => {
    answer.addEventListener('click', (event) =>{
      const selectedAnswerKey = event.target.id;
      quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswerKey;

      checkAnswer(selectedAnswerKey, correctAnswer, answers)
    })
  })

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

    document
    .getElementById(SKIP_BUTTON_ID) // Add click event for "skip" button
    .addEventListener('click', skipQuestion); // Call functionality when "skip" button is clicked
};
// This function allows the user to skip a question
  const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];  

  if (currentQuestion.selected) {
    // If the user has already answered the question, skip button should be disabled
    console.log('User has already answered the question. Skip button disabled.');
    return;
  }

  const correctAnswer = currentQuestion.correct;
  const answerElement = document.createElement('p');
  answerElement.textContent = `Correct answer is: ${correctAnswer}`;
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.appendChild(answerElement);

  // To remove the question from scoring when you skip it
  currentQuestion.skipped = true; // Marks question as skipped
  
  setTimeout(() => {
  nextQuestion();
  }, 2000);

}

 const nextQuestion = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length-1){
    console.log("end of quiz") // to do: add the final page for the final score
  }
  else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  }

  initQuestionPage();
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