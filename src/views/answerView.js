/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const btn = document.createElement('button')
  element.appendChild(btn)
  btn.textContent = `${answerText}`
  btn.id = key
  btn.addEventListener(`click`, () => {
    btn.style.backgroundColor = `#B76E79`
  })
  btn.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
