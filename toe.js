
let playerTurn = true;

// let o = true
// let x = false

let squares = document.querySelectorAll(".tic");
let winMess = document.querySelector(".win")
let instructMess = document.querySelector(".instruct")

//on load state
let boardState = [squares[0],squares[1],squares[2],
                squares[3],squares[4],squares[5],
                squares[6],squares[7],squares[8],]

instructMess.innerText = "You're up player X"
// create on click events
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (square.innerText === ""){
            //add x
            if (playerTurn === true){
                square.innerText = 'X'
                if (isWin() == true){
                    winSet(playerTurn)
                } else{
                    playerTurn = !playerTurn
                    instructMess.innerText = "You're up player O!"
                }

            //add o
            } else {
                square.innerText = 'O'
                if (isWin() == true){
                    winSet(playerTurn)
                } else{
                    playerTurn = !playerTurn
                    instructMess.innerText = "You're up player X!"
                }
            }
        } else {
            console.log("Please select a free square")
            instructMess.innerText = "Please select a free square"
        }
    })
})

function isWin() {
    console.log('HERE')
    //check accross
    if (boardState[0].innerText === boardState[1].innerText === boardState[2].innerText && boardState[0].innerText !=""){
        console.log(boardState[0].innerText + boardState[1].innerText + boardState[2].innerText )
        return true
    } else if (boardState[3].innerText === boardState[4].innerText === boardState[5].innerText && boardState[3].innerText !=""){
        console.log(boardState[3].innerText + boardState[4].innerText + boardState[5].innerText )
        return true
    } else if (boardState[6].innerText === boardState[7].innerText === boardState[8].innerText && boardState[6].innerText !=""){
        return true
    //check down
    } else if (boardState[0].innerText === boardState[3].innerText === boardState[6].innerText && boardState[0].innerText !=""){
        return true
    } else if (boardState[1].innerText === boardState[4].innerText === boardState[7].innerText && boardState[1].innerText !=""){
        return true
    } else if (boardState[2].innerText === boardState[5].innerText === boardState[8].innerText && boardState[2].innerText !=""){
        return true
    //check diagonal
    }else if (boardState[0].innerText === boardState[4].innerText === boardState[8].innerText && boardState[0].innerText !=""){
        return true
    } else if (boardState[6].innerText === boardState[4].innerText === boardState[2].innerText && boardState[6].innerText !=""){
        return true
    }else {
        return false
    }
}

function winSet(playerTurn) {
    if (playerTurn === true){
        winMess.innerText = "Xs Win!"
    } else {
        winMess.innerText = "Os Win!"
    }
}