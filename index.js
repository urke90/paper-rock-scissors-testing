let humanScore = 0;
let computerScore = 0;

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

  return userInput;
}

getHumanChoice();
