const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerOneScore = document.querySelector("#player-one-score");
const playerTwoScore = document.querySelector("#player-two-score");
const playerTurn = document.querySelector('#player-turn')

let choices = [];
let playerOne = 0;
let playerTwo = 0;
let trackClicks = 0;
let turn = 1


const winner = (turns) => {
  const ties = [
    ["rock", "rock"],
    ["paper", "paper"],
    ["scissors", "scissors"],
  ];

  const wins = [
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ];

  for (let combination of wins) {
    if (JSON.stringify(combination) === JSON.stringify(turns)) {
      return "1";
    }
  }

  for (let combination of ties) {
    if (JSON.stringify(combination) === JSON.stringify(turns)) {
      return "0";
    }
  }
  return "2";
};

rock.addEventListener("click", () => {
  choices.splice(1, 0, "rock");
  console.log(choices);
  trackClicks++;
  checkWin()
});

paper.addEventListener("click", () => {
  choices.splice(1, 0, "paper");
  console.log(choices);
  trackClicks++;
  checkWin()
});

scissors.addEventListener("click", () => {
  choices.splice(1, 0, "scissors");
  console.log(choices);
  trackClicks++;
  checkWin()
});

function checkWin() {
  
  turn = turn === 1 ? 2 : 1
  playerTurn.innerHTML = `player turn: ${turn}`

  if (trackClicks === 2) {
    const win = winner(choices);

    if (win === "1") {
      playerOne++;
      playerOneScore.innerHTML = `Player one wins: ${playerOne}`;
    } else if (win === "2") {
      playerTwo++;
      playerTwoScore.innerHTML = `Player two wins: ${playerTwo}`;
    }
    choices = [];
    trackClicks = 0;
    
  }
}
