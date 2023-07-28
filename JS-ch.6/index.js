//JS math function

//let x = 3.94;
//x= Math.round(x);//4
//x = Math.floor(x);//3 coz it always goes to the lower number

//let x = 3.14;
//x = Math.ceil(x);//4 the opp of floor

//let x = 3.14;
//x = Math.sqrt(x);//1.772004514666935
//x = Math.pow(x, 2);//9.8596
//x = Math.abs(x);//3.14 abosolute value

//console.log(x);

//Founding max and min value
// let x = 3.14;
// let y = 6;
// let z = 9;
// let max;
// let min;

// max = Math.max(x, y, z);
// min = Math.min(x, y, z);

// console.log(min);//3.14
// console.log(max);//9

//To assign the accurate value of pi
// let pi;
// pi = Math.PI;

// console.log(pi);//3.141592653589793

//Now an Example of a Hypontenuse calc Program
//1.c = |/a^2 + b^2
//2.a and b values are inputs

//The first way
// let a = window.prompt("Enter the value of a");
// let b = window.prompt("Enter the value of b");
// c = Math.pow(a, 2) + Math.pow(b, 2);
// let c = Math.sqrt(c);// or let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c);

//The second way(using html)
let a;
let b; 
let c;
document.getElementById("Button").onclick = function(){
    a = document.getElementById("aText").value;
    b = document.getElementById("bText").value;

    a = Number(a);
    b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById("cText").innerHTML = "C = " + c; 

};