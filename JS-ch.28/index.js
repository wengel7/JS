//?2D array = is when an array have multiple arrays

//Let build a grocery list

// let vegis = ["Onions", "Tomatos", "Potatoes"];
// let dairy = ["Milk", "Yogurt", "Chess"];
// let fruits = ["Apple", "Banana", "Mangoes"];//Sorry for the mango :-D
//The first method 
// let groceryList = [vegis, dairy, fruits];

//Simple to change any array assign the numbers 
// groceryList [2][2] = "Carrots";


//List holds the values of the array
// for(let list of groceryList){
//     for(let buy of list){
//         console.log(buy);
//     }
// }

//Note: DO NOT WORRY ABOT USING 2D ARRAYS COZ THEY REARLY HAPPEN

// ?Spread operator = allows an iterable such as an array or string (unpacks the elements)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


//console.log(numbers);//calling all the detail of the array
//console.log(...numbers);//Shows only the elements og the array

//We can do this with strings too 
// let username = "some one";

// console.log(...username);//And tis will spread the strings into individual characters

//How can we use this then?...let have an example from before to demonstrate

// let  max = Math.max(...numbers);//if there was no spead operator("...") the anser would have been ("NAN")
// console.log(max);//9  

//TO merging 2 classes

// let class1 = ["qwer", "tyui", "opas", "dfgh"];
// let class2 = ["mnbv", "cxzl", "kkjh", "gfds"];

// class1.push(...class2);//It need to have spread operator so that class1 can only take the elements only
// console.log(...class1);


//?rest parameters = represents an idefinite number of parameters(packs arguments into an array)

let a = 9;
let b = 8;
let c = 7;
let d = 6;
let e = 5;

console.log(sum(a, b, c, d));

//Instade of writing like this...

// function sum(a, b){
//     return a + b;
// }

// function sum1(a, b, c){
//     return a + b + c;
// }

// function sum2(a, b, c, d){
//     return a + b + c + d;
// }

// function sum3(a, b, c, d, e){
//     return a + b + c + d + e;
// }

//...we could use the rest parameters once so that they can pack it in just one array

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }


//We can also write in this way
// function sum(x, y, ...numbers){//this will case it to take the 1st parameters then replace the rest with in array (also they are always going to be on the bottom)
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
//}






