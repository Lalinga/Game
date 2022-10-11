//console
//prompt
//the function has to output either rock or paper or scissors. Based on what?

var items = ["rock", "paper", "scissors"];
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];   
}

function rockPaperScissors (player1, player2){
   if (player1 ==="scissors" && player2 === "paper" ) { 
     //timer.
     return "player1 wins!!";
   }
 else if (player1 ==="paper" && player2 === "scissors" ) { 
    //timer
     return "player2 wins!!";
   }
   else if (player1 ==="paper" && player2 === "rock"){
     return "player1 wins!!";
   }
   else if (player1 ==="rock" && player2 === "paper" ) { 
     return "player2 wins!!";
   }
   else if (player1 ==="rock" && player2 === "scissors") {
     return "player1 loses!!"
   }
   else if (player1 ==="scissors" && player2 === "rock" ) { 
     return "player2 wins!!";
   }
   else if (player1 ==="rock" && player2 === "rock"){
     return "Draw!!";
   }
    else if (player1 ==="scissors" && player2 === "scissors"){
     return "Draw!!";
   }
    else if (player1 ==="paper" && player2 === "paper"){
     return "Draw!!";
   }
   else {
     return "Play again!!";
   }
 }
 console.log(rockPaperScissors("rock", "paper"))
