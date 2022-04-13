const restartButton = document.querySelector('#restart-btn')
const statusText = document.querySelector('#statusText')
const cells = document.querySelectorAll('.cell')

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ['', '', '', '', '', '', '', '', '']
let current_player = 'X'
let running = false;

initialize_game()

function initialize_game() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartButton.addEventListener('click', restartGame)
    statusText.textContent = `${current_player}'s turn `
    running = true
}

function cellClicked() {
    const cellIndex = this.getAttribute('cell-index')

    if(options[cellIndex] != '' || !running) {
        return
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = current_player
    cell.textContent = current_player
}

function checkWinner() {
    let roundWon = false

    for(i = 0; i < winConditions.length; i++){
        const condition = winConditions[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA == '' || cellB == '' || cellC == ''){
            continue
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true
            break
        }  
    }

    if(roundWon){
        statusText.textContent = `${current_player} wins!`
        running = false
    }else if(!options.includes('')){
        statusText.textContent = `DRAW!`
        running = false
    }else {
        changePlayer()
    }
}

function changePlayer() {
    current_player = (current_player == 'X') ? 'O' : 'X'
    statusText.textContent = `${current_player}'s turn`
}

function restartGame() {
    current_player = 'X'
    statusText.textContent = `${current_player}'s turn`
    cells.forEach(cell => cell.textContent = '')
    options = ['', '', '', '', '', '', '', '', '']
    running = true
}