export const createScoreElement = (score, totalScore) => {
    const element = document.createElement('div')
    element.innerHTML = String.raw`<h2 id="scoreView"> Score: ${score} out of ${totalScore}</h2>`
    return element 
}