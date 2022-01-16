'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const getAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
