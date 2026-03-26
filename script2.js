function main(y){
    if ( 1> y > 0)
    console.log('rock')
    else if ( 1 < y < 10)
    console.log('paper')
    else
        console.log('scissors')
    
}


function getHumanChoice(){
    let x = prompt('enter a number here: ')
    return(x);
}

y = getHumanChoice()

main(y)