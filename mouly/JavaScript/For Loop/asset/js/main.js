// for loop

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + 
  "\n";
}

console.log(text);


var flowers = ["rose", "lily", "beli", "lotus", "tuilip", "daisy"];
var text = "";
var x;
for (x = 0; x < cars.length; x++) {
  text =text + flowers[x] + 
  "\n";
}

console.log(text);

// for number


var number = "";
var i;
for (i = 0; i < 5; i++) {
  number += "The number is " + i + "\n";
}
console.log(number);



var number1 = "";
var i;
for (i = 0; i < 10; i++) {
  number1 += "The number is " + i + "\n";
}
console.log(number1);




var food = ["rice", "water", "juice", "banana"];

var i = 0;
var len = food.length;
var text1 = "";

for (; i < len; ) {
  text1 = text1 + food[i] + "\n";
  i++;
}

console.log(text1);