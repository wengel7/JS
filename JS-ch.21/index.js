//ternary operator = shortcut for "if/else statement"
//                   it tasks 3 tasks 

//                   1. A condition with ?
//                   2. Expression if true 
//                   3. and false
// condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(21);

// console.log(adult);

// function checkAge(age){
//     return age >= 18 ? true : false;
// }

checkWinner(false);

function checkWinner(win){
    win ? console.log("YOU WIN!") : console.log("YOU LOSE");
}