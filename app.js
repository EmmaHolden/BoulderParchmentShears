const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")

const possibleChoices = document.querySelectorAll("button")
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
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
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "boulder" && userChoice === "parchment") {
        result = "You win!"
    } else if (computerChoice === "parchment" && userChoice === "shears") {
        result = "You win!"
    } else if (computerChoice === "shears" && userChoice === "boulder") {
        result = "You win!"
    } else if (computerChoice === "boulder" && userChoice === "shears") {
        result = "You lose!"
    } else if (computerChoice === "parchment" && userChoice === "boulder") {
        result = "You lose!"
    } else {
        result = "You lose!"
    } 

    resultDisplay.innerHTML = result;
}


