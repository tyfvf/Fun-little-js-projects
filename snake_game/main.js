const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
const resetButton = document.querySelector('#reset-btn')
const scoreText = document.querySelector('#score-text')
const gameWidth = canvas.width
const gameHeight = canvas.height
const boardBackground = '#56E1E8'
const snakeColor = '#4AE897'
const snakeBorder = 'black'
const foodColor = '#E87A6D'
const unitSize = 25
let running = false
let xVelocity = unitSize
let yVelocity = 0
let foodX
let foodY
let score = 0
let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y: 0}
]

window.addEventListener('keydown', changeDirection)
resetButton.addEventListener('click', resetGame)

gameStart()

function gameStart() {
    running = true
    scoreText.textContent = score
    createFood()
    drawFood()
    nextTick()
}

function createFood() {
    function randomFood(min, max){
        return Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
    }
    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameWidth - unitSize)

}

function drawFood() {
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize)
}

function nextTick() {
    if(running){
        setTimeout(() => {
            clearBoard()
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, 75)
    }else {
        displayGameOver()
    }
}

function clearBoard() {
    context.fillStyle = boardBackground
    context.fillRect(0, 0, gameWidth, gameHeight)
}

function moveSnake() {
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity}

    snake.unshift(head)

    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score ++;
        scoreText.textContent = score
        createFood()
    }else {
        snake.pop()
    }
}

function drawSnake() {
    context.fillStyle = snakeColor
    context.strokeStyle = snakeBorder
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}

function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    const goingUp = (yVelocity == -unitSize)
    const goingDown = (yVelocity == unitSize)
    const goingRight = (xVelocity == unitSize)
    const goingLeft = (xVelocity == -unitSize)

    switch(true){
        case (keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize
            yVelocity = 0
            break;
        case (keyPressed == UP && !goingDown):
            xVelocity = 0
            yVelocity = -unitSize
            break
        case (keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize
            yVelocity = 0
            break
        case (keyPressed == DOWN && !goingUp):
            xVelocity = 0
            yVelocity = unitSize
            break
    }
}

function checkGameOver() {
    switch(true){
        case (snake[0].x < 0):
            running = false
            break
        case (snake[0].x >= gameWidth):
            running = false
            break
        case (snake[0].y < 0):
            running = false
            break
        case (snake[0].y >= gameHeight):
            running = false
            break
    }

    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false
        }
    }
}

function displayGameOver() {
    context.font = 'bold 50px Times New Roman'
    context.fillStyle = '#E8AE3F'
    context.textAlign = 'center'
    context.fillText('GAME OVER!', gameWidth / 2, gameHeight / 2)
    running = false
}

function resetGame() {
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    snake = [
        {x: unitSize * 4, y:0},
        {x: unitSize * 3, y:0},
        {x: unitSize * 2, y:0},
        {x: unitSize, y:0},
        {x: 0, y:0},
    ]
    gameStart()
}