
// play game function, playRound(humanChoice, compiterChoice), getComputerChoice, getHumanChoice, score variables

// optons == minus
//create scoreHumnan and scoreComputer
function playGame(){
    let scoreHuman = 0;
    let scoreComputer = 0; 
  
    let winner = playRound();
   
    if (winner === "human") {
        scoreHuman++;
    } else if (winner === "computer") {
        scoreComputer++;
    }

    if (scoreComputer === 5 || scoreHuman === 5){
        if (scoreComputer > scoreHuman){
            console.log("Computer wins the game!")
        } else if (scoreHuman > scoreComputer){
            console.log("Human wins the game!")
        } else {
            console.log("It is a tie!")
        }
    }
}


// create getComputerChoice and store it in computerChoice, if 1 = rock, if else 2 = paper, else if 3 = scissors, 
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let computerNumber = Math.floor(Math.random() * 3);
    return choices[computerNumber];
}

// create getHumanChoice and store it in humanChoice, case insensitive and strip the blank, loop intil the user enters a valid input, return user input
function getHumanChoice(){
    let options = document.querySelector(".options");
    let humanChoice;
    options.addEventListener("click", (e) => {
        let targetClass = e.target.classList;
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
    });
    return humanChoice;
}

// create playRound that takes human and computer choices and  compare their options 
function playRound(){
    let computer = getComputerChoice();
    let human = getHumanChoice();
    
    // create a dict name options with option: the option  that defeats that option
    let choiceLosers = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }
    let displayResult = document.querySelector(".round-result");

    // if options[humnaChoice] === computerChoice:
    if (choiceLosers[computer] === human){
         // human wins 
        displayResult.textContent = `You win! ${human} beats ${computer}`;
        return "human";    
    } else if (choiceLosers[human] === computer){   //  else if options[computerChoice] === humanChoice
        //  computer wins 
        displayResult.textContent  = `You lose! ${computer} beats ${human}`;
        return "computer";
    } else {
        displayResult.textContent = "It is a tie!";
        return "tie";
    }    //  else is a tie
}


