/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */

function nll(n)  {
  n = randNum()
  switch(n) {
  case n < 3:
    return 'rock';
    break;
    case n > 6:
      return 'paper';
      break;
    default:
      return 'scissors';
    }
}

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

function playRound(playerSelection, computerSelection)  {
  playerSelection = getPlayerSelection();
  computerSelection = getComputerChoice();
  if (playerSelection === 'rock' && computerSelection === 'scissors' || 
  playerSelection === 'scissors' && computerSelection === 'paper' || 
  playerSelection === 'paper' && computerSelection === 'rock')  {
      return ++playerScore && console.log('win');
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
      playerSelection === 'paper' && computerSelection === 'scissors' || 
      playerSelection === 'scissors' && computerSelection === 'paper')  {
        return ++compScore && console.log('lose');
      } else if   (playerSelection == computerSelection)  {
        return 'tie'
      } else return 'invalid input'
}


function game()  {
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
  


console.log(game())
// input on html and playerresult = documentqueryselector instead of prompt??????