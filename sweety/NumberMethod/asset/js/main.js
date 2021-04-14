// For Numbers 

// Decimal Numbers 
var a = 20;
var b = 40;
console.log(a + " " +b);

//Sum of Decimal Numbers 
var a = 20;
var b = 40;
var c = a + b;
console.log(c);

// Floating Numbers 
var a = 23.45;
var b = 25.43;
var c = a + b;
console.log(c);

// Exponent
var a = 256e4;
var b = 321e-6;
console.log(a);
console.log(b);

// Subtraction

var a = 30;
var b = 20;
var sub = a - b;
console.log('a - b = ' + sub);

// Floating Number multiplication

var a = 12.20;
var b = 23.30;
var mul = a * b;
console.log(mul);

// Division

var a = 30.45;
var b = 15.45;
var divi = a/b;
console.log(divi);

var a = (20-10 + 30-20)/2;
console.log('The division is:'+ a);

// String 
var a = '30';
var b = '40';
var mul = a * b;
console.log(mul);

//numeric string

var a = "330";
var b = "50";
var c = a + b ;
console.log(c);

var a = "330";
var b = "50";
var c = a - b ;
console.log(c);

var a = "330";
var b = "50";
var c = a / b ;
console.log(c);

// Nan 
 
var a = 34;
var b = "";
var sub = a - b;
console.log(sub);

var a = NaN;
var b = 60;
var c = a + b;
console.log(c);
console.log(typeof(a));

// HexaDecimal Numbers

var a = 0xAB;
console.log(a);
var b = 0x4F;
console.log(b);
var c = 0xFF;
console.log(c);

// Converting Numbers 

 var a = 30;
Decimal = a.toString(4);
console.log("Decimal = " + Decimal);

Hexadecimal = a.toString(12);
console.log("Hexadecimal = " + Hexadecimal);

Binary = a.toString(5);
console.log("Binary = " + Binary);

Octal = a.toString(6);
console.log("Octal = " + Octal );


// Number be Obeject

var a = 456;
console.log(typeof(a));

var a =new Number(345);
console.log(typeof(a));

var a = 321;
var b = new Number(321);
console.log(a===b);
console.log(a<=b);


// Method of toString

 var i = 76;
 i.toString();
 console.log(i);




 //Method of Exponentia

var a = 900;
a.toExponential();
console.log(a);
console.log(a.toExponential(8));
console.log(a.toExponential(9));
console.log(a.toExponential(10));


// Method of toPrecision

var a = 900;
a.toPrecision();
console.log(a);
console.log(a.toPrecision(8));
console.log(a.toPrecision(9));
console.log(a.toPrecision(10));


// Method of toFixed
a = 698.90;
a.toFixed();
console.log(a);
console.log(a.toFixed(8));
console.log(a.toFixed(9));
console.log(a.toFixed(10));

// NumberMethod

var num = Number(false);
console.log(num);

var num = Number(true);
console.log(num);

var num = Number("3");
console.log(num);

var num = Number(8,9);
console.log(num);

var num = Number("9,10");
console.log(num);

var num = Number("HELLO");
console.log(num);

var num = Number(6);
console.log(num);

// parseInt Method 

var num = parseInt(false);
console.log(num);

var num = parseInt(true);
console.log(num);

var num =parseInt("9");
console.log(num);

var num = parseInt(8,9);
console.log(num);

var num =parseInt("9,10");
console.log(num);

var num = parseInt("HELLO");
console.log(num);

var num = parseInt(6);
console.log(num);


// parseFloat Method 

var num = parseFloat(false);
console.log(num);

var num = parseFloat(true);
console.log(num);

var num =parseFloat("9");
console.log(num);

var num = parseFloat("8.9");
console.log(num);

var num =parseFloat("00,19");
console.log(num);

var num = parseFloat("Hi");
console.log(num);

// Maximum_Value

var a = Number.MAX_VALUE;
console.log(a);

// Minimum_Value

var a = Number.MIN_VALUE;
console.log(a);

// Positive_Infinity

var a = Number.POSITIVE_INFINITY;
 console.log(a);

  // Negative_Infinity

var a = Number.NEGATIVE_INFINITY;
 console.log(a);
