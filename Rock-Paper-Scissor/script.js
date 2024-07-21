const choices = ['rock', 'paper', 'scissor'];

const computerDisplay = document.getElementById('computerChoice');
const playerDisplay = document.getElementById('playerChoice');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0, computerScore = 0;

function play(choice) {
    let computerChoice = choices[Math.floor(Math.random()*3)];
    let result = '';
    if (choice === computerChoice) {
        result = "It's a tie";
    } else {
        switch(choice) {
            case 'rock': 
                result = (computerChoice === 'paper')? 'You Lose' : 'You Win';
                break;
            case 'paper': 
                result = (computerChoice === 'scissor')? 'You Lose' : 'You Win';
                break;
            case 'scissor': 
                result = (computerChoice === 'rockf')? 'You Lose' : 'You Win';
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${choice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove('greenText');
    resultDisplay.classList.remove('redText');

    switch(result) {
        case 'You Win':
            resultDisplay.classList.add('greenText');
            playerScore++;
            break;
        case 'You Lose':
            resultDisplay.classList.add('redText');
            computerScore++;
    }
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

