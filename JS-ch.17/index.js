//LOOPS

//While loop = as long as the condition
//             is true then kepp looping 

// let username = "";

//Make sure to always end loops coz it might break the program
// while(username.length == 0)//(username == "" || username == null)
// {
//     username = window.prompt("What's your name?");
// }

// console.log("Username: ", username);

//If we want to try get the name first
//without giving any value to the username the while loop won't do 
//That means for another loop...

//do while loop = do something first then check 
//                if condition met

// let username;

// do{
//     username = window.prompt("What's your name?");
// }while(username == "");

// console.log("Username: ", username);

//We have seen the above loops loop depending on.. 
//a boolean condition but what if we want a loop that
//repeats a number of times

//for loop = repeats code a number of times

// for(let counter = 1; counter <= 10; counter+= 1){
//     console.log("Counter: ", counter);
// }

//Mostly programmers use instade of counter i
//if we want a longer counter we can change the i value 
for(let i = 10;i < 0; i-=1){
   console.log(i); 
}
console.log("HAPPY DAY!")