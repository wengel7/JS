//slice() extracts a section of a string 
//        and returns it as a new string,
//        without modifying the original string 
//Very usefull

let fullName = "some name"
let firstName;
let lastName;


// firstName = fullName.slice(0, 4);//some
// lastName = fullName.slice(4);//name

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);//name

console.log(lastName);
console.log(firstName);
