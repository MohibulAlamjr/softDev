
// very basic for loop 

for (let i=10;i<=20;i+=2){
    console.log(i);
}

// staetment 2

var cars = ["BMW", "Volvo", "Saab", "Ford"];
 var i=0;
 var len=cars.length;
 var  text = "";
for (; i < len; i++) {
  text = cars[i]; 
  console.log(text);
}

// statement 3
var cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;
var len = cars.length;
var text = "";

for (; i < len; ) {
 
 text = cars[i];
  i++;
  console.log(text);
}

document.getElementById('num')