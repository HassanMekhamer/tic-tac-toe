//Document selectors
const main = document.querySelector(".main");
const score = document.querySelector(".score");
const board = document.querySelector(".board");

//players' scores variables
let pXScore = document.querySelector(".player1");
let pOscore = document.querySelector(".player2");

// //player names from inputs
// let xName = document.querySelector("#xName").value;
// let oName = document.querySelector("#oName").value;



//Player creation with name and score = 0
function createPlayer(name) {
    return { name, score: 0 }
}
let playerX = createPlayer("Hassan");
let playerO = createPlayer("Jimmy");

pXScore.textContent = `${playerX.name}: ${playerX.score}`
pOscore.textContent = `${playerO.name}: ${playerO.score}`

let gameOver = false;



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
    if (cell.textContent === "" && !gameOver) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log("this works  at cell " + cell.dataset.index)
        gameObj.gameBoard[cell.dataset.index] = cell.textContent;
    } else {
        console.log("Cell already taken!")

    }
    if ((cell.textContent !== "") && (
        //top row
        gameObj.gameBoard[0] === gameObj.gameBoard[1] &&
        gameObj.gameBoard[1] === gameObj.gameBoard[2] &&
        (gameObj.gameBoard[0] === "X" || gameObj.gameBoard[0] === "O")
        ||
        //left column
        gameObj.gameBoard[0] === gameObj.gameBoard[3] &&
        gameObj.gameBoard[3] === gameObj.gameBoard[6] &&
        (gameObj.gameBoard[0] === "X" || gameObj.gameBoard[0] === "O")
        ||
        //first diagonal
        gameObj.gameBoard[0] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[8] &&
        (gameObj.gameBoard[0] === "X" || gameObj.gameBoard[0] === "O")

        ||
        //mid column
        gameObj.gameBoard[1] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[7] &&
        (gameObj.gameBoard[1] === "X" || gameObj.gameBoard[1] === "O")

        ||
        //right column
        gameObj.gameBoard[2] === gameObj.gameBoard[5] &&
        gameObj.gameBoard[5] === gameObj.gameBoard[8] &&
        (gameObj.gameBoard[2] === "X" || gameObj.gameBoard[2] === "O")

        ||
        //mid row
        gameObj.gameBoard[3] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[5] &&
        (gameObj.gameBoard[3] === "X" || gameObj.gameBoard[3] === "O")
        ||
        //bottom row
        gameObj.gameBoard[6] === gameObj.gameBoard[7] &&
        gameObj.gameBoard[7] === gameObj.gameBoard[8] &&
        (gameObj.gameBoard[6] === "X" || gameObj.gameBoard[6] === "O")
        ||
        //other diagonal
        gameObj.gameBoard[2] === gameObj.gameBoard[4] &&
        gameObj.gameBoard[4] === gameObj.gameBoard[6] &&
        (gameObj.gameBoard[2] === "X" || gameObj.gameBoard[2] === "O")
    )
    ) {
        gameOver = true;

        if (gameObj.gameBoard[cell.dataset.index] === "X") {
            playerX.score++;
            pXScore.textContent = `${playerX.name}: ${playerX.score}`
            console.log(`Game over ${playerX.name} wins`)

        } else if (gameObj.gameBoard[cell.dataset.index] === "O") {
            playerO.score++;
            pOscore.textContent = `${playerO.name}: ${playerO.score}`
            console.log(`Game over ${playerO.name} wins`)

        }
    }


    if (gameOver) {
        gameObj.gameBoard = ["", "", "", "", "", "", "", "", "",];
        cells.forEach((cell) => { cell.textContent = "" })
        gameOver = false;
    }

}


cells.forEach((cell) => {
    cell.addEventListener("click", () => { marker(cell) })
})

if (gameOver) {
    cells.forEach((cell) => {
        cell.removeEventListener("click", () => { marker(cell) })
    })
}

















