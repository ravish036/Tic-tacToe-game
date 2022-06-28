// let music = new Audio("");
let turnAudio = new Audio("262958__unicornaphobist__glass-tap.wav");
let gameover = new Audio("435157__matrixxx__game-over-05.wav");
let isgameOver= false;
let turn = "X";

// function for Turns 
const changeTurn = ()=>{
    if(turn==="X"){
        return "0";
    }
    else{
        return "X"
    }
}

// Win-lose function
const checkWin =()=>{

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=='')){
           alert( boxtext[e[0]].innerText + " Won");
           isgameOver = true;
           gameover.play();
           document.querySelector(".line").style.width = '20vw';
           document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
           alert("Click on Reset button to begain new game")
        }
    })

}

// Working of Game

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeTurn();
            turnAudio.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
            }
        }
    })
})

// Reset Button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText ="";
    })
    turn ="X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
    document.querySelector(".line").style.width = '0vw';
    isgameOver =false;
})