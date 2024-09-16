let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");//a nodelist that selects all elememnts in the webpage that have the class "choice" and stores them in the choices variable as a list
const msg= document.querySelector("#msg");//accesing the msg attribute of html
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");


//function for the user selection of the choice
choices.forEach((choice) => {  //For each element (with the class choice), we add an event listener.
    choice.addEventListener("click", () => { //This listens for a "click" event on each element. When the element is clicked, the specified function will execute.
        const user_choiceId= choice.getAttribute("id");//we get to know the id , class ,etc of the selected attribute from html
        playgame( user_choiceId);
    });
});

//function for the computer to make the choice
const genComputerchoice =() => {
    const options = [ "rock" , "paper" , "scissors"];//options stored in form of array
    const randId = Math.floor(Math.random() * 3);//math.random helps generate random number and multiplying it with n(any number) helps generate numbers 0 to n  .....and floor helps generate only decimal less values from 0 to n
    return options[randId];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw";
    msg.atyle.backgroundColor= "blue";
}

const showWinner=(userWin) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Won!!");
        msg.innerText = "You Win!!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText= compscore;
        console.log("You Loose");
        msg.innerText = "You Loose";
        msg.style.backgroundColor = "red";
    }
}

//functions to call user and computer choices
const playgame = (user_choiceId) => {
    console.log("user choice = " ,user_choiceId);
    //generate computer choice
    const compChoice= genComputerchoice();
    console.log("comp choice =" , compChoice);

    //conditions
    if(user_choiceId=== compChoice){
        // console.log("game was draw");
        // msg.innerText("Game Draw");
        drawGame();

    }
    else{
        let userWin= true;
        if(user_choiceId === "rock"){
            //only available options are scissors or paper
            userWin = compChoice === "paper" ? false: true;
        }
        else if(user_choiceId === "paper"){
            //only available options are scissors or rock
            userWin = compChoice === "scissors" ? false: true;
        }
        else{
            //only available options are rock or paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin);
    }

}


