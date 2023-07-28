//toLocalString() = returns a string with a language 
//                  sensitive representationof this number



//number.toLocalString(local, {options});

//"local" = specify that language (undefined = default set in browser)
//"options" = object with formatting options

// let myNum = 123456.789;
//TIP: standard
// myNum = myNum.toLocaleString("en-US");//us english 123,456.789
// myNum = myNum.toLocaleString("hi-IN");//Hindi
// myNum = myNum.toLocaleString("de-DE");//standard German 1,23,456.789

//TIP: used for currency
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});//$123,456.79
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR" });//₹1,23,456.79
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR" });//123.456,79 €


let myNum = 100;
//TIP: percents
// myNum = myNum.toLocaleString(undefined, {style: "percent"});//10,000%

//TIP:We can chooice different type of unit like meter, celsius, kilometer...etc
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "meter"});//100 m


console.log(myNum);
