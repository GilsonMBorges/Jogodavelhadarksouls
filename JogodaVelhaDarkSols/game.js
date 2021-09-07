//iniciar as variaveis referente a O e X


let board = ["", "", "", "", "", "", "", "", "",];

let playerTime = 0;

let symbols = ["o", "x"];

let gameOver = false;
let buttonRestart = document.querySelector('.restart');


let win ="";
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function handleMove(position) {

    if (gameOver) {
        return;

    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {

            playerTime = (playerTime ==0)? 1:0;
            //A linha de cima é a mesma coisa da linha comentada abaixo//
            // if (playerTime == 0) {
            //     playerTime = 1;
            // } else {
            //     playerTime = 0;

            // }
        }
    }
    return gameOver;
}

function isWin() {

   
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != "") {

            return true;
        }
    }
    return false;
}

// document.querySelector(".reset").addEventListener("click" , reset);


// function reset(){

//     win="";

//     let random= Math.floor(Math.random()*2);

//         if(random ===0){
//             symbols = "o";
//         }else{
//             symbols = "x";

//         for (let i in board){
//             board[i];
//         }
//         }
//         gameOver = false;
            
// }
buttonRestart.addEventListener('click', function(){
    window.location.reload();
})