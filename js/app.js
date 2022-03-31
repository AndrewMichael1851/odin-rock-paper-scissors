// Just testing.
console.log('Hello World');

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

let tests;
let rock;
let paper;
let scissors;
tests = 10000;
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
    console.log(rock);
    console.log(paper);
    console.log(scissors);
}

recordComputerPlay();
