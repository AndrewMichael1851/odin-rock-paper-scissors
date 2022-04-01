
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

// Play a round of rock paper scissors.
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('You lose!');
        } else if (computerChoice === 'scissors') {
            console.log('You win!');
        } else if (computerChoice === 'rock') {
            console.log('You tie!');
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('You lose!');
        } else if (computerChoice === 'rock') {
            console.log('You win!');
        } else if (computerChoice === 'paper') {
            console.log('You tie!');
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('You lose!');
        } else if (computerChoice === 'paper') {
            console.log('You win!');
        } else if (computerChoice === 'scissors') {
            console.log('You tie!');
        } else {
            console.log('ERROR');
        }
    } else {
        console.log('Computer wins by default.')
    }
}

// Run multiple games.
let gameNum;
gameNum = 3;

function games(gameNum) {
    // Divider
    console.log('<---------- ***** ---------->');

    // Run the games.
    for (var i = 0; i < gameNum; i++) {
        playerSelection();
        computerSelection();
        playRound(playerChoice, computerChoice);

        // Logs
        console.log('You chose ' + playerChoice + '.');
        console.log('Computer chose ' + computerChoice + '.');
    }
}

// Run required functions.
games(gameNum);
