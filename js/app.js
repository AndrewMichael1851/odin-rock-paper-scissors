// Player selection function.
let playerChoice;
let computerChoice;
let game = 0;
let playerScore = 0;
let computerScore = 0;
let gameResult = '';

function playGame(e) {
    // New console.
    game = game + 1;
    console.log(`<---------- Game: ${game} ---------->`);

    // Define player choice.
    playerChoice = e.target.getAttribute('id');
    console.log('Player: ' + playerChoice);

    // Define computer choice.
    computerChoice = Math.random() * 3;

    if (computerChoice >= 2) {
        computerChoice = 'rock';
    } else if (computerChoice >= 1 && computerChoice < 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log('Computer: ' + computerChoice);

    // Play rock paper scissors.
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore = computerScore + 1;
            gameResult = 'You lose!';
        } else if (computerChoice === 'scissors') {
            playerScore = playerScore + 1;
            gameResult = 'You win!';
        } else if (computerChoice === 'rock') {
            gameResult = 'You tie!';
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore = computerScore + 1;
            gameResult = 'You lose!';
        } else if (computerChoice === 'rock') {
            playerScore = playerScore + 1;
            gameResult = 'You win!';
        } else if (computerChoice === 'paper') {
            gameResult = 'You tie!';
        } else {
            console.log('ERROR');
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore = computerScore + 1;
            gameResult = 'You lose!';
        } else if (computerChoice === 'paper') {
            playerScore = playerScore + 1;
            gameResult = 'You win!';
        } else if (computerChoice === 'scissors') {
            gameResult = 'You tie!';
        } else {
            console.log('ERROR');
        }
    } else {
        console.log('Computer wins by default.')
    }

    // Display the result and score.
    let html = `
        <h4>Score: ${playerScore} - ${computerScore}</h4>
        <p>${gameResult}</p>
        `;
    document.getElementById('score-card').innerHTML = html;

    //  Logs.
    console.log(gameResult);
    console.log(`Score: ${playerScore} - ${computerScore}`);
}

// Add event listener for button clicks.
const button = document.querySelectorAll('.button');
button.forEach(button => button.addEventListener('click', playGame));
