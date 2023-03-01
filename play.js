let getComputerChoice=()=> Math.floor(Math.random()*3);

function playRound(playerSelection,computerSelection)
{
   let message="";

   console.log("You chose: "+playerSelection+" and computer chose "+computerSelection);
   if((playerSelection>computerSelection)&&(playerSelection=="scissors"))
   {
      if(computerSelection=="rock") 
         message="You lose. Rock beats Scissors.";
      else 
         message="You win. Scissors beats Paper.";
   }
   else if(playerSelection>computerSelection)
      message="You lose. Paper beats Rock.";
   else if((playerSelection<computerSelection)&&(playerSelection=="paper"))
   {
      if(computerSelection=="rock") 
         message="You win. Paper beats Rock.";
      else
         message="You lose. Scissors beats Paper.";
   }
   else if(playerSelection<computerSelection)
       message="You win. Rock beats Scissors.";
   else
       message="It\'s a tie";
   
   return message;
}

function game(playerChoice)
{
   let result;
   let conditions;
   const randomComputerChoice=["rock","paper","scissors"];
   
   result=playRound(playerChoice,randomComputerChoice[getComputerChoice()]);
   console.log(result);
   if(result.charAt(4)=="w")
     playerWins++;
   else if(result.charAt(4)=="l")
     computerWins++;
   else
     console.log("No one wins!");
   
   document.querySelector(".score").textContent="Computer: "+computerWins+"You: "+playerWins+"\n"+result;
   
   if(playerWins==5||computerWins==5)
   {
	 if(playerWins>computerWins)
      document.querySelector(".score").textContent="Computer: "+computerWins+
                                                       "You: "+playerWins+" You are the winner!";
     else if(playerWins<computerWins)
      document.querySelector(".score").textContent="Computer: "+computerWins+
                                                       "You: "+playerWins+" You lost! Computer is the winner!";
     else
      console.log("No one wins It\'s a tie! Results: You "+playerWins+" computer "+computerWins);
     playerWins=0;
	 computerWins=0;
   }
   else
	 console.log("Something is wrong!");
}

let playerWins=0,computerWins=0;
console.log("-----Welcome to the rock paper scissors game!------");

document.querySelector(".rock").addEventListener("click", function() { game("rock");});
document.querySelector(".paper").addEventListener("click", function() { game("paper");});
document.querySelector(".scissors").addEventListener("click", function() { game("scissors");});


