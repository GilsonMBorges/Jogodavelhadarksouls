document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {

        square.addEventListener("click", handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

 
    if(handleMove(position)){

        setTimeout(()=>{
            alert("You Died");

        },15)
        
    }



    updateSquare(position);
}

function updateSquare(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class ="${symbol}"></div>`
}

//A função a cima substitui a função a baixo usada para resetar o game.
// function updateSquares() {

//      let squares = document.querySelectorAll(".square");

//    squares.forEach((square) => {
//         let position = square.id;
//        let symbol = board[position];

//          if (symbol != "") {

//             square.innerHTML = `<div class ="${symbol}"></div>`
//        }

//     })

//  }
