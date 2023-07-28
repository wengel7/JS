//?function expression = a function without a name that we use to aviod 
//?                      polluting the global scope with nameing a function
//?                      meaning after we write about it we forget about it
 

// sayhi();

// function sayhi(){
//     console.log("HI!");
// }

//Instade of giving mulitiple name to function that we might not use after...
//we can give a varable to be the function so we have no need to give name to unrepeatable function
// let funNameReplacer = function(){
//     console.log("What's up!");
// }
// funNameReplacer();
// funNameReplacer = function(){
//     console.log("bye!");
// }

// funNameReplacer();//now no more wasting names since we can use one name for more functions ;-)

//Note that we have used this before for changing html labeles

// let count = 0;

// function decreaseCount(){
//     document.getElementById("myLabel").innerHTML = count--;
// }

// function increaseCount(){
//     document.getElementById("myLabel").innerHTML = count++;
// }

//we could have write this code more better as we did before

//? Arrow function = alternative for normal function 

//Normal function way

// const greeting = function(userName){
//     console.log(`Hi! ${userName}`);
// }

//Arrow function way
// const greeting = (userName) => console.log(`Hi! ${userName}`);

// greeting("Stranger");

//You can do this with return type functions too..
// const percent = (x, y) => x / y * 100;

// console.log(`${percent(50, 100)}%`);//50%

//Let do one more exersice
 let grade = [100, 70, 90, 80, 90];

// grade.sort(descending);
// grade.forEach(print);
// function descending(x, y){
//     return x - y;
// }   

// function print(element){
//     console.log(element);
// }

//Now let change it unto arrow function but first let see some trick we can do 

// grade.sort( function descending(x, y){
//         return x - y;
//     } );


// grade.forEach(function print(element){
//     console.log(element);
// });

//Now you could see where i am goiging with this...

// grade.sort( (x, y) => x - y);
// grade.forEach((element) => console.log(element));
//It makes the code so readable

//?Time to shuffle cards :-)
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// function shuffle(array){
//     let currentIndex = array.length;
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex-=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
// }
// cards.forEach((element) => console.log(element));

//?nested function = a function inside a function which add to data securty
//?                  inner function can not be access from outside because it is hidden

let userName = "some body";
let userInbox = 0;

login();

function login(){
    //This functions can only be accssed inside the "login" function
    displayUserName();
    diplayUserInbox();

    function displayUserName(){
        console.log(`WelCome ${userName}`);
    }

    function diplayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}

















