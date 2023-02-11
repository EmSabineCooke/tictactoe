console.log("howdy");

const resultMessage = document.getElementById("response");
const resetGame = document.getElementById("resetGame");
const switchTurn = document.getElementById("nextPlayer")
const player1name = document.getElementById("player1name")
const player2name = document.getElementById("player2name")


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
console.log(gameState.board);

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

// let winningCombonationsO = [
//   [cell1, cell2, cell3],
//   [cell4, cell5, cell6],
//   [cell7, cell8, cell9],
//   [cell1, cell4, cell7],
//   [cell2, cell5, cell8],
//   [cell3, cell6, cell9],
//   [cell1, cell5, cell9],
//   [cell3, cell5, cell7]
// ]

let player1 = gameState.players[0]
let player2 = gameState.players[1]
let currentPlayer = player1;

// let state;
// //starting state has all spaces empty
const buildInitialState = () => {
  console.log('b')
  cell1.innerHTML = " ";
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
  // if X has clicked a winning combonation x wins
  console.log("checkWin")
  if (winningCombonations.innerText = "X") {
    Win()
  }
  // else if (winningCombonations =) {
  playerSwitch()

  // if (winningCombonations === true && (currentPlayer === player1));
  // result = 'xWin';
  // Win()
  // // // else if (3 in a row O) { let result = Owin }
  // if (winningCombonations === true && (currentPlayer === player2)) {
  //   result = 'oWin';
  //   Win()
  // }
  // else (
}
const Win = () => {
  console.log("win")
  if (result === 'xWin') {
    return resultMessage.innerText = "X Wins!";
  }

  else if (result === 'oWin') {
    return resultMessage.innerText = "O Wins!";
  }

  else {
    return resultMessage.innerText = "Its a Tie";
  }

}
const restart = () => {
  console.log('reset!');
  location.reload();
}



// resetGame.addEventListener('click', reset);
cell1.addEventListener('click', () => {
  console.log(cell1.innerText);
  if (currentPlayer === player1) {
    cell1.innerText = "X"
  }
  else if (currentPlayer === player2) {
    cell1.innerText = "O"
  }
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
// cells.addEventListener('click', () => { console.log('cells') 
// if (currentPlayer = player1){
//   let (cell .innerText = "X"
// }
// }, { once: true })
resetGame.addEventListener('click', restart)
