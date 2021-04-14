// toString array 
var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
console.log(cars.toString());


// PoP elements 

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
console.log(cars.pop());
console.log(cars.pop());
console.log(cars.pop());
console.log(cars.pop());
console.log(cars.pop());

// PUSH 

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
console.log(cars.push());
console.log(cars.push("ABC"));
var a = cars.push("BNC");
console.log(cars);


// Join Array 

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
console.log(cars.join(" $ "));
console.log(cars.join(" + "));
console.log(cars.join(" * "));
console.log(cars.join(" hi "));

// Shifting Array 

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
console.log(cars.shift());
console.log(cars.shift());
console.log(cars.shift());
console.log(cars.shift());
console.log(cars.shift());


// Unshifting

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
var o = (cars.unshift("HWS"));
console.log(cars);

// Deleting

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
var e = delete cars[2];
console.log(cars);
var s = delete cars[4];
console.log(cars);
var d = delete cars[0];
console.log(cars);

// Concating

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
var cars1 = ["BMW1","TOYOTA1","SAAB1","VOLVO1","MARC1"];
var cars2 = cars.concat(cars1);
console.log(cars2);

var frnds = ["Sweety","Mouly","Joy","Kaium"];
var frndss = ["Nishi","Anik","rahim","Karim"];
var frndsss = ["Ami","Tumi","Amra","Sobai"];
var rltn = frnds.concat(frndss,frndsss);
console.log(rltn);

// Splicing

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
cars.splice(2,3,"HI","Bye");
console.log(cars);

// Indexing

var cars = ["BMW","TOYOTA","SAAB","VOLVO","MARC"];
cars[1]="MARCITY";
console.log(cars);