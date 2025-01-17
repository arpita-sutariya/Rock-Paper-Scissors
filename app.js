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