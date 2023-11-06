const startButton = document.querySelector('#startgamebtn');
const restartButton = document.querySelector('#restartgamebtn');
const gameContainer = document.querySelector('#gamecontainer');

// adding event listner for the start button
startButton.addEventListener ('click', () => {
  const startPageContainer = document.querySelector('#startcontainer');

  startPageContainer.setAttribute('style', 'display:none;');
  gameContainer.setAttribute('style', 'display: block;');
})

restartButton.addEventListener ('click', () => {
  const restartButton = document.querySelector('#endcontainer');

  restartButton.setAttribute('style', 'display:none;');
  gameContainer.setAttribute('style', 'display: block;');
})

// Global Scope Variable
let computerScore = 0;
let playerScore = 0;

function getPlayerChoice () {
  let playerRock = document.querySelector('#playerrock');
  let playerPaper = document.querySelector('#playerpaper');
  let playerScissor = document.querySelector('#playerscissor');
  let playerChoice = '';
  playerRock.addEventListener('click', () => {
    playerChoice = "Rock";

    // Setting Style for Selected Element
    playerRock.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    // Removing Style for not Selected Element
    playerPaper.setAttribute('style', 'background-color: aliceblue;');
    playerScissor.setAttribute('style', 'background-color: aliceblue;');
  });
  playerPaper.addEventListener('click', () => {
    playerChoice = "Paper";

    playerPaper.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    playerRock.setAttribute('style', 'background-color: aliceblue;');
    playerScissor.setAttribute('style', 'background-color: aliceblue;');
  });
  playerScissor.addEventListener('click', () => {
    playerChoice = "Scissor";

    playerScissor.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    playerPaper.setAttribute('style', 'background-color: aliceblue;');
    playerRock.setAttribute('style', 'background-color: aliceblue;');
  });
  return playerChoice;
}

function getComputerChoice () {
  let computerChoice = Math.floor(Math.random(0) * 3);
  let select = '';

  switch (computerChoice) {
    case 0 :
      select = "Rock";
      break;
    case 1 :
      select = "Paper";
      break;
    case 2 :
      select = "Scissor";
      break;
    default :
      break;
  }
  return select;
}

function styleElement () {
  const computerRock = document.querySelector('#computerrock');
  const computerPaper = document.querySelector('#computerpaper');
  const computerScissor = document.querySelector('#computerscissor');
  let randomchoice = getComputerChoice();

  if(randomchoice === "Rock") {
    computerRock.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    computerPaper.setAttribute('style', 'background-color: aliceblue;');
    computerScissor.setAttribute('style', 'background-color: aliceblue;');
  }
  if (randomchoice === "Paper") {
    computerPaper.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    computerRock.setAttribute('style', 'background-color: aliceblue;');
    computerScissor.setAttribute('style', 'background-color: aliceblue;');
  }
  if (randomchoice === "Scissor") {
    computerScissor.setAttribute('style', 'background-color: rgb(15, 200, 200); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    computerPaper.setAttribute('style', 'background-color: aliceblue;');
    computerRock.setAttribute('style', 'background-color: aliceblue;');
  }
  return randomchoice;
}

function playRound(playerSelection) {
  const roundDeclaration = document.querySelector('#rounddeclaration');
  let computerSelection = styleElement();

  if (playerSelection === computerSelection) {
    roundDeclaration.textContent = "It's a Tie";
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    playerScore++;
    roundDeclaration.textContent = "You Win! Rock Crushes Scissor";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    roundDeclaration.textContent = "You Win! Paper Wraps Rock";
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    playerScore++;
    roundDeclaration.textContent = "You Win! Scissor Cuts Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    roundDeclaration.textContent = "You Lose! Paper Wraps Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    computerScore++;
    roundDeclaration.textContent = "You Lose! Scissor Cuts Paper";
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    computerScore++;
    roundDeclaration.textContent = "You Lose! Rock Crushes Scissor";
  }
}

let playerSelection = getPlayerChoice();
playRound(playerSelection);