/*
create function called getComputerChoice to return random selection
create function for single round of rps with 2 parameters: playerSelection, computerSelection
and returns statement for lose or win
make playerSelection caseINsensitive
write funciont called game()to run 5 rounds of rps to determine winner */
let playerSelection = prompt("rock, paper, or scissors?")

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

/*if playerSelection === 'rock' & & computerSelection = 'scissors'  {
    return "congrats you won this round!"
} */