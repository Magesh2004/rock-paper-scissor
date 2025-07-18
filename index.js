
const resetBtn  = document.getElementById('reset');
const playerBtn = document.querySelectorAll('.btn');
const winningScore = 8
let isGameOver = false;
const player ={
    name:"Player",
    score:0,
    display:document.querySelector("#player__score")
}
const computer = {
    name:"Computer",
    score:0,
    display:document.querySelector("#computer__score")
};
playerBtn.forEach(buttons =>{
    buttons.addEventListener('click', function(){
        let ch = parseInt(this.value);
        gameStart(ch);
    })
})

function randomChoice(){
    const computerChoice = document.querySelector('.computer__choice');
    const choices = ['&#9994;','&#128400;','&#9996;']
    let index = Math.floor(Math.random() * choices.length);
    computerChoice.innerHTML = `<p>${choices[index]}</p>`;
    return index;
}

function gameStart(x){
    const playerChoice = document.querySelector('.player__choice');
    const choices = ['&#9994;','&#128400;','&#9996;']
    playerChoice.innerHTML = `<p>${choices[x]}</p>`;
    const  y = randomChoice()
    mainFunc(x,y)
}

function mainFunc(x,y){
    if(x===y){
        console.log("Same");
    }
    else if ((x === 0 || x === 1) && (y === 0 || y === 1)){
        if(x===1){
            updateScores(player,computer)
        }else {
            updateScores(computer,player)
        }
    }
    else if ((x === 1 || x === 2) && (y === 1 || y === 2)){
        if(x===2){
            updateScores(player,computer)
        }else {
            updateScores(computer,player)
        }
    }
    else if ((x === 2 || x === 0) && (y === 2 || y === 0)){
        if(x===0){
            updateScores(player,computer)
        }else {
            updateScores(computer,player)
        }
    }
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('success');
            opponent.display.classList.add('failure');
            alert(`${player.name} is the Winner`)
        }
        player.display.textContent = player.score;
    }
}

resetBtn.addEventListener('click',
    function () {
        isGameOver = false;
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('success', 'failure');
        computer.score = 0;
        computer.display.textContent = 0;
        computer.display.classList.remove('success', 'failure');
        alert("Restarting new game")
    }
)

// rock = 0
// paper = 1
// scissor = 2