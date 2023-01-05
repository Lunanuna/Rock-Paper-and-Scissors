let rpsOption = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return rpsOption[Math.floor(Math.random()*rpsOption.length)];
}

let playerScore, computerScore;
function playRound(playerSelection, computerSelection) {
    
    if (rpsOption.indexOf(playerSelection) == -1) {
        playerScore = false;
        computerScore = false;
        return "Invalid input! Please try again";
    }

    console.log("You picked: " + playerSelection + "\n", "The computer picked: " + computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = true;
        computerScore = false;
        return "You win! Rock beats Scissors.";
    } else if (playerSelection = "scissors" && computerSelection == "rock") {
        playerScore = false;
        computerScore = true;
        return "You lose! Rock beats Scissors."
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = true;
        computerScore = false;
        return "You win! Scissors beat Paper.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        playerScore = false;
        computerScore = true;
        return "You lose! Scissors beat Paper.";
    } else if (playerSelection = "paper" && computerSelection == "rock") {
        playerScore = true;
        computerScore = false;
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        playerScore = false;
        computerScore = true;
        return "You lose! Paper beats Rock."
    } else {
        playerScore = false;
        computerScore = false;
        return "Draw! you both picked the same";
    }
}

let playerWon = 0, computerWon = 0;
function game(){
    for (i = 0; i<5; i++){
        console.log(playRound(prompt("Pick one of rock, paper and scissors").toLowerCase(), computerPlay()));
        if (playerScore) {
            playerWon++;
        } else if (computerScore) {
            computerWon++;
        }   
    }
    console.log(`You won ${playerWon} rounds, while the computer won ${computerWon}. There were ${5 - playerWon - computerWon} draws.`);

    if (playerWon > computerWon) {
        console.log("You win overall!");
    } else {
        console.log("You lose overall!");
    }
}

game();