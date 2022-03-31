// Just testing.
console.log('Hello World');

// Define player selection.
let playerChoice;

function playerSelection() {
    playerChoice = prompt('Please choose Rock, Paper, or Scissors.');
    playerChoice = playerChoice.toLowerCase();
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

// Run any required functions.
playerSelection();
computerSelection();

// Logs
console.log(playerChoice);
console.log(computerChoice);
