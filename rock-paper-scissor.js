var pscore = 0;
var cscore = 0;
function computerPlay() {
    var num = Math.floor(Math.random()*3);
    if(num==0) {
        return("Rock");
    }
    else if (num==1) {
        return("Paper");
    }
    else {
        return("Scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    var play = playerSelection;
    var comp = computerSelection;
    if (play == comp) {
        display.innerText = "Draw. Choose again.";
    }
    else if (play == "Rock" && comp == "Scissors" || play == "Scissors" && comp == "Paper" || play == "Paper" && comp == "Rock") {
        display.innerText = "You win! " + play + " beats " + comp;
        pscore+=1;
    }
    else if(play == "Rock" && comp == "Paper" || play == "Scissors" && comp == "Rock" || play == "Paper" && comp == "Scissors"){
        display.innerText = "You lose! " + comp + " beats " + play;
        cscore += 1;
    }
    if (pscore == 5 || cscore ==5) {
        if(pscore ==5) {
            score.innerText = "You win! " + pscore + " to " + cscore;
        }
        else if (cscore ==5) {
            score.innerText = "You lose! " + pscore + " to " + cscore;
        }
        pscore = 0;
        cscore = 0;
    }
    else {
        score.innerText = "Player : " + pscore + " Computer : " + cscore;       
    }
}

function game(choice) {
    var cSelection = computerPlay();
    playRound(choice, cSelection);
}

const rock = document.createElement('Button');
rock.innerText = "Rock";
const paper = document.createElement('Button');
paper.innerText = "Paper";
const scissors = document.createElement('Button');
scissors.innerText = "Scissors";
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const display = document.createElement('div');
document.body.appendChild(display);

const score = document.createElement('div');
document.body.appendChild(score)

const buttons = document.querySelectorAll('Button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.innerText);
    })
})
