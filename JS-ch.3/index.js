//How to let user input?

//The easy way window.prompt
// let userName = window.prompt("What's your name?");
// console.log(userName);

//Although the difficult way is to use html y coz it's practical
let userName;

document.getElementById("myButton").onclick = function(){
   
    userName = document.getElementById("myText").value;
    console.log(userName);
    //If we also want to change the lable
    document.getElementById("myLable").innerHTML = "Hello " + userName;
};
