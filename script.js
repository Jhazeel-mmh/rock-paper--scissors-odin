
// play game function, playRound(humanChoice, compiterChoice), getComputerChoice, getHumanChoice, score variables

// optons == minus
//create scoreHumnan and scoreComputer
function playGame(){
    let scoreHuman = 0;
    let scoreComputer = 0; 
  
// for loop to repeat the game for 5 rounds
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let winner = playRound(computerChoice, humanChoice);

        // if winner equal t
        if (winner === "human") {
            scoreHuman++;
        } else if (winner === "computer") {
            scoreComputer++;
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
    let humanChoice;
    let isCorrect = false;
    while (!(isCorrect)){
        humanChoice = prompt("What´s your option?");
        humanChoice = humanChoice.toLowerCase()
        humanChoice = humanChoice.trim()
        switch (humanChoice){
            case "rock":
                isCorrect = true;
                break;
            case "paper":
                isCorrect = true;
                break
            case "scissors":
                isCorrect = true;
                break;
            default:
                isCorrect = false;
        }
    }
    return humanChoice;
}

// create playRound that takes human and computer choices and  compare their options 
function playRound(computer, human){
    // create a dict name options with option: the option  that defeats that option
    let choiceLosers = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }
    // if options[humnaChoice] === computerChoice:
    if (choiceLosers[computer] === human){
         // human wins 
        console.log(`You win! ${human} beats ${computer}`)
        return "human";    
    } else if (choiceLosers[human] === computer){   //  else if options[computerChoice] === humanChoice
        //  computer wins 
        console.log(`You lose! ${computer} beats ${human}`)
        return "computer";
    } else {
        console.log("It is a tie!")
        return "tie";
    }    //  else is a tie
}


