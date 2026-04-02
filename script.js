// Create a new function named getComputerChoice.
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

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
