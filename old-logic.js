function getComputerChoice() {
    let computerChoice = Math.floor(Math.random(0) * 3);
    let select = "";
  
    switch (computerChoice) {
      case 0:
        select = "Rock";
        break;
      case 1:
        select = "Paper";
        break;
      case 2:
        select = "Scissor";
        break;
      default:
        break;
    }
    return select;
  }
  
  let computerScore = 0;
  let playerScore =  0;
  
  function PlayRound(playerSelection, computerSelection) {
    let result = "";
  
    if (computerSelection === playerSelection) {
      result = "It's a tie";
    } else if (computerSelection === "Rock") {
      if (playerSelection === "Paper") {
        playerScore++;
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === "Scissor") {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
      }
    } else if (computerSelection === "Paper") {
      if (playerSelection === "Scissor") {
        playerScore++;
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === "Rock") {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
      }
    } else if (computerSelection === "Scissor") {
      if (playerSelection === "Rock") {
        playerScore++;
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === "Paper") {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
      }
    } else {
      result = "You have Selected Wrong Thing";
    }
    return result;
  }
  
  function game() {
    for (let i = 0; i < 5; i++) {
      let choice = prompt("What weapon will you Choose? Rock , Paper or Scissor");
      let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
      let computerSelection = getComputerChoice();
      console.log(PlayRound(playerSelection, computerSelection));
      console.log(`Computer Score is ${computerScore}`);
      console.log(`Player Score is ${playerScore}`);
    }
  
    if(computerScore > playerScore) {
      console.log("You Have Lost The Game! Reload the Page to Play Again");
    } else if (playerScore > computerScore) {
      console.log("You Have Won The Game! Reload the Page to Play Again");
    } else {
      console.log("its a tie want to play again ?")
    }
  }
  
  game();