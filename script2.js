function playRound(computerScore,humanScore){
    let rock;
    let paper;
    let scissors;
    rock > scissors ;
    scissors > paper;
    paper > rock;
    if ( 1> computerScore > 0)
    console.log('rock')
    else if ( 1 < computerScore < 10)
    console.log('paper')
    else
        console.log('scissors')
    humanScore = 0
   computerScore = 0
    if (humanScore === Number)
    var humanScore = humanScore+1;
    if (computerScore === Number)
    var computerScore = computerScore + 1;

    console.log(humanScore,computerScore)
}
function getComputerChoice(){
    return(Math.random());
    
}

function getHumanChoice(){
    let humanScore = prompt('enter a number here: ')
    return(humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);