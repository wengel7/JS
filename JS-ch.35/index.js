//!Graphics in JS using canvas API 
//?It can be used for drawing, animations, games, data visualization, etc...

// let canvas = document.getElementById("canvas");
// let context = canvas.getContext("2d");
//?how to draw Any line 
// context.strokeStyle = "green";//This should come first
// context.lineWidth = 10;//Line thickness
// context.beginPath();
// context.moveTo(0, 0);//X, Y
// context.lineTo(250, 250);
// context.lineTo(500, 0);
// context.moveTo(250, 500);
// context.lineTo(250, 250);
// context.stroke();//This make it draw the lines above

//?Drawing triangles with full color
// context.fillStyle = "lightgreen";
// context.lineWidth = 5;
// context.beginPath();
// context.moveTo(0, 500);
// context.lineTo(250, 0);
// context.lineTo(500, 500);
// context.lineTo(0, 500);
// context.stroke();
// context.fill();//Use this to fill color
//?Drawing rectangle 
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);//X, Y, X1, Y1
// context.strokeStyle = "black";//For border 
// context.strokeRect(0, 0, 250, 250);


// context.fillStyle = "blue";
// context.fillRect(250, 0, 500, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 500);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 500);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 500, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 500, 500);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 500);

//?Drawing circle
// context.fillStyle = "blue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);//X, Y, sAngle, eAngle, countercolokwise
// //?When we say "true" it will change the circle to the opposite arch
// context.stroke();
// context.fill();

//?Draw text
// context.font = " 50px MV Boli";
// context.fillStyle = "yellow";
// context.textAlign = "center";//makes the axis on the center
// context.fillText("HAPPY!!", canvas.width /2, 250);//X, Y

//!window = interface used to instructe the web browser(also DOM is apart of it)
// confirm.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);


// console.log(window.outerWidth);
// console.log(window.outerHeight);

//?we can make know where the scroll position is.
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);//show the href of the web
// window.location.href = "https://google.com";//To change location of the page
// console.log(window.location.hostname);//shows the name of the browser
// console.log(window.location.pathname);//to find the path name

// const button = document.querySelector("#button");

// button.addEventListener("click", () => window.open("https://google.com"));
// button.addEventListener("click", () => window.close());//to close with a click
// button.addEventListener("click", () => window.print());//To print this page


// window.alert("As used before for pop-ups");
// window.confirm("To receive confirms from user ok?")
//?A small example from before
// let age = window.prompt("Enter your age:");

// if(age < 18){
//     window.alert("yoo.. too young!!");
//     window.close();
// }


// !cookies = not a food but a text file stored on computer used to remember
//!           information about user.It saved in name = value pairs


// console.log(navigator.cookieEnabled);//true 
// document.cookie = "firstName=someone; expires=mon, 6 April 2023 5:00:00 UTC; path=/";
// document.cookie = "lastName=somebody; expires=mon, 6 April 2023 5:00:00 UTC; path=/";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";//To remove a cookie we just need to set the expire data to past
 
// console.log(document.cookie);
//?Let have a little example that accepts a cookies of user name 
const fName = document.querySelector("#firstText");
const lName = document.querySelector("#lastText");
const btnSubmit = document.getElementById("submitButton");
const btnGetCookie = document.getElementById("getCookieButton");
const dName = document.querySelector("#cText");
btnSubmit.addEventListener("click", () => {
    setCookie("firstName", fName.value, 365);
    setCookie("lastName", lName.value, 365);
});

 
btnGetCookie.addEventListener("click", () => {
    fName.value = getCookie("firstName");
    lName.value = getCookie("lastName");
    
})



function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60));
    
    let expires = "expires=" + date.toUTCString();
    document.cookie =   `${name}=${value}; ${expires};path=/`;

}

function deletCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    });
    return result;
}


























