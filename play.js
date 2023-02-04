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

function game()
{
   let playerWins=0,computerWins=0,result;
   let playerChoice,conditions;
   
   for(let i=0;i<5;i++)
   {
       do
       {
         playerChoice=prompt("Please enter rock paper or scissors!");
         playerChoice=playerChoice.toLowerCase();
         conditions=(playerChoice!="rock")||(playerChoice!="scissors")||(playerChoice!="paper");
         if(conditions)
           console.log("Please enter a valid choice!");
       }while(conditions);
       result=playRound(playerChoice,getComputerChoice());
       if(result.charAt(4)=="w")
          playerWins++;
       else
          computerWins++;
   }
   if(playerWins>computerWins)
     console.log("You are the winner! Results: You "+playerWins+" computer "+computerWins);
   else
     console.log("You lost! Computer is the winner! Results: You "+playerWins+" computer "+computerWins);
}

console.log("-----Welcome to the rock paper scissors game!------");
game();