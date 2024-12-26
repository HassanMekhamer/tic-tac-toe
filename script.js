//Document selectors
const main = document.querySelector(".main");
const score = document.querySelector(".score");
const board = document.querySelector(".board");

//players' scores variables
let p1Score = document.querySelector(".player1");
let p2Score = document.querySelector(".player2");



let gameBoard = ["", "", "", "", "", "", "", "", "", ]

let cell = document.createElement("div");
cell.classList.add("cell")
cell.textContent = " ";

for (let i = 0; i < gameBoard.length; i++) {
    
    board.appendChild(cell.cloneNode(true));
    console.log("works");
}



//Player creation with name and score = 0
function createPlayer(name) {
    return { name, score: 0 }
}

let player1 = createPlayer("Hassan");
let player2 = createPlayer("Jimmy");

console.log(player1, player2)