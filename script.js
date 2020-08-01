let humanScore = 0;
let computerScore = 0;

function computerPlay(){
    let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() *options.length)])
}

function humanPlay() {
    return prompt('Rock paper or scissors').toLowerCase();
}

function playRound(playerSelection, computerSelection, callbackFunction){

    if (playerSelection ==='rock' && computerSelection === 'rock') {
        console.log('Draw, both choose rock')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock')
        computerScore++;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        console.log ('You Win! Rock beats Paper')
        humanScore ++;
    }

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        console.log ('Draw, both choose paper')
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper')
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log ('You Win! Paper beats Rock')
        humanScore ++;
    }

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
        console.log('Draw, both choose scissors')
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors')
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log ('You Win! Scissors beats paper')
        humanScore ++;
    }

    callbackFunction(humanScore,computerScore);

}

function showScore (humanScore, computerScore){
    console.log(`Score:${humanScore} - ${computerScore}`);
}

function showHelpMessage(){
    alert("Open the console to play")
}

function initialize() {
    showHelpMessage();
    for(let i=0; i < 5; i++){
        const playerSelection = humanPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection, showScore);
    }
}

initialize();
