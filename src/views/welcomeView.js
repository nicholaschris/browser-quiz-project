import { START_QUIZ_BUTTON_ID, CONTINUE_QUIZ_BUTTON_ID } from '../constants.js';
/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add("welcome-page");
  element.innerHTML = String.raw`
    <section class="welcome-section">
      <h1 class="heading">Welcome to the The Jedi Trials<span class="group-name">by The Jedi Coders</span></h1>
      <label for="name" class="name-label">What is your name Padawan?</label>
      <input type="text" id="name" name="name" required class="name-input">
    </section>
    <div class="start">
      <button id="${START_QUIZ_BUTTON_ID}" class="button-style-start">LET 'S START</button>
      <button id="${CONTINUE_QUIZ_BUTTON_ID}" class="button-style-start">Continue Quiz</button>
    
    </div>
  `;
  
  return element;
};
