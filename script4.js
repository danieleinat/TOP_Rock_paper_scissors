function playRound(computerChoice, humanChoice) {
  computerChoice = 0;
  humanChoice = 0;
  if (computerChoice > humanChoice) {
    computerChoice += 1;
    console.log(`${humanChoice} win , ${computerChoice} lose`);
    console.log(`${computerChoice} win , ${humanChoice} lose`);
  } else if (humanChoice > computerChoice) {
    computerChoice += 1;
    console.log(`${humanChoice} win , ${computerChoice} + lose`);
  } else {
    ((computerChoice = computerChoice), (humanChoice = humanChoice));

    console.log("it's a tie" + computerChoice, humanChoice);
    return (computerChoice, humanChoice);
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
  let computerChoice;
  random = Math.random();
  random == computerChoice;
  if (computerChoice < 0.25) console.log("rock");
  else if (0.5 < computerChoice < 0.75) console.log("paper");
  else console.log(`computer has , scissors`);
  return computerChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
