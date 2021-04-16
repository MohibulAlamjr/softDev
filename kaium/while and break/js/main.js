// The While Loop
var text = "";
var i = 0;
while (i < 10) {
    text += "  " + i;
    i++;
}
console.log(text);

// The Do/While Loop

var text = ""
var i = 11;

do {
    text += "  " + i;
    i++;
}
while (i <= 20);
console.log(text);

// Comparing For and While
var cars = ["kaium", "jubayer", "Sojib", "Tafsin"];
var i = 0;
var text = "";
for (; cars[i];) {
    text += cars[i] + " ";
    i++;
}
console.log(text);

var cars = ["kaium", "jubayer", "Sojib", "Tafsin"];
var i = 0;
var text = "";
while (cars[i]) {
    text += cars[i] + " ";
    i++;
}
console.log(text);



// ---------------------------------------------------
// JavaScript Break and Continue

// The Break Statement

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    text += "The number is " + i + ". ";
}
console.log(text);

// JavaScript Labels
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
    text += cars[0] + " ";
    text += cars[1] + " ";
    text += cars[2] + " ";
    break list;
    text += cars[3] + " ";
}
console.log(text);
