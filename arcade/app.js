console.log("howdy");

const resultMessage = document.getElementById("response");
const resetGame = document.getElementById("resetGame");
const switchTurn = document.getElementById("nextPlayer")


const player2input = document.getElementById("player2name")
const playerbutton = document.getElementById('playerButton')
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const playerForm = document.getElementById("playerform")

const cell1 = document.getElementById("b1")
const cell2 = document.getElementById("b2")
const cell3 = document.getElementById("b3")
const cell4 = document.getElementById("b4")
const cell5 = document.getElementById("b5")
const cell6 = document.getElementById("b6")
const cell7 = document.getElementById("b7")
const cell8 = document.getElementById("b8")
const cell9 = document.getElementById("b9")


// const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
// console.log(cells)


const gameState = {
  players: ['x', 'o'],
  board: [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9]
  ]

}

let winningCombonations = [
  [cell1, cell2, cell3],
  [cell4, cell5, cell6],
  [cell7, cell8, cell9],
  [cell1, cell4, cell7],
  [cell2, cell5, cell8],
  [cell3, cell6, cell9],
  [cell1, cell5, cell9],
  [cell3, cell5, cell7]
]

let player1 = gameState.players[0];
let player2 = gameState.players[1];
let currentPlayer = player1;
let player1Name = ""
let player2Name = "";
// let state;
// //starting state has all spaces empty
const buildInitialState = () => {
  console.log('b')
  cell1.innerText = " ";
  cell2.innerText = " ";
  cell3.innerText = " ";
  cell4.innerText = " ";
  cell5.innerText = " ";
  cell6.innerText = " ";
  cell7.innerText = " ";
  cell8.innerText = " ";
  cell9.innerText = " ";
  // gameState();
}
buildInitialState()


playerbutton.addEventListener('click', () => {
  player1Name = document.getElementById("player1name").value;
  console.log(player1Name.innerHTML)

})



const playerSwitch = () => {
  console.log("playerSwitch")
  if (
    currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    console.log("switching")
    currentPlayer = player1;
  }
  console.log(currentPlayer)
  return;
};

const checkWin = () => {
  //   // if X has clicked a winning combonation x wins
  console.log("checkWin")

  if (cell1.innerText === 'X' && cell2.innerText === 'X' && cell3.innerText === 'X'
    || cell4.innerText === 'X' && cell5.innerText === 'X' && cell6.innerText === 'X'
    || cell7.innerText === 'X' && cell8.innerText === 'X' && cell9.innerText === 'X'
    || cell1.innerText === 'X' && cell4.innerText === 'X' && cell7.innerText === 'X'
    || cell2.innerText === 'X' && cell5.innerText === 'X' && cell8.innerText === 'X'
    || cell3.innerText === 'X' && cell6.innerText === 'X' && cell9.innerText === 'X'
    || cell1.innerText === 'X' && cell5.innerText === 'X' && cell9.innerText === 'X'
    || cell3.innerText === 'X' && cell5.innerText === 'X' && cell7.innerText === 'X') {

    return resultMessage.innerText = currentPlayer + " Wins!"
  }


  else if (cell1.innerText === 'O' && cell2.innerText === 'O' && cell3.innerText === 'O'
    || cell4.innerText === 'O' && cell5.innerText === 'O' && cell6.innerText === 'O'
    || cell7.innerText === 'O' && cell8.innerText === 'O' && cell9.innerText === 'O'
    || cell1.innerText === 'O' && cell4.innerText === 'O' && cell7.innerText === 'O'
    || cell2.innerText === 'O' && cell5.innerText === 'O' && cell8.innerText === 'O'
    || cell3.innerText === 'O' && cell6.innerText === 'O' && cell9.innerText === 'O'
    || cell1.innerText === 'O' && cell5.innerText === 'O' && cell9.innerText === 'O'
    || cell3.innerText === 'O' && cell5.innerText === 'O' && cell7.innerText === 'O') {

    return resultMessage.innerText = currentPlayer + " Wins!"
  }
  else (playerSwitch())


}



const restart = () => {
  console.log('reset!');
  location.reload();
}




cell1.addEventListener('click', () => {
  if (currentPlayer === player1) {

    cell1.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell1.innerText = "O"
  }
  console.log(cell1.innerText);
  checkWin()
}, { once: true });
cell2.addEventListener('click', () => {
  console.log('hi2');
  if (currentPlayer === player1) {
    cell2.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell2.innerText = "O"
  }
  console.log(cell2.innerText);
  checkWin()
}, { once: true });
cell3.addEventListener('click', () => {
  console.log('hi3');
  if (currentPlayer === player1) {
    cell3.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell3.innerText = "O"
  }
  checkWin()
}, { once: true })
cell4.addEventListener('click', () => {
  console.log('hi4');
  if (currentPlayer === player1) {
    cell4.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell4.innerText = "O"
  }
  checkWin()
}, { once: true })
cell5.addEventListener('click', () => {
  console.log('hi5');
  if (currentPlayer === player1) {
    cell5.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell5.innerText = "O"
  }
  checkWin()
}, { once: true })
cell6.addEventListener('click', () => {
  console.log('hi6');
  if (currentPlayer === player1) {
    cell6.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell6.innerText = "O"
  }
  checkWin()
}, { once: true })
cell7.addEventListener('click', () => {
  console.log('hi7');
  if (currentPlayer === player1) {
    cell7.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell7.innerText = "O"
  }
  checkWin()
}, { once: true })
cell8.addEventListener('click', () => {
  console.log('hi8');
  if (currentPlayer === player1) {
    cell8.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell8.innerText = "O"
  }
  checkWin()
}, { once: true })
cell9.addEventListener('click', () => {
  console.log('hi9');
  if (currentPlayer === player1) {
    cell9.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell9.innerText = "O"
  }
  checkWin()
}, { once: true })

resetGame.addEventListener('click', restart)
