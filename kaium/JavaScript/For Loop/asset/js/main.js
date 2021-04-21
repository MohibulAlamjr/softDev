var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}




// The For/In Loop


var person = {
  fname: "John",
  lname: "Doe",
  age: 25
};
var txt = "";
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(txt);


var txt = "";
var numbers = [45, 4, 9, 16, 25];
var x;
for (x in numbers) {
  txt += numbers[x] + "<br>";
}
console.log(txt);



// Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value) {
  txt = txt + value + "<br>";
}


//   --------------------------

var cars = ["BMW", "Volvo", "Mini"];
for (var x of cars) {
  console.log(x)
}

var cars = ["BMW", "Volvo", "Mini"];
for (var x of cars) {
  console.log(x)
}

// Statement 1
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var len = cars.length
var text = "";
var i = 0;
for (; i < len; i++) {
  text += cars[i] + " ";
}
console.log(text);

// Statement 2
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var len = cars.length
var text = "";
var i = 2;
for (; i < len; i++) {
  text += cars[i] + " ";
}
console.log(text);


// --------------------------------
// The For/In Loop

// The In Loop
var tat = " ";
var person = {
  fname: "John",
  lname: "Doe",
  age: 25
};
var x;
for (x in person) {
  tat += person[x] + " ";
}
console.log(tat);

// The in Loop
var numbers = [45, 4, 9, 16, 25];
var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x] + " ";
}
console.log(txt);

var cars = ["BMW", "Volvo", "Mini"];
var txt = "";
var x;
for (x of cars) {
  txt += x + " ";
}
console.log(txt);