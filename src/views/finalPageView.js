import { RESTART_QUIZ_BUTTON_ID } from "../constants.js";


export const createFinalPageElement = (score, maxScore) => {
    const element = document.createElement('div')
    element.classList.add('last-page-div')
    element.innerHTML = String.raw``
  //different text depending on a score
  if (score === 0) {
    element.innerHTML = String.raw`
    <div id = 'question-block'>
        <div id="border-inner-container">
            <h1 id = 'comment'> The force is weak within you </h1>
            <h1 id = 'finalScore'> your score is ${score} out of ${maxScore} </h1>
        </div>
        </div>
        `
  } else if (score > 0 && score <= 4) {
    element.innerHTML = String.raw`
    <div id = 'question-block'>
    <div id="border-inner-container">
        <h1 id = 'comment'> you will be consumed by the dark side </h1>
        <h1 id = 'finalScore'> your score is ${score} out of ${maxScore} </h1>
    </div>
    </div>
    `
  } else if (score > 4 && score < 10){
    element.innerHTML = String.raw`
    <div id = 'question-block'>
    <div id="border-inner-container">
        <h1 id = 'comment'> you are doing great my young Padawan </h1>
        <h1 id = 'finalScore'> your score is ${score} out of ${maxScore} </h1>
    </div>
    </div>
    `
  } else {
    element.innerHTML = String.raw`
    <div id = 'question-block'>
    <div id="border-inner-container">
        <h1 id = 'comment'> You are a jedi Master </h1>
        <h1 id = 'finalScore'> your score is ${score} out of ${maxScore} </h1>
    </div>
    </div>`
  }

  const btn = document.createElement('button')
  btn.id = RESTART_QUIZ_BUTTON_ID
  btn.classList.add('action-button')
  btn.innerText = 'Restart Quiz'
  element.appendChild(btn)
  return element;
};