const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choice = document.querySelectorAll('.choice');

let computer;
let player;
let result;

choice.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = `${checkWinner()}`;

}));

function computerTurn() {
    let num = Math.floor(Math.random() * 3) + 1;

    if(num == 1){
        computer = 'Rock';
    }else if(num == 2){
        computer = 'Paper';
    }else{
        computer = 'Scissors'
    };
};

function checkWinner() {
    if(player == computer){
        return 'DRAW!'
    }else if(computer == 'Rock'){
        return player == 'Paper' ? 'Player Wins!' : 'Computer Wins!';
    }else if(computer == 'Paper'){
        return player == 'Scissors' ? 'Player Wins!': 'Computer Wins!';
    }else if(computer == 'Scissors'){
        return player == 'Rock' ? 'Player Wins!' : 'Computer Wins!';
    };
};