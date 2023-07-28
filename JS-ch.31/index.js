//!Map = an object that holds key-value pairs of any data type 

// const store = new Map([
//     ["Jacket", 70],
//     ["T-shirt", 130],
//     ["Jeans", 150],
//     ["Socks", 160],
//     ["Shoes", 100]
// ]);

// let shoppingCart = 0;

//Methods of Map
// store.set("Hat", 45);//To add a new key and value
// store.delete("Hat");//To remove


// shoppingCart += store.get("T-shirt");//to get the value
// shoppingCart += store.get("Shoes");//230 because it is added with the "T-shirt" value which is 130 + 100

// console.log(shoppingCart);

// store.forEach((value, key) => console.log(`${key} $${value}`));

//!Object = anything that has properties and methods
//?         properties = an object attribut(what an object has)which also is like variable, or value 
//?         methods = the behavior of an object (what an object can do)which also is like function
//?We can use "." to access the properties/methods

//?For example we can creat a car object....
//?What dose a car have!
// const car = {
//     model:"Tesla",
//     color:"red",
//     year:2023,

//     drive : function (){
//         console.log(`Car ${"verum verum verum..."}`);
//     } ,
//     brake : function (){
//         console.log(`Car ${"....."}`);
//     } 

// }

// const car1 = {
//     model:"Toyta",
//     color:"sliver",
//     year:2023,

//     drive : function (){
//         console.log(`Car ${"verum verum verum..."}`);
//     } ,
//     brake : function (){
//         console.log(`Car ${"....."}`);
//     } 

// }

// console.log(car.model);
// console.log(car.year);
// console.log(car1.model);
// console.log(car1.color);
// car.brake();
// car1.brake();

//!this = a reference of a particular object but also depending on the immediate context when it used

//?Let use the old car example

// const car = {
//     model:"Tesla",
//     color:"red",
//     year:2023,

//     drive : function (){
//         console.log(`Car${this.model} goes ${"verum verum verum..."}`);
//     } 
// }

// const car1 = {
//     model:"Toyta",
//     color:"sliver",
//     year:2023,

//     drive : function (){
//         console.log(`Car ${this.model} goes ${"verummm... verummm... verummm...."}`);
//     } 
// }


// car1.drive();

 //?using "this" outside of objects will cause it to refer to the windows object
// console.log(this);
//?That mean we can use this to add properties to windows

// this.name = "addedAwindow";

//!Class = a buleprint for creating object which helps use not
//!        make many objects with properties and method 

//?Note make class start with capital to differentiate from other names

//?Let make a player object that make class 
// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game!");
//     }
//     exit(){
//         console.log("You exited the game!");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();

//?we only need to make one buleprint for all player instade of making an object for each one of them

// player1.score += 1;

// console.log(player1.score);

// player1.pause();
// player2.exit();

//!Constructor = a special method of a class used to accept properties and assign them
//?let make a grading class
// class Student{
//     constructor(name, age, GPA){
//         this.name = name;
//         this.age = age;
//         this.GPA = GPA;
//     }
//     study(){
//         console.log(`${this.name} is studying.`);//do not forget to use this
//     }
// }

// const student = new Student("somebody", 25, 3.7);//we need to pass 3 parameters
// const student1 = new Student("someperson", 27, 3.0);

// console.log(student.name);
// console.log(student.age);
// console.log(student.GPA);
// student.study();

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.GPA);
// student1.study();

//!Static = given to the properties and methods only belongs to the class,
//!         not an object why because all objects created have same properties
//!  
//?Let have an example of a racing cars blueprint class

//?          properties:-useful for caches(), fixed-configuration       
// class Car{
//     static numOfCarsInRace = 0;

//     constructor(model){
//         this.model = model;
//         Car.numOfCarsInRace += 1;
//     }
// }

// const car = new Car("Tesla");
// const car1 = new Car("Ferrati");
// const car2 = new Car("Lambo");

// console.log(car.numOfCarsInRace);//undefined why because no object have the ownership of this properties
// console.log(Car.numOfCarsInRace);//3 why because ther is 3 cars
// console.log(Car.name);//Car because it the class name

//?          methods:- useful for utility function

// class Car{
//     static numOfCarsInRace = 0;

//     constructor(model){
//         this.model = model;
//         Car.numOfCarsInRace += 1;
//     }
    
//?Since it is a race we want them all to start at the same time so we need to make this function static
//     static startRace(){
//         console.log("3...2...1...GO!");
//     }
// }

// const car = new Car("Tesla");
// const car1 = new Car("Ferrati");
// const car2 = new Car("Lambo");

// Car.startRace();

//?Fun fact we can also see static method in math class

