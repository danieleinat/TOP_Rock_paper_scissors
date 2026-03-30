function playRound(computerChoice, humanChoice) 
{
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
  let computerChoice = Math.random()
  if (computerChoice < 0.25) computerChoice = "rock";
  else if (0.5 < computerChoice < 0.75)computerChoice = "paper";
  else computerChoice = "scissors";
  console.log(`computer has , ${computerChoice}`)


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
