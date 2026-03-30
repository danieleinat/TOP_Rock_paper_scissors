function playRound(computerChoice, humanChoice) 
{
 let x= 'rock';
 let y = 'paper';
  let z = 'scissors';
  x > z;
  z > y;
  y > x;
  computerChoice = 0;
  humanChoice = 0;
  if (computerChoice>humanChoice){
    computerChoice++
  console.log('You lose!')
  } else if (computerChoice < humanChoice){
    humanChoice++;
    console.log('You win! ')
  }else {console.log("it'ts a tie")
  }}
  

// humen's input
function getHumanChoice() {
  humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  console.log(`you  have , ${humanChoice}`);
  return humanChoice;
}

// computer input
function getComputerChoice() {
  var computerChoice = Math.random()
  if (computerChoice < 0.25) computerChoice = "rock";
  else if (0.5 < computerChoice < 0.75)computerChoice = "paper";
  else computerChoice = "scissors";
  console.log(`computer has , ${computerChoice}`)


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(computerChoice, humanChoice) 