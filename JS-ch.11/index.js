//Method chaining = calling one method after another
//                  in one continous line of code

let username = "none name";

// let letter = username.charAt(0);
// letter = letter.toUpperCase();
//instade of this we can do method chaining

let letter = username.charAt(0).toUpperCase().trim();
console.log(letter);