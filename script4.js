function playRound(humanChoice,computerChoice)
{
console.log(`computer has , ${computerChoice}`)
console.log(`you  have , ${humanChoice}`);
humanChoice = 0;
computerChoice = 0;
 if (humanSelection = 'rock' && computerSelection == scissors || humanSelection == 'paper' && computerSelection ==  'rock' || humanSelection == 'scissors' && computerSelection == 'paper'){ console.log("YOU WIN")
 
 humanChoice++;
 };
 else if (computerSelection = 'rock' && humanSelection == scissors || computerSelection == 'paper' && humanSelection ==  'rock' || computerSelection == 'scissors' && humanSelection == 'paper') console.log("YOU lose"){
 computerChoice++};
 else
  {
  console.log('it's a tie)
 };
}
// humen's input
function getHumanChoice() {
  humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// computer input
function getComputerChoice() {
  var computerChoice = Math.random()
  if (computerChoice < 0.25)  return "rock";
  else if (0.5 < computerChoice && computerChoice < 0.75)return  "paper";
  else return "scissors";



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
