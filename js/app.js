
// Define player selection.
let playerChoice;

function playerSelection() {
    playerChoice = prompt('Please choose Rock, Paper, or Scissors.');
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        console.log('playerChoice valid')
    } else {
        playerChoice = 'ERROR';
        alert('Please input a valid choice.');
    }

    return playerChoice;
}

// Define the computer's choice for the rock paper scissors game.
let computerChoice;

function computerSelection() {
    computerChoice = Math.random() * 3;

    if (computerChoice >= 2) {
        computerChoice = 'rock';
    } else if (computerChoice >= 1 && computerChoice < 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// Test the randomness of my computerPlay() function.
/*
let tests;
let rock;
let paper;
let scissors;
tests = 1000000;
rock = 0;
paper = 0;
scissors = 0;

function recordComputerPlay() {
    for (var i = 0; i < tests; i++) {
        computerSelection();
        if (computerChoice == 'rock') {
            rock = rock + 1;
        } else if (computerChoice == 'paper') {
            paper = paper + 1;
        } else {
            scissors = scissors + 1;
        }
    }
    console.log('R: ' + rock);
    console.log('P: ' + paper);
    console.log('S: ' + scissors);
}
*/

// Play a round of rock paper scissors.
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('You lose!');
        } else if (computerChoice === 'scissors') {
            console.log('You win!');
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('You lose!');
        } else if (computerChoice === 'rock') {
            console.log('You win!');
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('You lose!');
        } else if (computerChoice === 'paper') {
            console.log('You win!');
        } else {
            console.log('ERROR');
        }
    } else {
        console.log('Computer wins by default.')
    }
}

// Run any required functions.
playerSelection();
computerSelection();
playRound(playerChoice, computerChoice);

// Logs
console.log('You chose ' + playerChoice + '.');
console.log('Computer chose ' + computerChoice + '.');
