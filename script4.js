// Create a new function named getComputerChoice.
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// computer input
function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice < 1) {
    return "rock";
  } else if (0.5 < computerChoice && computerChoice < 0.75) {
    return "paper";
  } else {
    return "scissors";
  }
}
getComputerChoice();

// Create a new function named getHumanChoice.
// return one of the valid choices depending on what the user inputs.
// human's input
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

function getHumanChoice() {
  let humanChoice = prompt("enter your answer: ");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;
let counter = 0;
// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

function playRound(humanChoice, computerChoice) {
  console.log(`computer has - ${computerChoice}`);
  console.log(`you  have - ${humanChoice}`);
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    // Increment the humanScore or computerScore variable based on the round winner.
    humanChoice++;
    console.log("YOU WIN");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    // Increment the humanScore or computerScore variable based on the round winner.
    computerChoice++;

    console.log("YOU LOSE");
  } else {
    console.log("it's a tie");
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.

function playGame() {
  while (counter <= 5) {
    playRound(humanSelection, computerSelection);
  }
}
playGame();
