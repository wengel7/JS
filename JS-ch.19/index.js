//Nested loop = a loop inside another loop


//A simple example of a nested loop
// for(let i = 0; i < 1; i+=1){
//     for(let j = 0;j < 2; j+=1){
//         console.log(i, j);// 0 0  0 1  0 2
//     }
// }

// let row = window.prompt("Enter number of row");
// let column = window.prompt("Enter number of column");

// for(let i = 1; i <= row; i+=1){
//     for(let j = 1; j <= column; j+=1){
//         document.getElementById("myRectangle").innerHTML += j;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"; 
// }

//If we want to add a symbol instade of numbers
let symbol = window.prompt("Enter a symbol to use");
let row = window.prompt("Enter number of row");
let column = window.prompt("Enter number of column");

for(let i = 1; i <= row; i+=1){
    for(let j = 1; j <= column; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"; 
}
//Now we can make a rectangle :-)

//Like this   #####
//            #####
//            #####
//            #####
//            #####