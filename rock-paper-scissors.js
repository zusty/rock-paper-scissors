
function computerPlay() { 

    let computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection == 0) {
        return "Rock"; 
    }

    else if (computerSelection == 1)  {
        return "Paper"; 
    }

    else if (computerSelection == 2) { 
        return "Scissors"
    }

}

function gameRound (playerChoice, computerChoice){ 
    computerChoice = computerPlay(); 
    
    if (playerChoice == "rock" && computerChoice == "Paper") { 
        return "Paper covers Rock! You lose!"
    }
    
    else if (playerChoice == "rock" && computerChoice == "Scissors") { 
        return "Rock smashes Scissors! You win!"
    }

    else if (playerChoice == "paper" && computerChoice == "Rock") { 
        return "Paper cover Rock! You win!"
    }

    else if (playerChoice == "paper" && computerChoice == "Scissors") { 
        return "Scissors cuts Paper! You lose!"
    }
    else if (playerChoice == "scissors" && computerChoice == "Paper") { 
        return "Scissors cuts Paper! You win!"
    }

    else if (playerChoice == "scissors" && computerChoice == 
    "Rock") { 
        return "Rock smashes Scissors! You win!"
    }
    else { 
        return "It's a tie!"
    }
}

function game() { 
    let choice;
    for (let i = 0; i < 5; i++){ 
    choice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase(); 
    console.log(gameRound(choice, computerPlay()));
    }
}

game(); 
//const choice = "rock"

//console.log(gameRound(choice, computerPlay())); 

