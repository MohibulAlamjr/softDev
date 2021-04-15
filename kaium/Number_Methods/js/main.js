// The toString() Method
var x = 123;
console.log(
    x.toString() + " " +
    (103).toString() + " " +
    (100 + 22).toString());

// The toExponential() Method
// toExponential()
var x = 9.656; //Problen
console.log(
    x.toExponential() + " " +
    x.toExponential(2) + " " +
    x.toExponential(4) + " " +
    x.toExponential(6));

// The toFixed() Method
// toFixed()
var x = 7.656;
console.log(
    x.toFixed() + " " +
    x.toFixed(2) + " " +
    x.toFixed(4) + " " +
    x.toFixed(6));

// The toPrecision() Method
var x = 8.656;
console.log(
    x.toPrecision() + " " +
    x.toPrecision(3) + " " +
    x.toPrecision(4) + " " +
    x.toPrecision(6));

// Global JavaScript Methods
// Number()
// console.log(
//     Number(true) + " " +
// Number(false) + " " +
// Number("10") + " " + 
// Number("  10") + " " +
// Number("10  ") + " " +
// Number(" 10  ") + " " +
// Number("10.33") + " " + 
// Number("10,33") + " " +
// Number("10 33") + " " +
// Number("John"))

var a = Number(true);
console.log(a);
a = Number(false)
console.log(a);
a = Number("10")
console.log(a);
a = Number("  10")
console.log(a);
a = Number("10  ")
console.log(a);
a = Number(" 10  ")
console.log(a);
a = Number("10.33")
console.log(a);
a = Number("10,33")
console.log(a);

a = Number("10 33")
console.log(a);
a = Number("John")
console.log(a);

a=Number(new Date("2017-09-30")); 
console.log(a);

a=Number(new Date("4/13/21"));
console.log(a);



// parseFloat()
console.log("parseFloat");
 var c = parseFloat("10");
 console.log(c);
 var c = parseFloat("10.33");
 console.log(c);
 var c = parseFloat("10 6");
 console.log(c);  
 var c = parseFloat("10 years");
 console.log(c);
 var c = parseFloat("years 10"); 
 console.log(c);  




// parseInt()
console.log("parseInt");
 var b=parseInt("10");
 console.log(b);
 var b=parseInt("10.33");
 console.log(b);
 var b=parseInt("60 10");  
 console.log(b);
 var b=parseInt("70,10");  
 console.log(b);
 var b=parseInt("10 years"); 
 console.log(b); 
 var b=parseInt("years 10");
 console.log(b);