// unchangable(const)
//since pi should not be change we shold make it const
// const radius = window.prompt("Add number of radius");
// let pi = 3.14;
// let C = 2 * pi * radius;
// console.log(C);

//THE OTHER WAY
let radius;
const pi = 3.14;

document.getElementById("myLable").innerHTML = "Enter radius:" ;
document.getElementById("myButton").onclick = function(){
radius  = document.getElementById("myText").value;
//radius = Number(radius);

let c = 2 * pi * radius;
console.log(c); 
}
