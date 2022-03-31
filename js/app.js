// Just testing.
console.log('Hello World');

// Define the computer's choice for the rock paper scissors game.
let computerChoice;

function computerPlay() {
    computerChoice = Math.random() * 3;

    if (computerChoice >= 2) {
        computerChoice = 'Rock';
    } else if (computerChoice >= 1 && computerChoice < 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

// Test the randomness of my computerPlay() function.
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
        computerPlay();
        if (computerChoice == 'Rock') {
            rock = rock + 1;
        } else if (computerChoice == 'Paper') {
            paper = paper + 1;
        } else {
            scissors = scissors + 1;
        }
    }
    console.log('R: ' + rock);
    console.log('P: ' + paper);
    console.log('S: ' + scissors);
}

// Run any required functions.
recordComputerPlay();

// Logs
console.log(computerChoice);
