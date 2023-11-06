/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */


function getComputerChoice()  {
  i = Math.floor(Math.random() * 9)
  if (i <= 3) {
    return 'rock'
  } else
    if  (i >= 6)  {
      return 'paper'
    } else return 'scissors'
  }

function  getPlayerSelection() {
  return prompt('rock paper scissors?', 'rock').toLowerCase()
}

let playerScore = 0;
let compScore = 0;

function playRock(playerSelection, computerSelection)  {
  playerSelection = 'rock';
  computerSelection = getComputerChoice();
  if (computerSelection === 'scissors')  {
      return ++playerScore && console.log('win');
    } else if (computerSelection === 'paper')  {
        return ++compScore && console.log('lose');
      } else if   (playerSelection == computerSelection)  {
        return 'tie' && console.log('tie')
      } else return 'invalid input'
}

function playPaper(playerSelection, computerSelection)  {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  if (computerSelection === 'rock')  {
      return ++playerScore && console.log('win');
    } else if (computerSelection === 'scissors')  {
        return ++compScore && console.log('lose');
      } else if   (playerSelection == computerSelection)  {
        return 'tie' && console.log('tie')
      } else return 'invalid input'
}

function playScissors(playerSelection, computerSelection)  {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  if (computerSelection === 'paper')  {
      return ++playerScore && console.log('win');
    } else if (computerSelection === 'rock')  {
        return ++compScore && console.log('lose');
      } else if   (playerSelection == computerSelection)  {
        return 'tie' && console.log('tie')
      } else return 'invalid input'
}

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'rock';
paper.textContent = 'paper';
scissors.textContent = 'scissors';

document.body.append(rock, paper, scissors);
document.body.style.backgroundColor = 'dimgrey';

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);

/*function game()  {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  if (playerScore > compScore)  {
      console.log('you won')
    } else if (compScore > playerScore) {
      console.log('you lose')
    } else if (compScore == playerScore) {
      console.log('you tie')
    }
}
  */


// input on html and playerresult = documentqueryselector instead of prompt??????