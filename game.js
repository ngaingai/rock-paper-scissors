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

let pScore = 0;
let cScore = 0;
let tie = 0;

const container = document.querySelector('#container');
const results = document.querySelector('#results');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let computerSelection = computerPlay();
        let playerSelection = button.id;
        let result = oneRound(playerSelection, computerSelection);

        if (result == "You win!") {
                    pScore++;
                } else if (result == "You lose!") {
                    cScore++;
                } else {
                    tie++;
        }

        let p = document.createElement('p');
        p.textContent = "You: " + playerSelection + " CPU: " + computerSelection + " -> " + result;
        results.appendChild(p);
        let cs = document.createElement('p');
        cs.textContent = "Current Score: " + pScore + " - " + cScore + " - " + tie;
        results.appendChild(cs);

        if (pScore == 5) {
            let final = document.createElement('p');
            final.textContent = "You're the winner!";
            results.appendChild(final);
        } else if (cScore == 5) {
            let final = document.createElement('p');
            final.textContent = "Computer wins!";
            results.appendChild(final);
        }

    })
})

