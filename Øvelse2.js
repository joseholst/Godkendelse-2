// Board med værdier null
let board = [
    null, null, null,
    null, null, null,
    null, null, null
];

let empty = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
// Bruges til at holde styr på hvor mange ganget while-loopet har kørt
let turn = 0;

const winingCombi = 
[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function hasEmptySquares() {
    // Definere at denne funktion returnere empty.length når den er større end 0. Dette gør vores While loop stopper når alle felter er udfyldt
    return empty.length > 0;
}

function pickEmpty() {
    let randomNumber = Math.floor(Math.random() * empty.length);
    let square = empty[randomNumber];
    // Fjern det valgte felt fra empty
    empty.splice(randomNumber, 1);
    // console.log(square); - Brugt til alle tjekke, at square har ny værdi hver gang pickEmpty kaldes i while-loopet
    return square;
}

function printBoard() {
    console.log(`tur nr: ${turn} : ${board}`);
}

function nextTurn() {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    turn++;
}

function checkWinner() {
    for (let i = 0; i < winingCombi.length; i++) {
        let a = winingCombi[i][0];
        let b = winingCombi[i][1];
        let c = winingCombi[i][2];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return currentPlayer
        } 
    }
    return null;
}

function playTicTacToe() {
    //console.log('start game');
    while (hasEmptySquares()) {
        let randomSquare = pickEmpty();
        board[randomSquare] = currentPlayer;
        printBoard();
        let winner = checkWinner();
        if (winner) {
            console.log(`${winner} har vundet!`);
            break; // Bryd ud af løkken, da der er en vinder
        }

        if (turn >= 8) { // Uafgjort hvis det er den sidste tur (turn 9)
            console.log("Det er uafgjort!");
            break;
        }
        nextTurn();
        };
        
} 
playTicTacToe();