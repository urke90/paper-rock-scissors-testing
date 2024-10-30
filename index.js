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
  const userInput = prompt(
    'Choose between paper, rock and scissors'
  ).toLowerCase();

  console.log('userInput', userInput);

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('You Lost, Scissors beats Paper');
      computerChoice++;
    } else if (computerChoice === 'paper') {
      console.log('Tied');
    } else {
      console.log('You won, Paper beats Rock');
      humanChoice++;
    }
  }

  if (humanChoice === 'rock') {
    if (computerChoice === 'scissors') {
      console.log('You won, Rock beats Scissors');
      humanChoice++;
    } else if (computerChoice === 'paper') {
      console.log('You lost, Paper beats Rock');
      computerChoice++;
    } else {
      console.log('Tied');
    }
  }

  if (humanChoice === 'scissors') {
    if (computerChoice === 'scissors') {
      console.log('Tied');
    } else if (computerChoice === 'paper') {
      console.log('You won, Scissors beats Paper');
      humanChoice++;
    } else {
      console.log('You lost, Rock beats Scissors');
      computerScore++;
    }
  }
}

console.log({ humanScore });
console.log({ computerChoice });
