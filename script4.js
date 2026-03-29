function playRound(computerChoice, humanChoice) {
  computerChoice = 0;
  humanChoice = 0;
  if (computerChoice > humanChoice) {
    computerChoice += 1;
    console.log(`${humanChoice} win , ${computerChoice} lose`);
    console.log(`${computerChoice} + "computer win" , ${humanChoice} lose`);
  } else if (humanChoice > computerChoice) {
    computerChoice += 1;
    console.log(`${humanChoice} computer 'win' , ${computerChoice} + lose`);
  } else {
    ((computerChoice = computerChoice), (humanChoice = humanChoice));
  }
}
// humen's input
function getHumanChoice() {
  humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  console.log(`you  have , ${humanChoice}`);
  return humanChoice;
}

// computer input
function getComputerChoice() {
  computerChoice = Math.random();
  if (computerChoice < 0.25) console.log("rock");
  else if (0.5 < computerChoice < 0.75) console.log("paper");
  else console.log(`computer has , ${computerChoice}`);
  return computerChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
