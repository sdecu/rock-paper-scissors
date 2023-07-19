/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */
let playerResult = prompt("rock, paper, or scissors?")

let playerSelection = playerResult.toLowerCase()

const choice = ["rock", "paper", "scissors"]

function getComputerChoice(ch)    {
    // get random index value
    const randomIndex = Math.floor(Math.random() * ch.length);

    // get random item
    const item = ch[randomIndex];

    return item;

}

const computerSelection = getComputerChoice(choice)
console.log(computerSelection)

function    playRound(playerSelection, computerSelection)   {
   if (playerSelection === 'rock' && computerSelection === 'scissors' || 
   playerSelection === 'scissors' && computerSelection === 'paper' ||
   playerSelection === 'paper' && computerSelection === 'rock')    {
  return "congrats you won this round!";
   }  else if (playerSelection === 'rock' && computerSelection === 'paper'||
    playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'scissors')   {
    return "you lost good luck next time";
}  else if (playerSelection = computerSelection)  {
    return "tie"
}   else {

    return "invalid input"
}
}

let round = 0

for (let i = 0; i < 9; i++) {
    round = round + i;
  }


console.log(playRound(playerSelection, computerSelection))

// input on html and playerresult = documentqueryselector instead of prompt??????