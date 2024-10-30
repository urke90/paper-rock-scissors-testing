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

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log('You Lost, Scissors beats Paper');
        computerScore++;
      } else if (computerChoice === 'paper') {
        console.log('Tied');
      } else {
        console.log('You won, Paper beats Rock');
        humanScore++;
      }
    }

    if (humanChoice === 'rock') {
      if (computerChoice === 'scissors') {
        console.log('You won, Rock beats Scissors');
        humanScore++;
      } else if (computerChoice === 'paper') {
        console.log('You lost, Paper beats Rock');
        computerScore++;
      } else {
        console.log('Tied');
      }
    }

    if (humanChoice === 'scissors') {
      if (computerChoice === 'scissors') {
        console.log('Tied');
      } else if (computerChoice === 'paper') {
        console.log('You won, Scissors beats Paper');
        humanScore++;
      } else {
        console.log('You lost, Rock beats Scissors');
        computerScore++;
      }
    }
  }

  for (let i = 0; i < roundsToPlay; i++) {
    playRound();

    if (i === roundsToPlay - 1) {
      if (computerScore > humanScore) {
        console.log(`Computer has won ${computerScore}:${humanScore}`);
      } else if (computerScore === humanScore) {
        console.log(`Game is tied: ${computerScore}:${humanScore}`);
      } else {
        console.log(`You have won ${humanScore}:${computerScore}`);
      }
    }
  }
}

playGame();
