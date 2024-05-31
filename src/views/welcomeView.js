import { START_QUIZ_BUTTON_ID, CONTINUE_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}" class="action-button">start quiz</button>
    <button id="${CONTINUE_QUIZ_BUTTON_ID}" class="action-button"> Continue Quiz </button>
  `;
  return element;
};