//Math.round();//The fact that we just need to use the class name and not creat a new object shows that this is a static method class


//!Inheritance = a child class can inherit all the properties and methods of the parent class
//?HOW!
//?by using the "extends" key word we can make one class be child of another
// class Animal{
//     alive = true;
//     constructor(type){
//         this.type = type;
//     };

//     eats(){
//         console.log(`This ${this.type} is eating`);
//     };

//     sleep(){
//         console.log(`This ${this.type} is sleeping`);
//     }

// }


// class Birds extends Animal{
//     type = "Bird";
//     fly(){
//         console.log(`This ${this.type} is flying`);
//     }
// }

// class Mammals extends Animal{
//     type = "Mammal"
//     walking(){
//         console.log(`This ${this.type} is walking`);
//     }
// }

// pigeon = new Birds();

// pigeon.eats();
// pigeon.fly();
// pigeon.sleep();
// console.log(`This ${pigeon.type}`);
// console.log(`This ${pigeon.type = "pigeon"} is a live`);//Bad practice but we can do that too ;-p

// dog = new Mammals("dog");

// dog.eats();
// dog.walking();
// dog.sleep();
// console.log(`This is a ${dog.type = "Dog"}`);
//?(-=>Part of inheritance
//?||
//?\/
//!Super = Refers to the parent class.it 
//!        used to invoke the parents class constructor
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     };
// }


// class Birds extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// class Mammals extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// const crow = new Birds("Crow", 1, 240);
// const monkey = new Birds("Monkey", 2.5, 130);

// console.log(crow.name);
// console.log(crow.age);
// console.log(crow.flySpeed);

// console.log(monkey.name);
// console.log(monkey.age);
// console.log(monkey.runSpeed);

//!get = bind an object propwrty to a functionwhen that property is accessed only used for 
//!       accessed not rewriting helps for security by leting developers now not to mess with this property
//!        also can add additional logic operation

// class Car{

//     constructor(power){
//         this._power = power;
//?Using "get" we need to underscore the this ."name" to so that it can be differentance frome the get class                       
//     }

    // get power(){//simple geter
    //     return this._power;
    // }
//?we can also manipulate and add more logic to "get" function 

//     get power(){
//         return `${this._power}hp`;
//     }
// }

// let car = new Car(400);

// car.power = 4000;//This will not change
// car._power = 4000;//This can but developer will now if there is underscore before it we should not temper with



// console.log(car.power);//400 we treat "get" as a property not a function

//!set = makes a geter value writable using set method can give us more control over the code
 
// class Car{

//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//      }

//     get gas(){
//         return `${this._gas}L (${this._gas/ 50 * 100}%)`;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }

//     set gas(value){
    //?We don't want the value to be full more then it capacity so we can now do if case and limit the values 
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//             this._gas = value;
//     }
// }

// let car = new Car(400);
// car.gas =   10000;//this now will not affect the value from passing it limit

// console.log(car.power);
// console.log(car.gas);//50L (100%)


//!Object invoking => meaning accessing and using objects

// class Car{
//     constructor(modle, year, color){
//         this.modle = modle;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car = new Car("Tesla", 2023, "Black");
// const car1 = new Car("Lambo", 2019, "Yellow");
// const car2 = new Car("Ferrati", 2022, "Red");

// changeColor(car1, "Gold");
// displayInfo(car1);


// //Let make a function to display car propertys
// function displayInfo(car) {
//     console.log(car.modle);
//     console.log(car.year);
//     console.log(car.color);
// }

// //Let make a function to change car color
// function changeColor(car, color) {
//     car.color = color;
// }

//!Array of object 
// class Car{
//     constructor(modle, year, color){
//         this.modle = modle;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`${this.modle} is saying "VERUM...VERUM...VERUM..."`);
//     }
// }

// const car0 = new Car("Tesla", 2023, "Black");
// const car1 = new Car("Lambo", 2019, "Yellow");
// const car2 = new Car("Ferrati", 2022, "Red");
// const car3 = new Car("Corvette", 2023, "sliver");

//?Can not add something not created so we need tocreate the object first
// const cars = [car0, car1, car2, car3];
//?Then we can use it like normal array but an object this time :-)
// console.log(cars[1].modle);//Lambo
// cars[1].drive();

//?Can also use in functions
// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }

//!Anonymous objects = object with out name, 
//!                    side effect = can not be accessed directly,
//!                    but helps with less syntax since there is no need for unque names
//?Let make a card class
// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }
//?As seen below we don't need to create a name for objects sometimes
// let cards =[new Card("A", "Hearts"),
//             new Card("A", "Clubs"),
//             new Card("A", "Diamonds"), 
//             new Card("A", "Spades")];

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));



















