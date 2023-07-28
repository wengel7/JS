//!How to use another js code file to reuse it multiple times this is helpful in many ways like when we use concepts of OOP// import {pi, getCircumference, getArea} from ".\areas.js";
// console.log(pi);

// let circumference = getCircumference(10);
// console.log(circumference);

// let area = getArea(10);
// console.log(area);
//?WE can also import like this when we want to import all or many things from the othwe code 
// import * as a from "./js/areas";
// console.log(a.pi);

// let circumference = a.getCircumference(10);
// console.log(circumference);

// let area = a.getArea(10);
// console.log(area);


//!DOM = stands for document object model kinda like API and HTML docment model 
//!      it have a structure that starts with "Document" then "html"Like the tags 
//!      which then divisdes into "heads" and "body" which also have their on division 
//!      respectively...worth to google for refer.
//?      We use this to change the interface of a web
//?      In another word it an element we can use to change the HTML content in js
// console.log(Document);//Shows the DOM access
// console.dir(document);//when we pass it as an argument
// console.log(document.title);//The title of the page
// console.log(document.URL);//To display the URL
// //?We can also change the properties too
// document.title = "Changed title";//Guess we stack with this for now :-|
// document.location = "http://www.google.com";//We can also change the location of the page
// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";

//!How to select element from HTML
//?we can take the element from the (document or html) and manipulate it by making it a variable
// let element = document.getElementById("myTitle");
// element.style.color = "skyblue";
// //?We can also get mulitple similar elements at once from HTML
// let fruits = document.getElementsByName("fruit");
// console.log(fruits);//This will display all the element at once...
// console.log(fruits[0]);//and just like an array we can have access to each element by using index

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         fruit.style.backgroundColor = "skyblue";
//         console.log(fruit.value);//whatever we checked the value will be displaied
//     }
// });

//?Change by tag
// let fruits = document.getElementsByTagName("li");
//      fruits[2].style.backgroundColor = "skyblue";

// //?change it by class name
// let fruits = document.getElementsByClassName("fruit");
//     fruits[2].style.backgroundColor = "skyblue";

//?Selecting with queryselectorwe can select any type of selectors (by name , class, id, tag, or attributes(like "for"))
//?by id
// let element = document.querySelector("#myTitle");
// element.innerHTML = "Friuts yum yum";
//?by Class
// let fruits = document.querySelector(".fruit");//for each don't work
// fruits.style.backgroundColor = "lightskyblue";
//?by tag
// let fruit = document.querySelector("li"); 
// fruit.style.backgroundColor = "lightskyblue";
//?by attribute
// let fruit = document.querySelector("[for]"); 
// fruit.style.backgroundColor = "lightskyblue";

//?In the above examples the query selectes the first element but
//? if we want it to select all elementswe can add "all" to the name
// let fruits = document.querySelectorAll("[for]");
// fruits.forEach(fruit => {
//         fruit.style.backgroundColor = "skyblue";
     
// });

//!DOM traversal = a parent and a child relation between a tag and another tag within it inside HTML
//?Example of this is body tag within it there is a 3 different unlisted lists which are it's children respectively in the ordered they come in
//?meaning the first tag in the list is called the "firstchild" and the last child is called the "lastchild" and if there is another chiled the 
//?body tag will be the parent and the child above it will be a previous sibling and the one on the below next silbling  and children can also 
//?have there own children with same dynamics

// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = "skyblue";

// let element = document.body;
// let child = element.firstElementaChild;//.lastElementChild.
// child.style.backgroundColor = "skyblue";
// let child1 = child.nextElementSibling;//.previousElementSibling
// child1.style.backgroundColor = "skyblue";

//let element = document.querySelector("#fruit");
// let parent = element.parentElement;
// parent.style.backgroundColor = "skyblue";//changes the body element

//?We can also have acces children with "children" like array but not array
// let child3 = element.children[2];
// child3.style.backgroundColor = "lightgreen";
//?Make it an array like to use "foreach" and all we use "Array.from(.children)"

// let element = document.querySelector("#vegi");
// let children = Array.from(element.children);

// children.forEach(child => {child.style.backgroundColor = "skyblue"});

//!To add and change HTML elements
//?to add in an element we can use ".innerHTML"(eventho we use it using this make the code vulnerable to XXS attacks) and ".textContent"
// const nameTag = document.createElement("h1");
// nameTag.textContent =window.prompt("Enter your name?");
// document.body.append(nameTag);
//?

// const fruit = document.querySelector("#fruit");
// const mango = document.createElement("li");
// mango.textContent = "Mango";
// fruit.append(mango);//It will add it at the end
// fruit.prepend(mango);//to add the item at start
// fruit.insertBefore(mango, fruit.getElementsByTagName("li")[1]);//to put the item anyplace

