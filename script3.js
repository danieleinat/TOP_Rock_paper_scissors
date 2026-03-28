function playRound(humanSelection, computerSelection) {
  // your code here!
  let rock;
  let paper;
  let scissors;
  rock > scissors;
  scissors > paper;
  paper > rock;
  humanScore = 0;
  computerScore = 0;
}
// humen's input
function getHumanChoice() {
  humanSelection = prompt("ENTER YOUR CHOICE(Rock,Paper or Scissors): ");
  humanSelection = humanSelection.toLowerCase();
  if (humanSelection === prompt) var humanSelection = humanSelection + 1;
  return humanSelection;
}

// computer input
function getComputerChoice() {
  computerSelection = Math.random();
  if (computerSelection < 0.25) console.log("rock");
  else if (0.5 < computerSelection < 0.75) console.log("paper");
  else console.log("scissors");
  if (computerSelection === Math.random())
    var computerSelection = computerSelection + 1;
  return computerSelection;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  playRound(5);
}

playGame();
