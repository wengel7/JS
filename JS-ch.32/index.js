//!Error = object with a description of something went wrong
//?Example of error =()
//?      ||
//?     \\//
//?      \/
//?  Can't open a file
//?  Lose connection
//?  User types incorrect input
//?  TypeError

//?Mistake1 uncaught TypeError exception(Err)
//console.lag("Hello");
//?Now let "try" and "caught" the error ;-)
// try{
//     console.lag("Hello");
// }
// catch(error){
//     console.log(error);
// }
//?No more red error that will stop the program because in programming developers may have bugs but the program need to still run...

//?Next mistake User type incorrect input

// try{
//     let x = window.prompt("Enter a number?");
//     x = Number(x);

//     console.log(`${x} is the number entered.`);
// }
// catch(error){
//     console.log(error);
// }

//?This code will not break the program but clearly there is a bug in it

//!throw = executes a user-defined error
//?we use here a "throw" to correct the error message before so if we
//? give a message for the different type of error that might occur we 
//?will be avoiding many bugs 

// try{
//     let x = window.prompt("Enter a number?");
//     x = Number(x);
    
//     if(isNaN(x)) throw "That wasn't a number!";//"isNaN" is a build tool to check if it null or not 
//     if(x == "") throw "That was empty!";
    
//     console.log(`${x} is the number entered.`);
// }
// catch(error){
//     console.log(error);
// }
//?And a bouns 
//?      ||
//?     \\//
//?      \/
//!finally = always executes, can not be called with out "try" and "caught"
// finally{
//     console.log("This always excutes!");
// }

//!setTimeout() = to invoke a function after some time(given the amount milliseconds)
//?                asynchronous function(don't pause execution)

//?Time to be anoying :-D3

// setTimeout(adds, 2000);//a callback and millisecond
// setTimeout(adds1, 4000);
// setTimeout(adds2, 8000);

// function adds(){
//     alert(`Buy this course for $700!!`);
// }

// function adds1(){
//     alert(`Buy one get free forever!!`);
// }

// function adds2(){
//     alert(`NOT A SCAM I PROMISE!!`);
// }

// //?not a loop but will pop out also can make...
// //!"clearTimeout()" to stop the setTime
// //?but for now let link it to a button to stop

// let timer = setTimeout(adds, 3000);//a callback and millisecond
// let timer1 = setTimeout(adds1, 6000);
// let timer2 = setTimeout(adds2, 9000);

// document.getElementById("buy").onclick = function(){
//     clearTimeout(timer);//to use this we should make the "settimeout" variable
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     alert(`Thanks for buying`);


// }


//!setInyerval() = just like setTimer invokes a function but repeatedly 
//!                asynchronous function(don't pause execution)

// let count = 0;
// let max = window.prompt("Count up to what number?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count++;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }

//!Date() = works with dates and times, we can get and set date with this object
//let date = new Date();//the date this function come into play
//let date = new Date(0);//the start sate
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);//Sun Jan 01 2023 02:03:04 GMT-0800 (Pacific Standard Time)
//let date = new Date("Jan 1, 2023 00:00:00");//Sun Jan 01 2023 00:00:00 GMT-0800 (Pacific Standard Time)

// let date = new Date();

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();


// date.setFullYear(2023);
// date.setMonth(1);
// date.setDate(9);//This gose for ever get...

//let date = date.toLocaleDateString();//current date
// document.getElementById("date").innerHTML = formatDate();
// //?Few things to do with "Date()"
// function formatDate(Date){
// let year = date.getFullYear();
// let Month = date.getMonth();
// let day = date.getDate();

//     return `${Month}/${day}/${year}`;
// }

//?Now let create a date that update everytime

// const lable = document.getElementById("date");



// setInterval(update, 1000);

// function update(){

//     let date = new Date();
//     lable.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hour = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hour >= 12 ? "PM": "AM";

//         hour = (hour % 12) || 12;

//         hour = formatZeros(hour);
//         minutes = formatZeros(minutes);
//         seconds = formatZeros(seconds);

//         return `${hour}:${minutes}:${seconds} ${amOrPm}`;
//     }
//     function formatZeros(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }


//!Synchronous code = sequenceal and start and finish at the same time
// console.log("Example of synchronous code");

//!Asynchronous code = out of sequence starts now and finsh after some time
// setTimeout(()=> console.log("Example of asynchronous code"), 1000);

//!console.time() = track how long an operation take fo
// console.time("Response time");//starts it
// alert(`Click the button`)//synchronous code
// setTimeout(()=> console.log("asynchronous code"), 1000);
// console.timeEnd("Response time");//Response time: 6065ms - timer ended

//!promise = let asynchronous methods return value like synchronous method

//?Promises have states pending then either resolved or rejected which then result in an answer.
//?It has 2 parts producing & consuming
//?let pretend we are loading a file.
//?file loading is a asynchronous process

//?If our promise(from producing function then we can tell the consuming code to do what we want it 

// const promise = new Promise((resolve, reject) => {
  
//   let fileLoaded = false;  

//   if(fileLoaded){
//     resolve("File loaded");
//   }
//   else{
//     reject("File NOT loaded");
//   }
// });

// //?This is the consuming load
// promise.then(value => console.log(value))  //This shows the resolve function value.

//   //?we might want to catch the error (which is the value of the reject function)
//   .catch(error => console.log(error));

//?Another simple promise example with setTimeout function

const promise = new Promise(resolve =>{
  setTimeout(resolve, 3000);
});

promise.then(() => {console.log("Thank you for waiting")});








