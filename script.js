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
  prompt('rock paper scissors?', 'rock')
}

function playRound(playerSelection, computerSelection)  {
  playerSelection = getPlayerSelection();
  computerSelection = getComputerChoice();

  if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'scissors' && computerSelection == 'paper' || 
    playerSelection == 'paper' && computerSelection == 'rock')  {
      return 'win'
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || 
      playerSelection == 'paper' && computerSelection == 'scissors' || 
      playerSelection == 'scissors' && computerSelection == 'paper')  {
        return 'lose'
      } else if   (playerSelection == computerSelection)  {
        return 'tie'
      }
}

console.log(getComputerChoice())
console.log(playRound())
// input on html and playerresult = documentqueryselector instead of prompt??????