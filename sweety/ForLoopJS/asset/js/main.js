var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
console.log(text);


var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars.length;
var text = "";

for (; i < len; i++) {
  text += cars[i] + "\n";
}
console.log(text);