const rpsArray = ["rock","paper","scissors"];


let countPlayer = 0;
let countComputer = 0;


function getComputerChoice() {
    //Computer choice of rock, paper or scissors

    let computerChoice = rpsArray[randomNumber()];
    return computerChoice;
}

// function getPlayerChoice() {    
//     //Player choice of rock, paper, scissors

//     let playerChoice = prompt("Choose Rock, Paper or Scissors!");
//     return playerChoice;
    
// }

function randomNumber() {

    let ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}




// function oneRound() {
//     //Game play function for one round
//     //Rules: rock beats scissors, scissors beat paper and paper beats rock!
    
    
//     let compChoice = getComputerChoice();
//     let userChoice = getPlayerChoice();
    
//     if (userChoice === "rock" && compChoice === "scissors") {
//         countPlayer++;
        
//         console.log("You win. Rock beats Scissors." + " Player: " + countPlayer + " points");
        
//     } else if (userChoice === "scissors" && compChoice === "paper") {
//         countPlayer++;
        
//         console.log("You win. Scissors beats Paper." + " Player: " + countPlayer + " points");
        
//     } else if (userChoice === "paper" && compChoice === "rock"  ) {
//         countPlayer++;
        
//         console.log("You win. Paper beats Rock." + " Player: " + countPlayer + " points");
        
//     } else if (userChoice === compChoice) {
        
        
//         console.log("It\'s a tie!");
        
//     } else {
//         countComputer++;
        
//         console.log(`You lose. ${compChoice} beats ${userChoice}. Computer ${countComputer} points `);
        
//     }
    
    
// }


// function fiveTimes() {
//     // Call  oneRound() five times and declare a winner
    
//     for (let i = 0; i < 5; i++) {
//         oneRound();
        
//     }
//     if (countPlayer > countComputer) {
//         console.log("You are the winner " +countPlayer + " points");
//     }else if (countPlayer === countComputer) {
//         console.log("It's a tie. Try again.")
//     } 
    
//     else {
//         console.log("Computer wins. " + countComputer + " points");
//     } 

// }


function oneRoundUI(choice) {

    const play = true

    
    let computerChoice = getComputerChoice();
    let playerChoice = choice;

    
    if (playerChoice === "rock" && computerChoice === "scissors") {
        countPlayer++;
        
        resultPara.textContent = "Player wins. Rock beats Scissors." 
        playerPara.textContent = "Player Score: " + countPlayer;
        //winnerPara2.textContent = "Player";
        
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        countPlayer++;
        
        resultPara.textContent = "Player wins. Scissors beats Paper.";
        playerPara.textContent = "Player Score: " + countPlayer;
        //winnerPara2.textContent = "Player";
        
    } else if (playerChoice === "paper" && computerChoice === "rock"  ) {
        countPlayer++;
        
        resultPara.textContent = "Player wins. Paper beats Rock.";
        playerPara.textContent = "Player Score: " + countPlayer;
        //winnerPara2.textContent = "Player";
        
    } else if (playerChoice === computerChoice) {
        
        
        console.log("It\'s a tie!");
        resultPara.textContent = "It\'s a tie!";
        
    } else {
        countComputer++;
        computerPara.textContent = "Computer Score: " + countComputer;
        resultPara.textContent = "Player loose! " + computerChoice + " beats " + playerChoice + "!";
                //winnerPara2.textContent = "Computer";
        
        
        
    }

    if (countPlayer === 5 ) {
        winnerPara2.textContent =" Player";
        return;
    } else if (countComputer === 5) {
        winnerPara2.textContent = " Computer";
        return;
        
    }

}


function reset() {
    countPlayer = 0;
    countComputer = 0;
    playerPara.textContent = "Player Score: " + countPlayer;
    computerPara.textContent = "Computer Score: " + countComputer;
    winnerPara2.textContent = "";

    return countComputer, countPlayer
}


//body style

const bodyStyle = document.querySelector("body");
bodyStyle.style.background = "#FED9ED";
bodyStyle.style.color = "#67729D";



//heading section
const heading = document.createElement("h1");
heading.textContent = "Rock, Paper, Scissors";
heading.style.fontSize = "4rem";
heading.style.textAlign = "center";

//rules section
const rulesDiv = document.createElement("div");
rulesDiv.style.display = "flex";
rulesDiv.style.justifyContent = "center";
rulesDiv.style.width = "70%";
rulesDiv.style.margin = "auto"
const rulesPara = document.createElement("p");
rulesPara.style.fontSize = "1.5rem";
rulesPara.textContent ="Rock beats Scissors, Scissors beat Paper and Paper beats Rock!";

//button section
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.marginTop = "2rem";
buttonContainer.style.marginBottom = "2rem";
buttonContainer.style.justifyContent = "center";


const rockBtn = document.createElement("button");
rockBtn.textContent = "  ROCK  ";
rockBtn.style.padding = "1rem";
rockBtn.style.margin = "0.5rem";
rockBtn.style.background = "#BB9CC0";
rockBtn.style.color = "white";
rockBtn.style.fontWeight = "800";
rockBtn.style.borderRadius = "10px";

