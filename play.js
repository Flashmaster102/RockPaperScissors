let getComputerChoice=()=>
{
    let result=Math.floor(Math.random()*3);
    let choice;
    if(result==0)
      choice="rock";
    else if(result==1)
      choice="paper";
    else if(result==2)
      choice="scissors";
    else
      console.log("Something went wrong!");

    return choice;
}

function playRound(playerSelection,computerSelection)
{
   let message="";
   let playerSelectionLowercase=playerSelection.toLowerCase();

   if((playerSelectionLowercase>computerSelection)&&(playerSelectionLowercase=="scissors"))
   {
      if(computerSelection=="rock") 
         message="You lose. Rock beats Scissors.";
      else 
         message="You win. Scissors beats Paper.";
   }
   else if(playerSelectionLowercase>computerSelection)
      message="You lose. Paper beats Rock.";
   else if((playerSelectionLowercase<computerSelection)&&(playerSelectionLowercase=="paper"))
   {
      if(computerSelection=="rock") 
         message="You win. Paper beats Rock.";
      else
         message="You lose. Scissors beats Paper.";
   }
   else if(playerSelectionLowercase<computerSelection)
       message="You win. Rock beats Scissors.";
   else
       message="It\'s a tie";
   
   return message;
}