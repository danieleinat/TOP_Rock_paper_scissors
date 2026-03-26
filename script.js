function main(num){
    if (num < 0.25)
    console.log('rock')
    else if ( 0.5 < num < 0.75)
    console.log('paper')
    else
        console.log('scissors')
    
}


function getComputerChoice(){
    return(Math.random());
    
}

let num = getComputerChoice()
main(num)