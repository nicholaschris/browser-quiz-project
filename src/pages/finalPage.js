import { createFinalPageElement } from '../views/finalPageView.js';
import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initWelcomePage } from '../pages/welcomePage.js'

export const initFinalPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML = ''
    const finalElement = createFinalPageElement(quizData.currentScore, quizData.questions.length)
    userInterface.appendChild(finalElement)
    console.log('final page initiated')

    const restartButton = document.getElementById(RESTART_QUIZ_BUTTON_ID);
    restartButton.addEventListener('click', () => {
    quizData.currentScore = 0;
    quizData.currentQuestionIndex = 0;
    initWelcomePage();
  });

}