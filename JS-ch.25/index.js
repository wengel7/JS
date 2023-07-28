//Simple number guessing game

// const answer = Math.round(Math.random() * 10 + 1);
// let guesses = document.getElementById("guessField").value;
// guesses = Number(guesses);

// document.getElementById("submitButton").onclick = function(){
//     if(guesses == answer){
//         document.getElementById("WorL").innerHTML = "YOU GUESSED RIGHT THE NUMBER IS " + answer;
//     }
//     else{
//         document.getElementById("WorL").innerHTML = "YOU GUESSED WRONG THE NUMBER IS " + answer;
//     }
// }

//when we make it more advanced

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses+=1;

    if(guess == answer){
        alert(`${answer} is the number.
        It took you ${guesses} guess.`);
    }
    else if(guess <= answer){
        alert(`too small.`);
    }
    else if(guess >= answer){
        alert(`too big.`);
    }
    else{
        alert(`Not a number`);
    }

};

 

