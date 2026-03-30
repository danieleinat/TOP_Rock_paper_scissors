function playRound(computerChoice, humanChoice) 
  computerChoice = 0;
  humanChoice = 0;



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);



// humen's input
function getHumanChoice() {
  humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  console.log(`you  have , ${humanChoice}`);
  return humanChoice;
}



// computer input
function getComputerChoice() {
  let computerChoice = Math.random();
  let x = "rock"
  let y = "paper"
  let z = "scissors"
  if (computerChoice < 0.25) console.log(x);
  else if (0.5 < computerChoice < 0.75) console.log(y);
  else
  console.log(z);
  return(x,y,z)
}
