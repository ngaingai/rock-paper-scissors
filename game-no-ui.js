function computerPlay() {
    let compMove = ['rock', 'paper', 'scissors'];
    return compMove[Math.floor((Math.random()*compMove.length))];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "You win!"
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = "You lose!";
        } else if (computerSelection == 'rock') {
            result = "It's a tie!";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            result = "You lose!";
        } else if (computerSelection == 'paper') {
            result = "It's a tie!";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = "You lose!";
        } else if (computerSelection == 'scissors') {
            result = "It's a tie!";
        }
    }
    return result;
}

function game() {
    for (i = 1; i < 6; i++) {
        let playerSelection = prompt("Round " + i + ": What's your move?");
        let computerSelection = computerPlay();
        console.log("[Round " + i + "] You: " + playerSelection.toLowerCase() + " CPU: " + computerSelection);
        console.log(oneRound(playerSelection, computerSelection));
    }

}
