var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// var car1 = "Saab";
// var car2 = "Volvo";
// var car3 = "BMW";


var cars = [
   "Sa",
   "Vlvo",
   "BMW"
];
console.log(cars);

//    Keyword new
var cars = new Array("Sb", "Vvo", "BMW");
console.log(cars);

//    Access the Elements of an Array
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);

//    Changing an Array Element
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);

// Access the Full Array
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Arrays are Objects
var person = {
   firstName: "John",
   lastName: "Doe",
   age: 46
};
console.log(person['firstName']);
console.log(person['lastName']);

// The length Property
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//  Accessing the First Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
console.log(first);

// Accessing the Last Array Element
fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];
console.log(last);

// Looping Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var text = "<ul>";
for (var i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);


// Array.forEach() function
function myFunction(value) {
   text += "<li>" + value + "</li>";
 } 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
console.log(text);


// push() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log(fruits);


var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Lemon";

fLen = fruits.length;
text = "";
for (i = 0; i < fLen; i++) {
  text += fruits[i] + ' ';
}
console.log(text);

// Associative Arrays
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
console.log(person[2] + " " + person.length);


// use named indexes incorrect results.
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
console.log(person[0] + " " + person.length);

// The Difference Between Arrays and Objects
var points = [40, 100, 1, 5, 25, 10];
console.log(points[0]);

// The new keyword only complicates the code. It can also produce some unexpected results:
var points = new Array(40);
console.log(points[0]);

// Recognize an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);

// Array.isArray()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

// isArray() function 
var fruits = ["Banana", "Orange", "Apple", "Mango"]; //problem
console.log(isArray(fruits));
function isArray(myArray) {
   return myArray.constructor.toString().indexOf("Array") > -1;
 }

//  instanceof
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array);


