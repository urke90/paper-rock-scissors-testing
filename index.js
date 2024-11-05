const computerDisplayedScore = document.querySelector('#computer-score');
const playerDisplayedScore = document.querySelector('#player-score');
const roundWinnerDisplay = document.querySelector('#round-winner');

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

function getHumanChoice() {
  const userInput = prompt('Choose between paper, rock and scissors');

  if (
    userInput !== 'paper' &&
    userInput !== 'rock' &&
    userInput !== 'scissors'
  ) {
    alert('Invalid input');
    getHumanChoice();
  }

  return userInput.toLowerCase();
}

function playGame() {
  const roundsToPlay = 5;

  let humanScore = 0;
  let computerScore = 0;

  document
    .querySelector('#choice-selection-container')
    .addEventListener('click', playRound);

  function playRound(e) {
    console.log('e', e);

    const humanChoice = e.target.dataset.value;
    const computerChoice = getComputerChoice();

    if (humanChoice === 'paper') {
      if (computerChoice === 'scissors') {
        computerScore++;
        computerDisplayedScore.textContent = computerScore;
        roundWinnerDisplay.textContent = 'You Lost, Scissors beats Paper';
      } else if (computerChoice === 'paper') {
        roundWinnerDisplay.textContent = 'Tied';
      } else {
        // console.log('You won, Paper beats Rock');
        humanScore++;
        playerDisplayedScore.textContent = humanScore;
        roundWinnerDisplay.textContent = 'You won, Paper, beats Rock';
      }
    }

    if (humanChoice === 'rock') {
      if (computerChoice === 'scissors') {
        // console.log('You won, Rock beats Scissors');
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

  // for (let i = 0; i < roundsToPlay; i++) {
  //   playRound();

  //   if (i === roundsToPlay - 1) {
  //     if (computerScore > humanScore) {
  //       console.log(`Computer has won ${computerScore}:${humanScore}`);
  //     } else if (computerScore === humanScore) {
  //       console.log(`Game is tied: ${computerScore}:${humanScore}`);
  //     } else {
  //       console.log(`You have won ${humanScore}:${computerScore}`);
  //     }
  //   }
  // }
}

playGame();
