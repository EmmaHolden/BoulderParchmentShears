const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice.toUpperCase()
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice () {
    const randomNumber = Math.ceil(Math.random() * possibleChoices.length)
    if (randomNumber === 1) {
        computerChoice = "boulder"
    } else if (randomNumber === 2) {
        computerChoice = "parchment"
    } else {
        computerChoice = "shears"
    }
    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase()
}

function getResult () {
    if (computerChoice === userChoice) {
        result = "IT'S A DRAW!"
    } else if (computerChoice === "boulder" && userChoice === "parchment") {
        result = "YOU WIN!"
    } else if (computerChoice === "parchment" && userChoice === "shears") {
        result = "YOU WIN!"
    } else if (computerChoice === "shears" && userChoice === "boulder") {
        result = "YOU WIN!"
    } else if (computerChoice === "boulder" && userChoice === "shears") {
        result = "YOU WIN!"
    } else if (computerChoice === "parchment" && userChoice === "boulder") {
        result = "YOU WIN!"
    } else {
        result = "YOU LOSE!"
    } 

    resultDisplay.innerHTML = result;
}