let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");


const genCompChoice = () => {
    const choice = ["rock","paper","scissors"];
    const randomInd = Math.floor(Math.random() * 3);
    return choice[randomInd];
}

const ShowWin = (winner, CompChoice, userId) => {
    if(winner) {
        user++;
        userScore.innerText = user;
        msg.innerText = `You Win! Your ${userId} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        comp++;
        compScore.innerText = comp;
        msg.innerText = `You Lose. ${CompChoice} beats Your ${userId}`;
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () => {
    msg.innerText = "Game was Draw. Play it again.";
    msg.style.backgroundColor = "#4f6da1";
}

const playgame = (userId) => {
    const CompChoice = genCompChoice();

    if(userId === CompChoice) {
        //draw
        drawgame();
    } else {
        let winner = true;
        if(userId === "rock") {
            //paper,scissor
            winner = CompChoice === "paper" ? false : true;
        } else if(userId === "paper") {
            //rock,scissor
            winner = CompChoice === "scissors" ? false : true;
        } else {
            winner = CompChoice === "rock" ? false : true;
        }
        ShowWin(winner, CompChoice, userId);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userId = choice.getAttribute("Id");
        playgame(userId);
    })
})

let image = document.querySelectorAll(".img");
image.forEach((img) => {
img.addEventListener("click", () => {
    img.classList.add("image");
    setInterval(() => {
        img.classList.remove("image")
    },150);
  });
});