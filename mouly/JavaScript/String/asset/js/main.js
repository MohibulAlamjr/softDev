// LENGTH


var text = 'these shortpositive satingcan work wonders';
var len = text.length;
console.log(len);

var text = 'these shortpositive ';
var len = text.length;
console.log(len);


// indexof

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('Rose');
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('Bely');
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var c = a.indexOf('Blue');
console.log(c);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('Yellow');
console.log(b);


// lastindexof  

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.lastIndexOf('se');
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('lo');
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('e');
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('ow');
console.log(b);


// different way of searching index

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('lo',22);
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var d = a.indexOf('el', 4);
console.log(d);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('Ro',10 );
console.log(b);

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.indexOf('Su',);
console.log(b);


// slice  

var a = 'BelyWhiteRoseBlueSunflowerYellow';
var b = a.slice(9,13);
var b1 = a.slice(13,17);
var b2 = a.slice(5,8);
var b3 = a.slice(-11,-9);
var b4 = a.slice(-7,-6);
var b5 = a.slice(-5,-3);


console.log(b+b1+b2+b3+b4+b5);

var fruits =["Banana","Orange","Apple"];
var res = fruits.unshits("Jackfruit,Lemon");
console.log(res);



