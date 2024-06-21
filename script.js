
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
        playRound(computerChoice, humanChoice);
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
// create a dict name options with option: the option  that defeats that option
// if options[humnaChoice] === computerChoice:
        // computer wins and add the score
//  else if options[computerChoice] === humanChoice
//         human wins and add the score
//  else is a tie

