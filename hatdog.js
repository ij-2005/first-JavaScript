let rounds = 3;
let playerScore = 0;
let enemyScore = 0;
let playerStatus = "";
let enemyStatus = "";
let choice = ["rock","paper","scissors"];

const text = document.getElementById("text");
const Rock = document.getElementById("RockBTN");
const Paper = document.getElementById("PaperBTN");
const Scissors = document.getElementById("ScissorsBTN");
const Submit = document.getElementById("Submit");
const Result = document.getElementById("result");
const Rounds = document.getElementById("rounds");

Rock.onclick = rock;
Paper.onclick = paper;
Scissors.onclick = scissors;
Submit.onclick = submit;

function rock(){
    if(rounds > 0){

        playerStatus = choice[0];
        text.innerText = "You have chosen rock! - Press Submit to proceed.";
    }else{
        text.innerText = "Press Restart!";
    }
}

function paper(){
    if(rounds > 0){

        playerStatus = choice[1];
        text.innerText = "You have chosen paper! - Press Submit to proceed.";
    }else{
        text.innerText = "Press Restart!";
    }
}

function scissors(){
    if(rounds > 0){

        playerStatus = choice[2];
        text.innerText = "You have chosen scissors! - Press Submit to proceed.";
    }else{
        text.innerText = "Press Restart!";
    }
    
}

function submit(){
    if(playerStatus === ""){
        text.innerText = "Choose an option!";
    }else{
    
        if(rounds !== 0){
            enemyStatus = choice[Math.floor(Math.random()* 3)];
        console.log(enemyStatus);
        text.innerText = "Enemy chose " + enemyStatus + "!"; 

        // start of ifs

        if(enemyStatus === playerStatus){
            text.innerText = "You both picked " + playerStatus +"!";
            Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
        }else{
            if(enemyStatus === "rock" && playerStatus == "paper"){
                text.innerText = "Enemy picked rock! - Player "+ playerStatus + " wins!";
                playerScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;

            }else if(enemyStatus === "rock" && playerStatus == "scissors"){ //rock
                text.innerText = "Enemy picked rock! - Enemy "+ enemyStatus + " wins!";
                enemyScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
            }
            
            else if(enemyStatus === "paper" && playerStatus == "rock"){ // paper
                text.innerText = "Enemy picked paper! - Enemy "+ enemyStatus + " wins!";
                enemyScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
            }else if(enemyStatus === "paper" && playerStatus == "scissors"){
                text.innerText = "Enemy picked paper! - Player "+ playerStatus + " wins!";
                playerScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
            }
            else if(enemyStatus === "scissors" && playerStatus == "rock"){ // scissors
                text.innerText = "Enemy picked scissors! - Player "+ playerStatus + " wins!";
                playerScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
            }else if(enemyStatus === "scissors" && playerStatus == "paper"){ // scissors
                text.innerText = "Enemy picked scissors! - Enemy "+ enemyStatus + " wins!";
                enemyScore++;
                Result.innerText = "Player: " + playerScore + " | " + "Enemy: " + enemyScore;
            }

            rounds--;
            Rounds.innerHTML = "<strong>" + rounds + "</strong>";

        }
        }

        if (rounds === 0) {
            if(playerScore > enemyScore){
                text.innerText += "\nRounds ended, you have won!";
            }else if (playerScore === enemyScore){
                text.innerText = "Match drawn! Restart!";
            }else{
                text.innerText = "You Lost! Try again?";
            }
            Submit.innerText = "Restart?";
            done();
        }

        playerStatus = "";
    }
}

function done(){
    Submit.onclick = restart;
}
function restart(){
    rounds = 3;
    Rounds.innerHTML = "<strong>" + rounds + "</strong>";
    Submit.innerText = "Submit";
    Submit.onclick = submit;
    playerScore = 0;
    enemyScore = 0;
    Result.innerText = "Press the Submit button!";
    text.innerText = "Play with me!";
}
