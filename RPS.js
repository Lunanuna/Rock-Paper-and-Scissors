//change background color when mouse moves around selection part
var selection = document.getElementById('selection');
selection.addEventListener('mousemove', changeColor);

function changeColor(e){
    selection.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

// buttons

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');
const liveScore = document.querySelector('.live-score');
const finalResult = document.querySelector('.final-result');

let rpsOption = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return rpsOption[Math.floor(Math.random()*rpsOption.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        // playerScore = true;
        // computerScore = false;
        playerScore++;

        const p = document.createElement('p');
        p.innerText = "You win! Rock beats Scissors.";
        result.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        // playerScore = false;
        // computerScore = true;
        computerScore++;

        const p = document.createElement('p');
        p.innerText = "You lose! Rock beats Scissors.";
        result.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        // playerScore = true;
        // computerScore = false;
        playerScore++;

        const p = document.createElement('p');
        p.innerText = "You win! Scissors beat Paper.";
        result.appendChild(p);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        // playerScore = false;
        // computerScore = true;
        computerScore++;

        const p = document.createElement('p');
        p.innerText = "You lose! Scissors beat Paper.";
        result.appendChild(p);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        // playerScore = true;
        // computerScore = false;
        playerScore++;

        const p = document.createElement('p');
        p.innerText = "You win! Paper beats Rock.";
        result.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        // playerScore = false;
        // computerScore = true;
        computerScore++;

        const p = document.createElement('p');
        p.innerText = "You lose! Paper beats Rock.";
        result.appendChild(p);
    } else {
        // playerScore = false;
        // computerScore = false;

        const p = document.createElement('p');
        p.innerText = "Draw! you both picked the same.";
        result.appendChild(p);
    }

};

//count score in real time 
function update (playerScore, computerScore){
    liveScore.className = "live-score"
    liveScore.innerText = `Your Score: ${playerScore} VS PC Score: ${computerScore}`;
}


//buttons to play 
rockBtn.addEventListener('click', rock);

function rock(e){
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    game(playerScore, computerScore);
    update(playerScore, computerScore)

    if (playerScore == 5 || computerScore == 5){
        rockBtn.removeEventListener('click', rock)
    }
};

paperBtn.addEventListener('click', paper);

function paper(e){
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    game(playerScore, computerScore);
    update(playerScore, computerScore)

    if (playerScore == 5 || computerScore == 5){
        paperBtn.removeEventListener('click', paper)
    }
};

scissorsBtn.addEventListener('click', scissors)
function scissors(e){
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    game(playerScore, computerScore);
    update(playerScore, computerScore)

    if (playerScore == 5 || computerScore == 5){
        scissorsBtn.removeEventListener('click', scissors)
    }
};

function game(playerScore, computerScore){

    if (playerScore === 5){
        
        const span = document.createElement('span');
        span.className = "final-result"
        span.style.color = "red";
        span.innerText = `You! You've got ${playerScore} points while computer's only got ${computerScore} points.`
        finalResult.appendChild(span);
    }else if (computerScore === 5){
        
        const span = document.createElement('span');
        span.className = "final-result"
        span.style.color = "blue";
        span.innerText = `Computer! You've got only ${playerScore} points while computer's got ${computerScore} points.`
        finalResult.appendChild(span);
    }    

    if (playerScore === 5 || computerScore == 5){

        const p = document.createElement('p');
        p.className = "final-result"
        p.innerText = `\n Do you want to play again? Click the button below.`
        finalResult.appendChild(p);
        //create button to restart
        const btn = document.createElement('button');
        btn.innerText = "Click me to restart!!";
        btn.style.fontSize = "35px";
        finalResult.appendChild(btn);
        
        function restart(){
            window.location.reload();
        }

        btn.addEventListener("click", restart);

        // stop the game, unable to click anymore 
    }
};




// let playerWon = 0, computerWon = 0;
// function game(){
//     // for (i = 0; i<5; i++){
//     //     console.log(playRound(prompt("Pick one of rock, paper and scissors").toLowerCase(), computerPlay()));
//     //     if (playerScore) {
//     //         playerWon++;
//     //     } else if (computerScore) {
//     //         computerWon++;
//     //     }   
//     // }
//     console.log(`You won ${playerWon} rounds, while the computer won ${computerWon}. There were ${5 - playerWon - computerWon} draws.`);

//     if (playerWon > computerWon) {
//         console.log("You win overall!");
//     } else {
//         console.log("You lose overall!");
//     }
// }

// game();