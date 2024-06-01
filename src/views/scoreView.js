export const createScoreElement = (score, totalScore) => {
    const element = document.getElementById('score-div')
    element.innerHTML = String.raw`<p id="score"> 🏆 ${score}/${totalScore}</p>`
    return element 
}