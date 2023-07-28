console.log("done");
window.alert("Lord Jesus!I love You!");
console.log("huhhu");
/*2 steps to declare a variable
1.var, let, const
2.Assignment a thing like int, double, string....etc 
*/
var num = 1;
let fName = "iuhuih";
let age = 21;
const doubles = 9.01;
let student = true;
console.log(doubles);//9.01
console.log(fName);//iuhuih
age = age + 1;
console.log(age + 1);//23
console.log(age + fName + student );//22iuhuih
console.log(age + student)//23
console.log("you are " + age + " years old.")// or
console.log("you are ",age," years old");
console.log("hello " + fName);//or
console.log("hello",fName);//hello iuhuih
console.log(age,student);
console.log("Enrolled:",student);
//Editing html
document.getElementById("p1").innerHTML = "Hello " + fName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


