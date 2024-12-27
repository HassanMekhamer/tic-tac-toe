//Document selectors
const main = document.querySelector(".main");
const score = document.querySelector(".score");
const board = document.querySelector(".board");
const namesBtn = document.querySelector(".namesBtn");
const xInput = document.querySelector("#xName");
const oInput = document.querySelector("#oName");
const resetBtn = document.querySelector(".resetBtn");
const pXscore = document.querySelector(".player1");
const pOscore = document.querySelector(".player2");
//Text shown when a player wins
const winText = document.createElement("p");

//Main game object
let gameObj = {
    gameBoard: ["", "", "", "", "", "", "", "", "",]
}

//Button to submit names entered
namesBtn.addEventListener("click", () => {
    if (xInput.value !== "") {
        playerX.name = xInput.value;
    }
    if (oInput.value !== "") {
        playerO.name = oInput.value;
    }
    pXscore.textContent = `${playerX.name}: ${playerX.score}`
    pOscore.textContent = `${playerO.name}: ${playerO.score}`

    xInput.value = "";
    oInput.value = "";
})

//adding 9 cells to the board
for (let i = 0; i < gameObj.gameBoard.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell")
    cell.textContent = "";
    cell.dataset.index = i;
    board.appendChild(cell);
}

//Player creation objects (name, score = 0)
function createPlayer(name) {
    return { name, score: 0 }
}
let playerX = createPlayer("Player X");
let playerO = createPlayer("Player O");

////Game over or not
let gameOver = false;

//creating an array of all 9 cells
let cells = document.querySelectorAll(".cell");

//either X or O switches each click
let currentPlayer = "X";

const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 3, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

//Function to run the game
function marker(cell) {
    if (cell.textContent === "" && !gameOver) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        gameObj.gameBoard[cell.dataset.index] = cell.textContent;
    }
    if (cell.textContent !== "") {
        console.log("cell already taken!")
    }

    function checkWinner() {
        gameOver = true;

        if (gameObj.gameBoard[cell.dataset.index] === "X") {
            playerX.score++;
            pXscore.textContent = `${playerX.name}: ${playerX.score}`
            console.log(`${playerX.name} wins`)
            gameObj.gameBoard = ["", "", "", "", "", "", "", "", "",];
            winText.textContent = `${playerX.name} wins! reset board to play again`
            main.appendChild(winText)
        }
        if (gameObj.gameBoard[cell.dataset.index] === "O") {
            playerO.score++;
            pOscore.textContent = `${playerO.name}: ${playerO.score}`
            console.log(`${playerO.name} wins`)
            gameObj.gameBoard = ["", "", "", "", "", "", "", "", "",];
            winText.textContent = `${playerO.name} wins! reset board to play again`
            main.appendChild(winText)
        }
    }

    for (combo of winningCombos) {
        let [a, b, c] = combo

        if (
            gameObj.gameBoard[a] &&
            gameObj.gameBoard[a] == gameObj.gameBoard[b] &&
            gameObj.gameBoard[b] == gameObj.gameBoard[c]
        ) {
            checkWinner()
        }
    }

}

cells.forEach((cell) => {
    cell.addEventListener("click", () => { marker(cell) })
})

resetBtn.addEventListener("click", (target) => {
    gameObj.gameBoard = ["", "", "", "", "", "", "", "", "",];
    cells.forEach((cell) => { cell.textContent = "" })
    gameOver = false;
    winText.textContent = "";
})
