//?Array = multiple values in a single variable
//?        and an array always starts from o
//?        why coz a computer counts from 0
// let fruits = ["Apple", "Orange", "Banana"];

//console.log(fruits[0]);//Apple


//fruits[2] = "Kiwi";//To change any element

// fruits.push("Lemon");//To add an element
// fruits.pop();//To remove the last element

// fruits.unshift("Mango");//To add an element at the beginning
// fruits.shift();//To remove the first element

// console.log(fruits.length);//To know how many elements the array haves

//To find the index of the array
// console.log(fruits.indexOf("Appel"));//-1 
// console.log(fruits.indexOf("Banana"));//2

//!Loops and arrays

// let prices = [5, 10, 20, 25];
 //To see elements from the last to start
// for(let i = prices.length; i >= 0 ; i--){
//     console.log(prices[i]);
// }
 //                /\  
                  //\\
//Another way for || (this) to be...
// for(let price of prices){
//     console.log(price);
// }

//!sort an array of string in Js

let fruits = ["Mango", "Apple", "Orange", "Banana"];

fruits = fruits.sort();//Sorts the array-> Apple, Banana, Mango, Orange
fruits = fruits.sort().reverse();//Sorts the array but reversed-> Orange, Mango, Banana, Apple





