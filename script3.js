function playRound(humanChoice, computerChoice) {
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
  let humanScore = prompt("ENTER YOUR CHOICE(Rock,Paper or Scissors): ");
  humanScore = humanScore.toLowerCase();
  if (humanScore === prompt) var humanScore = humanScore + 1;
  return humanScore;
}

// computer input
function getComputerChoice() {
  computerScore = Math.random();
  if (computerScore < 0.25) console.log("rock");
  else if (0.5 < computerScore < 0.75) console.log("paper");
  else console.log("scissors");
  if (computerScore === propmpt) var computerScore = computerScore + 1;
  return computerScore;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  playRound(5);
}

playGame();
