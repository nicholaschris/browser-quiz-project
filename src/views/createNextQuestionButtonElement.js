'use strict';

import { NEXT_QUESTION_BUTTON_ID } from "../constants.js";
import nextQuestion from "../listeners/nextQuestion.js";
import createDOMElement from "../utils/createDOMElement.js";

const createNextQuestionButtonElement = () => {
    const buttonElement = createDOMElement('button', { id: NEXT_QUESTION_BUTTON_ID });

    buttonElement.innerText = 'Next question';
    buttonElement.addEventListener('click', nextQuestion);

    return buttonElement;
}

export default createNextQuestionButtonElement;