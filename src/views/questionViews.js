'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 *
 * @param {string} answerText - answer text to display
 * @return {HTMLElement}
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;

  return answerElement;
};

/** @typedef {text: string,
 *            answers: object,
 *            correct: string,
 *            selected: {null | string},
 *            links: [{text: string, href: string}]} question
 */

/**
 * Create a full question element
 *
 * @param {question} question - see above
 * @return {HTMLElement}
 */
export const createQuestionElement = (question) => {
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
};

/**
 * Creates and returns the next questions button
 *
 * @return {HTMLElement}
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};
