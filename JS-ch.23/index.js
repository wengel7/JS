//Template literals = delimited with (`) no more single or double quotes
//                    allow emedded variables and expression

let username = "username";


// console.log(`Hello ${username}`);// instade of console.log("hello", username);
// console.log(`Hello ${username}`);
// console.log(`Hello ${username}`);
// let p =
//  `Hello ${username}
// Hello ${username}`;//also can write it like this

// console.log(p);


let text =
    `Hello ${username}<br>
    Hello ${username}<br>`;//also can write it like this
document.getElementById("myLable").innerHTML = text;
