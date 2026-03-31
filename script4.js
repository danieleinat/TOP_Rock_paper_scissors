let humanCounter = 0;
let computerCounter = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`computer has - ${computerChoice}`);
  console.log(`you  have - ${humanChoice}`);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanChoice++;
    console.log("YOU WIN");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerChoice++;
    console.log("YOU LOSE");
  } else {
    console.log("it's a tie");
  }
}
// human's input
function getHumanChoice() {
  humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// computer input
function getComputerChoice() {
  var computerChoice = Math.random();
  if (computerChoice < 1) return "rock";
  else if (0.5 < computerChoice && computerChoice < 0.75) return "paper";
  else return "scissors";
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
