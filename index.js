const computerDisplayedScore = document.querySelector('#computer-score');
const playerDisplayedScore = document.querySelector('#player-score');
const roundWinnerDisplay = document.querySelector('#round-winner');
const gameWinnerDisplay = document.querySelector('#game-winner');

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'paper';
  } else if (choice === 1) {
    return 'rock';
  } else {
    return 'scissors';
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  document
    .querySelector('#choice-selection-container')
    .addEventListener('click', playRound);

  function playRound(e) {
    const humanChoice = e.target.dataset.value;
    const computerChoice = getComputerChoice();

    if (humanScore === 5 || computerScore === 5) {
      if (computerScore === 5) {
        gameWinnerDisplay.textContent = `Computer has won ${computerScore}:${humanScore}`;
      } else {
        gameWinnerDisplay.textContent = `You have won ${humanScore}:${computerScore}`;
      }
      return;
    }

    if (humanChoice === 'paper') {
      if (computerChoice === 'scissors') {
        computerScore++;
        computerDisplayedScore.textContent = computerScore;
        roundWinnerDisplay.textContent = 'You Lost, Scissors beats Paper';
      } else if (computerChoice === 'paper') {
        roundWinnerDisplay.textContent = 'Tied';
      } else {
        humanScore++;
        playerDisplayedScore.textContent = humanScore;
        roundWinnerDisplay.textContent = 'You won, Paper, beats Rock';
      }
    }

    if (humanChoice === 'rock') {
      if (computerChoice === 'scissors') {
        humanScore++;
        playerDisplayedScore.textContent = humanScore;
      } else if (computerChoice === 'paper') {
        computerScore++;
        computerDisplayedScore.textContent = computerScore;
        roundWinnerDisplay.textContent = 'You lost, Paper beats Rock';
      } else {
        roundWinnerDisplay.textContent = 'Tied';
      }
    }

    if (humanChoice === 'scissors') {
      if (computerChoice === 'scissors') {
        roundWinnerDisplay.textContent = 'Tied';
      } else if (computerChoice === 'paper') {
        console.log();
        humanScore++;
        playerDisplayedScore.textContent = humanScore;
        roundWinnerDisplay.textContent = 'You won, Scissors beats Paper';
      } else {
        computerScore++;
        computerDisplayedScore.textContent = computerScore;
        roundWinnerDisplay.textContent = 'You lost, Rock beats Scissors';
      }
    }
  }
}

playGame();
