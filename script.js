// Create UI elements dynamically
const body = document.body;

// Title
const title = document.createElement('h1');
title.textContent = 'Rock Paper Scissors';
body.appendChild(title);

// Instruction
const instruction = document.createElement('p');
instruction.textContent = 'Choose your move:';
body.appendChild(instruction);

// Buttons
const choices = ['rock', 'paper', 'scissors'];
const buttonContainer = document.createElement('div');
choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => playRound(choice));
    buttonContainer.appendChild(button);
});
body.appendChild(buttonContainer);

// Game results section
const resultText = document.createElement('p');
resultText.id = 'result';
body.appendChild(resultText);

const humanScoreText = document.createElement('p');
humanScoreText.innerHTML = `Human Score: <span id="human-score">0</span>`;
body.appendChild(humanScoreText);

const computerScoreText = document.createElement('p');
computerScoreText.innerHTML = `Computer Score: <span id="computer-score">0</span>`;
body.appendChild(computerScoreText);

const winnerText = document.createElement('p');
winnerText.id = 'winner';
body.appendChild(winnerText);

// Game logic
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return; // Stop game if winner is decided

    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    }

    // Update UI
    resultText.textContent = result;
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Check for winner
    if (humanScore === 5) {
        winnerText.textContent = 'Congratulations! You won the game!';
    } else if (computerScore === 5) {
        winnerText.textContent = 'Game over! The computer won.';
    }
}
