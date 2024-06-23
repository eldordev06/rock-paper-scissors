const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "paper") ? "You lose!" : "You win!";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "You lose!" : "You win!";
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "You lose!" : "You win!";
                break;
        }
    }

    playerDisplay.innerText = `Player: ${playerChoice}`;
    computerDisplay.innerText = `Computer: ${computerChoice}`;
    resultDisplay.innerText = result;
    resultDisplay.classList.remove("red-txt", "green-txt");

    switch (result) {
        case "You win!":
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            resultDisplay.classList.add("green-txt");
            break;
        case "You lose!":
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            resultDisplay.classList.add("red-txt");
            break;
    }
}
