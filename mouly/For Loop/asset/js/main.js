var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + 
  "\n";
}

console.log(text);


var number = "";
var i;
for (i = 0; i < 5; i++) {
  number += "The number is " + i + "\n";
}
console.log(number);


var cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;
var len = cars.length;
var text1 = "";

for (; i < len; ) {
  text1 += cars[i] + "\n";
  i++;
}

console.log(text1);