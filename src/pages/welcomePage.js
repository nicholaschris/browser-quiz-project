import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID, CONTINUE_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  document
    .getElementById(CONTINUE_QUIZ_BUTTON_ID)
    .addEventListener('click', continueQuiz)
};

const startQuiz = () => {
  initQuestionPage();
};

const continueQuiz = () => {
  initQuestionPage(true);
}
