# Rock-Paper-Scissors
welcome  to **rock  paper scissors** game using HTML,CSS and  JavaScript .This guide  will all necessary  code and explanations.

1. HTML(index.html)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissros Game</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
   <h1>Rock Paper Scissors</h1>
     <div class="choices">
        <div class="choice" id="rock">
           <img src ="./img-rock.jfif"/>
        </div>
        <div class="choice" id="paper">
           <img src ="./img-paper.jfif"/>
        </div>
        <div class="choice" id="scissors">
           <img src ="./img-scissors.jfif"/>
        </div>
     </div>

     <div class="score-board">
        <div class="score">
           <P id="user-Score">0</P>
           <p>You</p>
        </div>
        <div class="score">
            <P id="comp-Score">0</P>
            <p>Comp</p>
        </div>
     </div>
     <div class="msg-container">
          <p id="msg">Play your move</p>
     </div>
     <script src="app.js"></script>
</body>
</html>

2.CSS(style.css)

*{
    margin:0;
    padding:0;
    text-align: center;
}

h1{
    background-color: #081b31;
    color:#fff;
    height:4rem;
    line-height:4rem;
}

.choice{
    height:165px;
    width:165px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.choice:hover{
    
    cursor: pointer;
    background-color: #081b31;
}

img{
    height:150px;
    width:150px;
    object-fit:cover;
    border-radius:50%;
}

.choices{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
    margin-top:5rem;
}

.score-board{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-top:3rem;
    gap:5rem;
}

#user-score,#comp-score{
    font-size: 4rem;
}

.msg-container{
    margin-top: 5rem;
}

#msg{ 
    background-color:#081b31;
    color: #fff;
    font-size:2rem;
    display:inline;
    padding: 1rem;
    border-radius: 1rem;
}
3.JavaScript(app.js)

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-Score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.")
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you Win!")
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.")
        msg.innerText = `You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissors
            userWin =  compChoice === "paper"? false : true;
        } else if (userChoice === "paper") {
            //scissors,rock
            userWin = compChoice === "scissors"? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "rock"? false : true;
        }  
        showWinner(userWin,userChoice,compChoice); 
    };
};  


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);  
    });
});

Content Writing
Welcome to the classic game of Rock-Paper-Scissors! This simple yet addictive game is easy to play and brings hours of fun. Here’s how it works:

How to Play
.you will choose one of three options: Rock, Paper, or Scissors.
.The computer will also make a random choice.
.The winner is determined by the following rules:
    .Rock crushes Scissors.
    .Scissors cuts Paper.
    .Paper covers Rock.
If both you and the computer choose the same option, it’s a draw.
Instructions:

Click on one of the buttons: Rock, Paper, or Scissors.
The result of the game will be displayed on the screen, showing what you and the computer chose, and who won.
About the Code:

The HTML file structures the game interface, including the buttons for each choice and a space to display the results.
The CSS file styles the game, giving it a clean and modern look.
The JavaScript file handles the game logic, determining the computer's choice, comparing it with the player's choice, and displaying the result.
Enjoy playing and see if you can outsmart the computer!










