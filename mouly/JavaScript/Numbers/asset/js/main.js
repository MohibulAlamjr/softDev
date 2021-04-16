// with & without decimal numbers

var x = 12;
var y = 34.7;
console.log(x + " " + y);

// exponent

  var x = 143e6
  console.log(x);
  var y = 164e-5;
  console.log(y);

// precision

  var x = 999999999;
  var y = 99999999999;
  console.log(x + " " + y);

// floating point

 var x = 0.2 + 0.1;
 console.log("0.2 + 0.1 = " + x);

 var x = 0.3;
 var y = 0.1;
 var sum = x + y;
 console.log("sum = " + sum);

 // multiplication and division

 var x = (0.8*21 + 0.7*19);
 console.log(x);

 var x = (0.8*21 + 0.7*19)/20;
 console.log(x);

// adding number

var x = 50;
var y = 60;
var z = x+y;
console.log(z);

var x = 30;
var y = 40;
var z = x + y;
console.log("The result is :" +  z);

// adding string

var x = "50";
var y = "60";
var z = x+y;
console.log(z);

// string and number concat

var x = "50";
var y = 60;
var z = x+y;
console.log(z);

var x = 29;
var y = 38;
var z= "76";
var c = x + y + z;
console.log("The results is : " + c);

// numeric string

var x = "400";
var y = "40"
var z = x - y;
console.log(z);

var x = "400";
var y = "40"
var z = x * y;
console.log(z);

var x = "400";
var y = "40"
var z = x / y;
console.log(z);

// (This will not work)
var x = "400";
var y = "40"
var z = x + y;
console.log(z);

// Nan is not a number

var x = 200/"Book";
console.log(isNaN(x));


var x = 200/"";
console.log(isNaN(x));

var x = NaN;
var y = "40"
var z = x + y;
console.log(z);

var x = 400;
var y = NaN;
var z = x + y;
console.log(z);


var x = NaN;
console.log(typeof(x));

// hexadecimal
 
var x = 0xFF;
console.log(x);
var x = 0x3F;
console.log(x);
var x = 0xAB;
console.log(x);

// converting numbers

var number = 54;

Binary = number.toString(2);
console.log("Binary = " + Binary);

Octal = number.toString(8);
console.log("Octal = " + Octal );

Decimal = number.toString(10);
console.log("Decimal = " + Decimal);

Hexadecimal = number.toString(16);
console.log("Hexadecimal = " + Hexadecimal);


// numbners can be object 

var x = 222;
console.log(typeof(x));

var y = new Number(222);
console.log(typeof(y));

var x = 222;
var y = new Number(222);
console.log(x==y);

var x = 222;
var y = new Number(222);
console.log(x===y);


var x = new Number(222);
var y = new Number(222);

console.log(x==y);