rockBtn.addEventListener("mouseover", () => {
    rockBtn.style.background = "white";
    rockBtn.style.color = "#BB9CC0";
});
rockBtn.addEventListener("mouseout", () => {
    rockBtn.style.background = "#BB9CC0";
    rockBtn.style.color = "white";
});


rockBtn.addEventListener("click", () => {oneRoundUI("rock")});

const paperBtn = document.createElement("button");
paperBtn.textContent = "  PAPER ";
paperBtn.style.padding = "1rem";
paperBtn.style.margin = "0.5rem"
paperBtn.style.background = "#BB9CC0";
paperBtn.style.color = "white";
paperBtn.style.fontWeight = "800";
paperBtn.style.borderRadius = "10px";

paperBtn.addEventListener("mouseover", () => {
    paperBtn.style.background = "white";
    paperBtn.style.color = "#BB9CC0";
});
paperBtn.addEventListener("mouseout", () => {
    paperBtn.style.background = "#BB9CC0";
    paperBtn.style.color = "white";
});

paperBtn.addEventListener("click", () => {oneRoundUI("paper")});


const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "SCISSORS";

scissorsBtn.addEventListener("click", () => {oneRoundUI("scissors")});

scissorsBtn.style.padding = "1rem";
scissorsBtn.style.margin = "0.5rem"
scissorsBtn.style.background = "#BB9CC0";
scissorsBtn.style.color = "white";
scissorsBtn.style.fontWeight = "800";
scissorsBtn.style.borderRadius = "10px";

scissorsBtn.addEventListener("mouseover", () => {
    scissorsBtn.style.background = "white";
    scissorsBtn.style.color = "#BB9CC0";
});
scissorsBtn.addEventListener("mouseout", () => {
    scissorsBtn.style.background = "#BB9CC0";
    scissorsBtn.style.color = "white";
});


const replayDiv = document.createElement("div");
replayDiv.style.display = "flex";
replayDiv.style.justifyContent ="center";
const replay = document.createElement("button");
replay.textContent = "Reset";
replay.style.padding = "1rem";
replay.style.borderRadius = "10px";
replay.style.fontWeight = "800";
replay.style.background = "#BB9CC0";
replay.style.color = "white";

replay.addEventListener("mouseover", () => {
    replay.style.background = "white";
    replay.style.color = "#BB9CC0";
});
replay.addEventListener("mouseout", () => {
    replay.style.background = "#BB9CC0";
    replay.style.color = "white";
});

replay.addEventListener("click", () => {reset()});




//score section
const scoreDiv = document.createElement("div");
scoreDiv.style.display = "flex";
scoreDiv.style.justifyContent = "center";
scoreDiv.style.fontSize = "2rem";
const playerPara = document.createElement("p");
const computerPara = document.createElement("p");


playerPara.textContent = "Player Score: " + countPlayer;
playerPara.style.display = "inline-block";
playerPara.style.padding = "1rem";
computerPara.textContent = "Computer Score: " + countComputer;
computerPara.style.display = "inline-block";
computerPara.style.padding = "1rem";


const resultDiv = document.createElement("div");
resultDiv.style.display = "flex";
resultDiv.style.justifyContent = "center";
const resultPara = document.createElement("p");
resultPara.textContent = "";
resultDiv.style.margin = "2rem"


// winner section
const winnerDiv = document.createElement("div");
winnerDiv.style.display = "flex";
winnerDiv.style.flexDirection ="column",
winnerDiv.style.alignItems = "center"

winnerDiv.style.justifyContent = "center";
const winnerPara = document.createElement("p");
const winnerPara2 = document.createElement("p");

winnerPara.textContent = "The Winner is: ";
winnerPara.style.fontSize = "1.5rem";
winnerPara2.textContent = "";
winnerPara2.style.fontSize = "3rem";

// footer section

const footerDiv = document.createElement("div");
const footerPara = document.createElement("p");
const footerPara2 = document.createElement("p");
footerPara.textContent = 'Made with  \u2661     ';
footerDiv.style.display = "flex";
footerDiv.style.justifyContent = "space-between";

footerDiv.style.justifyContent = "center";
footerPara2.textContent = ' \u00A9  Michael Gee 12/23';
footerPara2.style.marginLeft = "2rem";


//append section

document.body.appendChild(heading);
document.body.appendChild(rulesDiv);
rulesDiv.appendChild(rulesPara)
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);

document.body.appendChild(replayDiv);
replayDiv.appendChild(replay);

document.body.appendChild(resultDiv);
resultDiv.appendChild(resultPara);
document.body.appendChild(scoreDiv);
scoreDiv.appendChild(playerPara);
scoreDiv.appendChild(computerPara);


document.body.appendChild(winnerDiv);
winnerDiv.appendChild(winnerPara);
winnerDiv.appendChild(winnerPara2);

document.body.appendChild(footerDiv);
footerDiv.appendChild(footerPara);
footerDiv.appendChild(footerPara2);



