// to string method

var x = 123;
x.toString();
console.log(x);
var y = 124;
(124).toString();
console.log(y);
console.log((100+3).toString());

// to exponential method

var X = 2.456;
X.toExponential();
console.log(X);
console.log(X.toExponential(3));
console.log(X.toExponential(5));
console.log(X.toExponential(7));

// to fixed method

var y = 4.7601;
y.toFixed();
console.log(y);
console.log(y.toFixed(3));
console.log(y.toFixed(6));
console.log(y.toFixed(7));

// to precision method

var x = 56.123;
x.toPrecision();
console.log(x);
console.log(x.toPrecision(3));
console.log(x.toPrecision(6));
console.log(x.toPrecision(7));


// value of method

var x = 123;
x.valueOf();
console.log(x);
var y = 124;
(124).valueOf();
console.log(y);
console.log((100+3).valueOf());

// number method 

var number = Number(true);
console.log(number);

var number = Number(false);
console.log(number);

var number = Number("30");
console.log(number);

var number = Number("40 ");
console.log(number);

var number = Number(" 90");
console.log(number);

var number = Number("40.40");
console.log(number);

var number = Number("23, 45");
console.log(number);

var number = Number("MOULY");
console.log(number);

var number = Number(90);
console.log(number);

// number method on date 

var number =  Number(new Date("4/13/21"));
console.log(number);

var number = Number(new Date("2021-01-30"));
console.log(number);

//parseint method

var number = parseInt("3440");
console.log(number);

var number = parseInt("4330 ");
console.log(number);

var number = parseInt(" 950");
console.log(number);

var number = parseInt("40.40");
console.log(number);

var number = parseInt("23, 45");
console.log(number);

var number = parseInt("MOULY");
console.log(number);


// parsefloat

var number = parseFloat("4330 ");
console.log(number);

var number = parseFloat("43.30 ");
console.log(number);

var number = parseFloat(" 730 ");
console.log(number);

var number = parseFloat("4.330 ");
console.log(number);

var number = parseFloat("Munira ");
console.log(number);

// max value

var x = Number.MAX_VALUE;
console.log(x);
var y = Number.MAX_VALUE;
console.log(y);

//min value
var y = Number.MIN_VALUE;
console.log(y);

// positive infinity 

 var x = Number.POSITIVE_INFINITY;
 console.log(x);
  
 var y = 1/0;
 console.log(y);

 // negative infinity 
 var x = Number.NEGATIVE_INFINITY;
 console.log(x);

 // nan not a number 

 var x = Number.NaN;
 console.log(x);

// arithmetic & string returns Nan

 var x = 10/"number";
 console.log(x);

// number properties cannot be used on variables

 var x = 7;
 var y = x.MAX_VALUE;
 console.log(y);