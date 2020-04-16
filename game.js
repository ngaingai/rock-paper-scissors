function computerPlay() {
    let compMove = ['rock', 'paper', 'scissors'];
    return compMove[Math.floor((Math.random()*compMove.length))];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let result = "You win!"
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = "You Lose!";
        } else if (computerSelection == 'rock') {
            result = "It's a tie!";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            result = "You Lose!";
        } else if (computerSelection == 'paper') {
            result = "It's a tie!";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = "You Lose!";
        } else if (computerSelection == 'scissors') {
            result = "It's a tie!";
        }
    }
    return result;
}
