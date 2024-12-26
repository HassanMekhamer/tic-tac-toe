//Document selectors
const main = document.querySelector(".main");
const score = document.querySelector(".score");
const board = document.querySelector(".board");

//players' scores variables
let pXScore = document.querySelector(".player1");
let pYScore = document.querySelector(".player2");


//Player creation with name and score = 0
function createPlayer(name) {
    return { name, score: 0 }
}
let playerX = createPlayer("Hassan");
let playerY = createPlayer("Jimmy");



let gameObj = {
    gameBoard: ["", "", "", "", "", "", "", "", "",]
}

//adding 9 cells to the board
for (let i = 0; i < gameObj.gameBoard.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell")
    cell.textContent = "";
    cell.dataset.index = i;
    board.appendChild(cell);
}

//creating an array of all 9 cells
let cells = document.querySelectorAll(".cell");

//either X or O switches each click
let currentPlayer = "X";

//function to add X or O when clicking a cell
function marker(cell) {
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log("this works  at cell " + cell.dataset.index)
        gameObj.gameBoard[cell.dataset.index] = cell.textContent;
        // console.log(gameObj.gameBoard)


    } else {
        console.log("Cell already taken!")
    }
    if (
        //top row
        gameObj.gameBoard[0] === gameObj.gameBoard[1] &&
        gameObj.gameBoard[1] === gameObj.gameBoard[2]
        ||
        //left column
        gameObj.gameBoard[0] === gameObj.gameBoard[3] &&
        gameObj.gameBoard[3] === gameObj.gameBoard[6]
        ||
        //first diagonal
        gameObj.gameBoard[0] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[8]
        ||
        //mid column
        gameObj.gameBoard[1] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[7]
        ||
        //right column
        gameObj.gameBoard[2] === gameObj.gameBoard[5] &&
        gameObj.gameBoard[5] === gameObj.gameBoard[8]
        ||
        //mid row
        gameObj.gameBoard[3] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[5]
        ||
        //bottom row
        gameObj.gameBoard[6] === gameObj.gameBoard[7] &&
        gameObj.gameBoard[7] === gameObj.gameBoard[8]
        ||
        //other diagonal
        gameObj.gameBoard[2] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[6]
    ) {
        console.log{}
    }
}
cells.forEach((cell) => {
    cell.addEventListener("click", () => { marker(cell) })
})

















