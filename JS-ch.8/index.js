//a must to make games in JS

//How to make a dice roll in a game
// let x = Math.floor( Math.random() * 6) + 1;//The plus gives it a boundary btw 1 - 6


//For multiple dices

document.getElementById("roll").onclick = function(){
    let x = Math.floor( Math.random() * 6) + 1;
    let y = Math.floor( Math.random() * 6) + 1;
    let z = Math.floor( Math.random() * 6) + 1; 

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
};