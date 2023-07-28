//function = Helps to define code once and use it multiple times` 
//           by calling the name of the function

//If we want to use this rectangle multiple times it won't be ideal to rewrite it again and again...

// console.log("================================");
// console.log("================================");
// console.log("================================");
// console.log("================================");
// console.log("================================");
// console.log("================================");

//instade we use a function and call it in one line of code
draw();

function draw(){
 //variables declared by the let key word in function don't work...
 // y coz it only recognized inside the "{}" of the function...
 //so we solve this by letting the function received the variables
    let paint = "rectangle";
    let rectange = 1;

    rectangle(rectange, paint);
}

function rectangle(rectange, paint){
    console.log(rectangle, paint);
    console.log("================================");
    console.log("================================");
    console.log("================================");
    console.log("================================");
    console.log("================================");
    console.log("================================");
}


//return = return a value where you invoke a function
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area is:", area);

function getArea(width, height){
    let result = width * height;
    return result;
}