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