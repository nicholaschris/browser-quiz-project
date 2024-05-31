import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add("welcome-page")
  element.innerHTML = String.raw`
      <section class="welcome-section">
      <h1 class="heading">Experience Challenge<span class="group-name">by Jedi Coders</span></h1>
        <label for="name" class="name-label">Who are you?</label>
        <input type="text" id="name" name="name" required class="name-input">
      </section>
      <div class="start">
        <button id="${START_QUIZ_BUTTON_ID}" class="button-style-start">LET 'S START</button>
      </div>
  `;
  
  return element;
};
