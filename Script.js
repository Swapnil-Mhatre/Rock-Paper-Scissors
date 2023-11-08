const startButton = document.querySelector('#startgamebtn');
const restartButton = document.querySelector('#restartgamebtn');
const gameContainer = document.querySelector('#gamecontainer');
const startPageContainer = document.querySelector('#startcontainer');
const restartPageContainer = document.querySelector('#endcontainer');
const gameDeclaration = document.querySelector('#gamedeclaration');

// adding event listner for the start button
startButton.addEventListener ('click', () => {
  startPageContainer.setAttribute('style', 'display:none;');
  gameContainer.setAttribute('style', 'display: block;');
})

restartButton.addEventListener ('click', () => {
  restartPageContainer.setAttribute('style', 'display:none;');
  gameContainer.setAttribute('style', 'display: block;');
})

// Global Scope Variable
let computerScore = 0;
let playerScore = 0;

function getPlayerChoice () {
  let playerRock = document.querySelector('#playerrock');
  let playerPaper = document.querySelector('#playerpaper');
  let playerScissor = document.querySelector('#playerscissor');
  let playerSelection = "";

  playerRock.addEventListener('click', () => {
    playerSelection = "Rock";

    // Setting Style for Selected Element
    playerRock.setAttribute('style', 'background-color: rgb(20, 175, 175); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    // Removing Style for not Selected Element
    playerPaper.setAttribute('style', 'background-color: aliceblue;');
    playerScissor.setAttribute('style', 'background-color: aliceblue;');
    playRound(playerSelection);
  });
  playerPaper.addEventListener('click', () => {
    playerSelection = "Paper";

    playerPaper.setAttribute('style', 'background-color: rgb(20, 175, 175); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    playerRock.setAttribute('style', 'background-color: aliceblue;');
    playerScissor.setAttribute('style', 'background-color: aliceblue;');
    playRound(playerSelection);
  });
  playerScissor.addEventListener('click', () => {
    playerSelection = "Scissor";

    playerScissor.setAttribute('style', 'background-color: rgb(20, 175, 175); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    playerPaper.setAttribute('style', 'background-color: aliceblue;');
    playerRock.setAttribute('style', 'background-color: aliceblue;');
    playRound(playerSelection);
  });
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
    computerRock.setAttribute('style', 'background-color: rgb(167, 20, 20); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    computerPaper.setAttribute('style', 'background-color: aliceblue;');
    computerScissor.setAttribute('style', 'background-color: aliceblue;');
  }
  if (randomchoice === "Paper") {
    computerPaper.setAttribute('style', 'background-color: rgb(167, 20, 20); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
    computerRock.setAttribute('style', 'background-color: aliceblue;');
    computerScissor.setAttribute('style', 'background-color: aliceblue;');
  }
  if (randomchoice === "Scissor") {
    computerScissor.setAttribute('style', 'background-color: rgb(167, 20, 20); transform: translate(2px, 26px); box-shadow: 3px 3px black;');
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
  updateScore(computerScore, playerScore);
  gameOver();
}

function updateScore(computerScore, playerScore) {
  const playerNewScore = document.querySelector('#playerscore');
  const computerNewScore = document.querySelector('#computerscore');
  
  playerNewScore.textContent = `Player : ${playerScore}`;
  computerNewScore.textContent = `Computer : ${computerScore}`;
}

function restart () {
  playerScore = 0;
  computerScore = 0;
  updateScore(computerScore, playerScore);

  const elements = document.querySelectorAll('.item');
  for (element of elements) {
    element.setAttribute('style', 'background-color: aliceblue;')
  }
}

function gameOver () {
  if (playerScore === 5) {
    restartPageContainer.setAttribute('style', 'display:flex');
    gameContainer.setAttribute('style', 'display:none;');

    gameDeclaration.classList.add("declarationmessage");
    gameDeclaration.textContent = "You Have Won The Game!!!";
    restart();
  } 
  if (computerScore === 5) {
    restartPageContainer.setAttribute('style', 'display:flex');
    gameContainer.setAttribute('style', 'display:none;');
    gameDeclaration.classList.add("declarationmessage");
    gameDeclaration.textContent = "You Have lost The Game...";
    restart();
  }
}

getPlayerChoice();