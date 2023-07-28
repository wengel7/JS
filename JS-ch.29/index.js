//?callback = when a function is passed as an argument for another function

// let total = sum(2,  3);
// displayDOM(total);

//No longer use this
// function sum(x, y){
//     let result = x + y;
//     return result;
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
// document.getElementById("myLabel").innerHTML = output;
// }

//Instade of writing multiple lines we can give the function "sum" the 
//function "displayDOM" as a callback it can directly be excuted
// sum(2, 3, displayDOM);
// function sum(a, b, callback){
//     let result = a + b;
//     callback (result);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
// document.getElementById("myLabel").innerHTML = output;
// }

//? array.forEach() = a short cut for manipulating every array element 
//?                   at the same time by taking the index with the array or the element itself.
//?                   we can use give a method "(element, index, array)" or "(element)"
//?                   for a function to change the array

//Let make a function that change the first letter of an array

// let names = ["somebody", "some one", "some person"];

// names.forEach(capitalize);
// names.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }


//? array.map() = excute callback for each array element also creat a new array

// let num = [1, 2, 3, 4, 5];
// let squares = num.map(square);
// let cubes =  num.map(cube); 

// squares.forEach(print);
// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }

//?array.filter() = used to filter array element by giving a condition

// let number = [1, 2, 3, 4, 5, 5, 6, 7];
// let odd = number.filter(OorE);
// odd.forEach(print);

// function OorE(element){
//     return element % 2 != 0;
// }

// function print(element){
//     console.log(element);
// }


//?array.reduce() = make the array reduced to a single value

//Let say we had a online shopping site and we want to let a customer...
//..now the total price of the check out price  

// let prices = [50, 50, 60, 100, 70];
// let total = prices.reduce(checkOut);//

// console.log(`The total is: $${total}`);//The total is: $330

// function checkOut(total, element){
//     return total + element;
// }


 //?Lastly array sorting by sorting a random numbers
 
 let numbers = [5, 9, 6, 7, 4, 2, 1, 8];


 numbers = numbers.sort(ascending);
 numbers.forEach(print);


 numbers = numbers.sort(descending);
 numbers.forEach(print);

function ascending(x, y){
    return x - y;
}

function descending(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}






