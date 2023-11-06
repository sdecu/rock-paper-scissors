/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */


function getComputerChoice()  {
  i = Math.floor(Math.random() * 3)
  if (i = 0) {
    return 'rock'
  } else
    if  (i = 1)  {
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
if (playerScore == 10)  {
    winner.innerText = 'You Win!'
  } else if (compScore == 10) {
    winner.innerText = 'You Lose!'
  } else if (computerSelection === 'scissors')  {
      ++playerScore;
    } else if (computerSelection === 'paper')  {
         ++compScore;
      } else if   (playerSelection == computerSelection)  {
        console.log('tie')
      }
  
  player.textContent = `${playerScore}`;
  cpu.textContent = `${compScore}`;
}

function playPaper(playerSelection, computerSelection)  {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  if (playerScore == 10)  {
      winner.innerText = 'You Win!'
    } else if (compScore == 10) {
      winner.innerText = 'You Lose!'
    } else if (computerSelection === 'rock')  {
      ++playerScore;
    } else if (computerSelection === 'scissors')  {
        ++compScore 
      } else if   (playerSelection == computerSelection)  {
        console.log('tie')
      }
  
  player.textContent = `${playerScore}`;
  cpu.textContent = `${compScore}`;
}

function playScissors(playerSelection, computerSelection)  {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  if (playerScore == 10)  {
    winner.innerText = 'You Win!'
  } else if (compScore == 10) {
    winner.innerText = 'You Lose!'
  }else if (computerSelection === 'paper')  {
      ++playerScore;
    } else if (computerSelection === 'rock')  {
        return ++compScore;
      } else if   (playerSelection == computerSelection)  {
        console.log('tie')
      }
  player.textContent = `${playerScore}`;
  cpu.textContent = `${compScore}`;
}

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const div = document.querySelector('div');
const winner = document.createElement('h1');
const player = document.querySelector('#player');
const cpu = document.querySelector('#cpu');

rock.textContent = 'rock';
paper.textContent = 'paper';
scissors.textContent = 'scissors';
player.textContent = `${playerScore}`;
cpu.textContent = `${compScore}`;

document.body.prepend(rock, paper, scissors);
div.append(winner);
document.body.style.backgroundColor = 'dimgrey';
document.body.style.color = 'white'

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
console.log(getComputerChoice())

// input on html and playerresult = documentqueryselector instead of prompt??????