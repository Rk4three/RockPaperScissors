function getComputerChoice()
{
    const options = ["rock", "paper", "scissors"]
    let choice = options[(Math.floor(Math.random() * options.length))]
    return choice;
}
let roundNumber = 0
const round = document.querySelector(".round")
function changeRound() {

    roundNumber += 1
    round.textContent = `Round ${roundNumber}`
}

const winLoseMessage = document.querySelector(".winLoseMessage")
function showWinLoseMessage(message) {

    if (message === true) {
        winLoseMessage.textContent = "YOU WIN!"
    }
    else if (message === false) {
        winLoseMessage.textContent = "YOU LOSE!"
    }
    else {
        winLoseMessage.textContent = "A DRAW!"
    }
}

let userChoice = ""
const userChoiceImage = document.querySelector(".user-image")
let cpuChoice = ""
const cpuChoiceImage = document.querySelector(".cpu-image")
function playerPick() {
    const rock = document.querySelector(".btnRock")
    const paper = document.querySelector(".btnPaper")
    const scissors = document.querySelector(".btnScissors")
    let cpuImage = ""

    rock.addEventListener("click", (event) => {
        userChoice = "rock"
        userChoiceImage.src = "images/rock.png"
        cpuChoice = getComputerChoice()
        cpuImage = `images/${cpuChoice}.png`
        cpuChoiceImage.src = cpuImage
        changeRound()
        if (cpuChoice === "rock") {
            showWinLoseMessage('tie')
        } else if (cpuChoice === "paper") {
            showWinLoseMessage(false)
            changeScore("lose")
        } else {
            showWinLoseMessage(true)
            changeScore("win")
        }
    })

    paper.addEventListener("click", (event) => {
        userChoice = "paper"
        userChoiceImage.src = "images/paper.png"
        cpuChoice = getComputerChoice()
        cpuImage = `images/${cpuChoice}.png`
        cpuChoiceImage.src = cpuImage
        changeRound()
        if (cpuChoice === "rock") {
            showWinLoseMessage(true)
            changeScore("win")
        } else if (cpuChoice === "paper") {
            showWinLoseMessage('tie')
        } else {
            showWinLoseMessage(false)
            changeScore("lose")
        }
    })
    scissors.addEventListener("click", (event) => {
        userChoice = "scissors"
        userChoiceImage.src = "images/scissors.png"
        cpuChoice = getComputerChoice()
        cpuImage = `images/${cpuChoice}.png`
        cpuChoiceImage.src = cpuImage
        changeRound()
        if (cpuChoice === "rock") {
            showWinLoseMessage(false)
            changeScore("lose")
        } else if (cpuChoice === "paper") {
            showWinLoseMessage(true)
            changeScore("win")
        } else {
            showWinLoseMessage('tie')
        }
    })
}
let userScoreCount = 0
let cpuScoreCount = 0
const userScore = document.querySelector(".user-score")
const cpuScore = document.querySelector(".cpu-score")
const scoreText = document.querySelector(".score")
const stop = document.querySelectorAll(".RNP-choices button")
function changeScore(score) {
    if (score === "win") {
        userScoreCount += 1
        userScore.textContent = userScoreCount
    }
    else if (score === "lose") {
        cpuScoreCount += 1
        cpuScore.textContent = cpuScoreCount
    }

    if (userScoreCount === 5 || cpuScoreCount === 5) {
        if (userScoreCount === 5) {
            scoreText.textContent = "USER WINNER"
        }
        else {
            scoreText.textContent = "CPU WINNER"
        }
        stop.forEach(elem => {
            elem.disabled = true
        })
    }
}
const reset = document.querySelector(".resetScore")
function resetGame() {
    round.textContent = "RESTARTED"
    roundNumber = 0
    userChoice = ""
    winLoseMessage.textContent = ""
    userChoiceImage.src = "images/empty.png"
    cpuChoiceImage.src = "images/empty.png"
    scoreText.textContent = "SCORE"
    userScore.textContent = "0"
    userScoreCount = 0
    cpuScore.textContent = "0"
    cpuScoreCount = 0
    stop.forEach(elem => {
        elem.disabled = false
    })
}

function main() {
    playerPick()
    reset.addEventListener("click", resetGame)

}

main();
