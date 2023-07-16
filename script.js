/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */
const playerResult = prompt("rock, paper, or scissors?")

const playerSelection = playerResult.toLowerCase()

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
   if (playerSelection === 'rock' && computerSelection === 'scissors')  {
  return "congrats you won this round!";
}  else if (playerSelection === 'scissors' && computerSelection === 'paper')  {
    return "congrats you won this round!";
}  else if (playerSelection === 'paper' && computerSelection === 'rock')  {
    return "congrats you won this round!";
}  else if (playerSelection === 'rock' && computerSelection === 'paper')  {
    return "you lost good luck next time";
}  else if (playerSelection === 'scissors' && computerSelection === 'rock')  {
    return "you lost good luck next time";
}  else if (playerSelection === 'paper' && computerSelection === 'scissors')  {
    return "you lost good luck next time";
}  else if (playerSelection = computerSelection)  {
    return "tie"
}
else {
    return "invalid input"
}
}

console.log(playRound(playerSelection, computerSelection))