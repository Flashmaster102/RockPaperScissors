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