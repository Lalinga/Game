//console
//prompt
//the function has to output either rock or paper or scissors. Based on what?

/*var items = ["rock", "paper", "scissors"];
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];   
}*/


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

 let items =  ["rock", "paper", "scissors"];
 let random = items [Math.floor(Math.random() * items.length)]
console.log(random)
 
function playerRound (playerSelection, computerSelection){
  if (playerSelection ==="scissors" && computerSelection === "paper" ) { 
    return "You win!!";
  }
else if (playerSelection ==="paper" && computerSelection === "scissors" ) { 
    return "You lose!!";
  }
  else if (playerSelection ==="paper" && computerSelection === "rock"){
    return "You win!!";
  }
  else if (playerSelection ==="rock" && computerSelection === "paper" ) { 
    return "You lose!!";
  }
  else if (playerSelection ==="rock" && computerSelection === "scissors") {
    return "you win!!"
  }
  else if (playerSelection ==="scissors" && computerSelection === "rock" ) { 
    return "You lose!!";
  }
  else if (playerSelection ==="rock" && computerSelection === "rock"){
    return "Draw!!";
  }
   else if (playerSelection ==="scissors" && computerSelection === "scissors"){
    return "Draw!!";
  }
   else if (playerSelection ==="paper" && computerSelection === "paper"){
    return "Draw!!";
  }
  else {
    return "Play again!!";
  }
}
let playerSelection = "paper";
const computerSelection = random;
console.log(playerRound(playerSelection, computerSelection))

function game(){
 
  for(let i = 5; i > playerRound; i++){
    return i;
  }
}
console.log(playerRound)

