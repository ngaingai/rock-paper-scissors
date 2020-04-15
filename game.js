function computerPlay() {
    let compMove = ['rock', 'paper', 'scissors'];
    return compMove[Math.floor((Math.random()*compMove.length))];
}
