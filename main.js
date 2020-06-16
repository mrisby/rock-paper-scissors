const computerScore_span = document.getElementById("computer-score")
const paper_div = document.getElementById("paper")
const rock_div = document.getElementById("rock")
const scissors_div = document.getElementById("scissors")
const userScore_span = document.getElementById("user-score")
const result_div = document.querySelector(".result > p")
const scoreBoard_div = document.querySelector(".score-board")

let computerScore = 0
let userScore = 0
let pointsToWin = 5

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function returnChoices(choices) {
    if (choices === "rock") return "Rock"
    if (choices === "paper") return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice)

    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = `${returnChoices(userChoice)}${smallUserWord} beats ${returnChoices(computerChoice)}${smallCompWord}. You Win!`
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500)
    restartGame()
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice)

    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore

    result_div.innerHTML = `${returnChoices(userChoice)}${smallUserWord} loses to ${returnChoices(computerChoice)}${smallCompWord}. You lost...`
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500)
    restartGame()
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice)

    result_div.innerHTML = `${returnChoices(userChoice)}${smallUserWord} equals ${returnChoices(computerChoice)}${smallCompWord}. It's a draw.`
    userChoice_div.classList.add('gray-glow')
    setTimeout(() =>  userChoice_div.classList.remove('gray-glow'), 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice)
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice)
            break;
    }
}

function restartGame() {
    if ((userScore === pointsToWin) || (computerScore === pointsToWin)) {
        if (userScore > computerScore) {
            result_div.innerHTML = "You Beat The Game! Let's play again!"
        } else {
            result_div.innerHTML = "Don't hate the player, hate the game. Try again!"
            userScore = 0
            computerScore = 0
        }
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"))
    paper_div.addEventListener('click', () => game("paper"))
    scissors_div.addEventListener('click', () => game("scissors"))
}

main()