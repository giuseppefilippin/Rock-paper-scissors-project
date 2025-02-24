function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function getHumanChoice () {
    const humanChoice = prompt('Your choice').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        console.log('Invalid choice');
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log( 'It is a tie,' + humanChoice + ' is equal to ' + computerChoice);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log( 'You win, ' + humanChoice + ' beats ' + computerChoice);
    } else {
        computerScore++;
        console.log( 'Computer wins, ' + computerChoice + ' beats ' + humanChoice);
    }
}
function playGame (playRound) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log('Computer choice: ' + computerSelection);
        playRound(humanSelection, computerSelection);
        console.log('Human score: ' + humanScore);
        console.log('Computer score: ' + computerScore);
    }
    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (humanScore < computerScore) {
        console.log('Computer wins!');
    } else {
        console.log('It is a tie!');
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log('Computer choice: ' + computerSelection);
playRound(humanSelection, computerSelection);
console.log('Human score: ' + humanScore);
console.log('Computer score: ' + computerScore);
playGame(playRound);