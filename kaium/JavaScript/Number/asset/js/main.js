// JavaScript Numbers Sum
 function Numbers(){
    var x = 3.14;
    var y = 3;
    return a = x+y;
    
    
 }
 console.log(Numbers());

// Problem
 function D(){
    var x = 123e5;
    var y = 123e-5;
    return z= x+y;
 }
 console.log(D());
 
//  Precision
function Precision(){
    var x = 999999999999999;
var y = 9999999999999999;
return z=x+y;
}
console.log(Precision());


// The maximum number of decimals/float is 17
var p = 0.2 + 0.1;
console.log(p);

var q = 0.2 + 0.1;
console.log( "0.2 + 0.1 = " + q);


var y = (0.2*10 + 0.1*10) / 10;
console.log("0.2 + 0.1 = " + y);

// Adding Numbers and Strings

var x = 10;
var y = 20;
var z = x + y;
console.log(z);

var x = "10";
var y = "20";
var z = x + y;
console.log(z);

var x = "10";
var y = 20;
var z = x + y;
console.log(z);


var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);

var x = 10;
var y = 20;
var z = "AB";
var result = x + y + z;
console.log(result);

var x = "10";
var y = 20;
var z = x * y;
console.log(z);

var x = "AA";
var y = "AA";
var z = x * y;
console.log(z);

var x = "10";
var y = 20;
var z = x / y;
console.log(z);

var x = "10";
var y = 20;
var z = x - y;
console.log(z);

var x = NaN;
var y = 5;
var z = x + y;
console.log(z);

var x = NaN;
console.log(typeof(x));

var x = "NaN";
console.log(typeof(x));


// Execute until Infinity
var myNumber = 2 ;
while (myNumber != Infinity) {   
  myNumber = myNumber * myNumber;
}
console.log(myNumber);

// x will be Infinity
var x =  2 / 0;  
console.log(x); 
// y will be -Infinity
var y = -2 / 0;
console.log(y);


var x = Infinity;
console.log(typeof(x));

// Hexadecimal
var x = 0xFf;  //Problem
console.log(x);
var x = 16;
var y = x * x;
console.log(y);

var NUM = 32; //toString Problem
console.log("Dec : " +NUM.toString(10));
console.log("OCT : " +NUM.toString(8));
console.log("Binary : " +NUM.toString(2));
console.log("HEX : " +NUM.toString(16));

// Numbers  Objects
var x = 123;
var y = new Number(123);
console.log(typeof(x) +' ' + typeof(y));

// == operator, equal numbers 
var x = 500;        
var y = new Number(500); 
console.log(x==y);

// When using the === operator,
//  equal numbers are not equal, 
//  because the === operator expects equality in both type and value.

var x = 500;        
var y = new Number(500); 
console.log(x===y);


// Objects cannot be compared
var x = new Number(500);             
var y = new Number(500);
console.log(x==y);



