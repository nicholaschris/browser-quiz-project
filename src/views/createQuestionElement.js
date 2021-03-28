'use strict';

import createDOMElement from "../utils/createDOMElement.js";

const createQuestionElement = (question) => {
    const container = createDOMElement('div');
    const title = createDOMElement('h1');
    title.innerText = question.text;
    container.appendChild(title);

    const answerContainer = createDOMElement('ol');

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey]);
        answerContainer.appendChild(answer);
    }

    container.appendChild(answerContainer);

    return container;
}

const createAnswerElement = (answerText) => {
    const answerElement = createDOMElement('li');
    answerElement.innerText = answerText;

    return answerElement;
}

export default createQuestionElement;