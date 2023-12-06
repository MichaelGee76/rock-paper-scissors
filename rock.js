const rpsArray = ["rock","paper","scissors"];


let countPlayer = 0;
let countComputer = 0;


function getComputerChoice() {
    //Computer choice of rock, paper or scissors

    let computerChoice = rpsArray[randomNumber()];
    return computerChoice;
}

function getPlayerChoice() {    
    //Player choice of rock, paper, scissors

    let playerChoice = prompt("Choose Rock, Paper or Scissors!");
    return playerChoice;
    
}

function randomNumber() {

    let ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}




function oneRound() {
    //Game play function for one round
    //Rules: rock beats scissors, scissors beat paper and paper beats rock!
    
    
    let compChoice = getComputerChoice();
    let userChoice = getPlayerChoice();
    
    if (userChoice === "rock" && compChoice === "scissors") {
        countPlayer++;
        
        console.log("You win. Rock beats Scissors." + " Player: " + countPlayer + " points");
        
    } else if (userChoice === "scissors" && compChoice === "paper") {
        countPlayer++;
        
        console.log("You win. Scissors beats Paper." + " Player: " + countPlayer + " points");
        
    } else if (userChoice === "paper" && compChoice === "rock"  ) {
        countPlayer++;
        
        console.log("You win. Paper beats Rock." + " Player: " + countPlayer + " points");
        
    } else if (userChoice === compChoice) {
        
        
        console.log("It\'s a tie!");
        
    } else {
        countComputer++;
        
        console.log(`You lose. ${compChoice} beats ${userChoice}. Computer ${countComputer} points `);
        
    }
    
    
}


function fiveTimes() {
    // Call  oneRound() five times and declare a winner
    
    for (let i = 0; i < 5; i++) {
        oneRound();
        
    }
    if (countPlayer > countComputer) {
        console.log("You are the winner " +countPlayer + " points");
    }else if (countPlayer === countComputer) {
        console.log("It's a tie. Try again.")
    } 
    
    else {
        console.log("Computer wins. " + countComputer + " points");
    } 

}

