//src/views/questionView.js


import { NEXT_QUESTION_BUTTON_ID, QUESTION_DIV_ID, ANSWERS_LIST_ID, SKIP_BUTTON_ID } from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.id = QUESTION_DIV_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`

    <div id="border-inner-container">
      <div>
      <div></div>
      <div></div>
      <div id="score-div">
<!--          🏆score-->
      </div>
      </div>
      
      <div id="question-container-row">
          <h1>${question}</h1>
      </div>
      
      <div id="answer-container-row">
        <div class="answer-container-cell"></div>
          <div class="answer-container-cell">
            <ul id="${ANSWERS_LIST_ID}">
            </ul>
          </div>
        <div class="answer-container-cell"></div>  
      </div>
  
      <div id="button-container-row">
        <button id="${NEXT_QUESTION_BUTTON_ID}" class="action-button">
          Next question
        </button>
        <button id="${SKIP_BUTTON_ID}" class="action-button">
          Skip
        </button>
      </div>
    </div>
  `;

  return element;
};

/*New style ----------------------------------------------------------------------------*/
