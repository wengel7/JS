//Type Conversion = change the datatype of a value to another
//(strings, numbers, booleans)

// let age = window.prompt("How old are you?");

// console.log(typeof age);//string
// age = Number(age);//changer
// age +=1;//add
// console.log(typeof age);//number
// console.log("Age: " + age);//Age: 23

let x;
let y;
let z;

x = Number("bkh");//we can also change the type of the value by the saying instade of Number String or Boolean
y = String(3.14);
z = Boolean("");//false
z = false; //or z = true;
 
console.log(x, typeof x); 
console.log(y, typeof y);
console.log(z, typeof z);

//fun fact if we try to convert a none number to Number it will output...

x = String(x);
console.log(x, typeof x);//NaN string


