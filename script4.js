function playRound(humanChoice, computerChoice) {
  // your code here!
}
// humen's input
function getHumanChoice() {
  humanInput = prompt("enter your answer: ");
  humanInput = humanInput.toLowerCase();
  return humanInput;
}

// computer input
function getComputerChoice() {
  computerInput = Math.random();
  if (computerInput < 0.25) console.log("rock");
  else if (0.5 < computerInput < 0.75) console.log("paper");
  else console.log("scissors");
  return computerInput;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
