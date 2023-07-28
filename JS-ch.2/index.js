/*arithmatic expression is a combination of...
  operands(values, vars, etc.)
  operators(/, *, -, +, %)
that can be evaluated to a value
ex. y = x + 5;
*/
let students = 30;

students = students + 1;//can use any operator instade of +
let extraStudents = students % 3;//we can also use modules operator
students += 1;
students *=2;
console.log(extraStudents);//1
console.log(students);//64

/*
    Operator precedence in js
    1.Parenthesis ()
    2.Exponents
    3.Multiplication
    4.addition & subtraction
*/
let result = 1 + 2 * (3+4);
console.log(result);//15
result = (1+2) * (3+4);
console.log(result);//21