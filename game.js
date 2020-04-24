function computerPlay() {
    let compMove = ['rock', 'paper', 'scissors'];
    return compMove[Math.floor((Math.random()*compMove.length))];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "You win!"
    if (playerSelection == 'rock' && computerSelection == 'paper') {
            result = "You lose!";
            cScore++;
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            result = "You lose!";
            cScore++;
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            result = "You lose!";
            cScore++;
        } else if (playerSelection == computerSelection) {
            result = "It's a tie!";
            tie++;
        } else {
            pScore++;
        }

    let outcome = {
        result: result,
        pScore: pScore,
        cScore: cScore,
        tie: tie
    };
    return outcome;
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
        let outcome = oneRound(playerSelection, computerSelection);

        let p = document.createElement('p');
        p.textContent = "You: " + playerSelection + " CPU: " + computerSelection + " -> " + outcome.result;
        results.appendChild(p);
        let cs = document.createElement('p');
        cs.textContent = "Current Score: " + outcome.pScore + " - " + outcome.cScore + " - " + outcome.tie;
        results.appendChild(cs);

        if (outcome.pScore == 5) {
            let final = document.createElement('p');
            final.textContent = "You're the winner!";
            results.appendChild(final);
        } else if (outcome.cScore == 5) {
            let final = document.createElement('p');
            final.textContent = "Computer wins!";
            results.appendChild(final);
        }

    })
})

