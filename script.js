
// play game function, playRound(humanChoice, compiterChoice), getComputerChoice, getHumanChoice, score variables

// optons == minus
//create scoreHumnan and scoreComputer


let scoreHuman = 0;
let scoreComputer = 0; 

let backgroundColorBody = document.querySelector("body");
let winColor = "#35c035";
let loseColor ="#db2d2d";

let displayResult = document.querySelector(".round-result");
let gameResult = document.querySelector(".game-result")
let options = document.querySelector(".options") 
   
let displayScoreHuman = document.querySelector(".score-human");
let displayScoreComputer = document.querySelector(".score-computer");


let winner = options.addEventListener("click", (event) => {
    gameResult.textContent = "";
    let winner = playRound(event);

    if (winner === "human") {
        scoreHuman++;
    } else if (winner === "computer") {
        scoreComputer++;
    }

    displayScoreComputer.textContent = `Computer: ${scoreComputer}`;
    displayScoreHuman.textContent = `Human: ${scoreHuman}`;

    if (scoreComputer === 5 || scoreHuman === 5){
        if (scoreComputer > scoreHuman){
            gameResult.textContent = "Computer wins the game!";
            backgroundColorBody.style.backgroundColor = loseColor;
        } else if (scoreHuman > scoreComputer){
            gameResult.textContent = "Human wins the game!";
            backgroundColorBody.style.backgroundColor = winColor;
        } else {
            gameResult.textContent = "It is a tie!";
            backgroundColorBody.style.backgroundColor = "";
        }
        scoreComputer = 0;
        scoreHuman = 0;
    }
});




// create getComputerChoice and store it in computerChoice, if 1 = rock, if else 2 = paper, else if 3 = scissors, 
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let computerNumber = Math.floor(Math.random() * 3);
    return choices[computerNumber];
}

// create getHumanChoice and store it in humanChoice, case insensitive and strip the blank, loop intil the user enters a valid input, return user input
function getHumanChoice(evento){
    let humanChoice;
    let targetClass = evento.target.className;
    switch (targetClass){
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        default:
            humanChoice = "rock";
            break;
    }
    return humanChoice;
}

// create playRound that takes human and computer choices and  compare their options 
function playRound(e){
    let computer = getComputerChoice();
    let human = getHumanChoice(e);
    
    // create a dict name options with option: the option  that defeats that option
    let choiceLosers = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }


    // if options[humnaChoice] === computerChoice:
    if (choiceLosers[computer] === human){
         // human wins 
        displayResult.textContent = `You win! ${human} beats ${computer}`;
        displayResult.style.backgroundColor = winColor;
        return "human";    
    } else if (choiceLosers[human] === computer){   //  else if options[computerChoice] === humanChoice
        //  computer wins 
        displayResult.textContent  = `You lose! ${computer} beats ${human}`;
        displayResult.style.backgroundColor = loseColor;
        return "computer";
    } else {
        displayResult.textContent = "It is a tie!";
        displayResult.style.backgroundColor = "";
        return "tie";
    }    //  else is a tie
}