//!Changing element in CSS
// const title = document.getElementById("title"); 
// title.style.textAlign = "center";
// title.style.color = "skyblue";
// title.style.backgroundColor = "black";
// title.style.fontSize = "70px";
// title.style.display = "block";
// title.style.border = "2px solid";

//!Event listner = lisens to code(like HTML and css elements) based on what is happening on the interface

// const button = document.getElementById("button");
// const element = document.body;
// const element = document.getElementById("text");
// button.onclick = changeColor;
// element.onload = changeColor;
// element.onchange = changeColor;
// //?Time to make a space that change color on click
// let element = document.getElementById("Div");
// let color = ["lightgreen", "orange", "skyblue"];

// element.onmouseout = changeBack;
// element.onmouseover = changeColor;
// element.onmousedown =  changeBack;
// element.onmouseup = changeColor;

// function changeBack(){
//    alert("Yes");
//     element.style.backgroundColor = "red";
// }
// function changeColor(){
    // alert("No");
//     let num = parseInt(Math.random()* 3 + 0);

//     console.log(num);
//     element.style.backgroundColor = color[num];
// }

//!.addEventListener = used to link function, event,  e.t.c to html element
//?with ".addEventListener" we can add multiple events to the element or an event that provoking many function at the some time
// const outerDiv = document.getElementById("outerDiv");//we must to get our document by Id
// const innerDiv = document.getElementById("innerDiv");
//?to have one element have more events
// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

//?to have more elements have one event
// outerDiv.addEventListener("click", changeRed);
// innerDiv.addEventListener("click", changeRed, true);//the "true" will case "innerDiv" to go first othewise they will excute by the respect they come in.

// function changeRed(){
//     this.style.backgroundColor = "red";
// }

// function changeGreen(){
//     this.style.backgroundColor = "green";
// }
//!To show and hide elements in HTML(display and visiblity)
// const img0 = document.getElementById("img0");
// const button = document.getElementById("button");

//?When we use display for hiding elements we make it disappear completely
// button.addEventListener("click", () => {
//     if(img0.style.display == "none"){
//       button.innerHTML = "Visible";
//       img0.style.display = "block";
      
//     }
//     else{
//       button.innerHTML = "Hidden";
//       img0.style.display = "none";
//     }
  
// });
//?Unlike visiablity which only make it visiible but still maintain it place
//   button.addEventListener("click", () => {
//         if(img0.style.visibility == "hidden"){
//           button.innerHTML = "Visible";
//           img0.style.visibility = "visible";
          
//         }
//         else{
//           button.innerHTML = "Hidden";
//           img0.style.visibility= "hidden";
//         }
      
//   });
//!detecting "key pressses" = meaning making the code to respond to the keybord 
//?This shows that the key we pressed is being received by the code
// window.addEventListener("keydown", event => console.log(event));
//?Let make a box flow our comand to move
// const box = document.getElementById("box");
// window.addEventListener("keydown", move);//There is also "keyup" to make it change after it been let go

// let x = 0;
// let y = 0;

// function move(event){
//     //?Using a switch statement in this situation is more simpler than "if else" statement
//    console.log(event.key);
//     switch(event.key){
//     case "ArrowDown":
//         y+=5;
//         box.style.top = y + "px";
//         break;
//     case "ArrowUp":
//         y-=5;
//         box.style.bottom = y + "px";
//         break;
//     case "ArrowLeft":
//         x+=5;
//         box.style.left = x + "px";
//         break;
//     case "ArrowRight":
//         x-=5;
//         box.style.right = x + "px";
//         break;
//         default:
//             break;
//    }
// }

//!Animation
const button = document.getElementById("button");
const box2 = document.getElementById("box");



button.addEventListener("click", start);

// function start(){
//     let timerID;
//     let x = 0;
//     let y = 0;
//     let degrees = 0;//Can be x, y , z

//     timerID = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerID);
//         }
//         else{
//             y+=1;
//             x+=1;
//             degrees+=1;
//             box2.style.top = y + "px";
//             box2.style.left = x + "px";
//             box2.style.transform = "rotateZ(" + degrees + "deg)";
//         }
//     }
// }
//?We can increase the element too..
// function start(){
//     let timerID;
//     let scaleX = 1;
//     let scaleY = 1;
    

//     timerID = setInterval(frame, 5);

//     function frame(){
//         if(scaleX >= 2){
//             clearInterval(timerID);
//         }
//         else{
//             scaleX+=0.01;//?If we want it to scale down just reducing the scales and change the if cases
//             scaleY+=0.1;
//             box2.style.transform = "scale(" + scaleX + "," + scaleY  +")";
//         }
//     }
// }














