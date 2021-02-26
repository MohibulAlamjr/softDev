var fname, lName,fullname,gender,a;

fname='Rahim';
lname='Ali';
gender='male';


if(gender=='male'){
    let y=20;
     a=10;
    fullname= 'Mr. '+fname+' '+ lname+a ;
}else{
    fullname= 'Mrs. '+fname+' '+ lname ;
}

console.log(a);

/* this is 
comment */

// varialbles

const book1=1;
// const 1book=2;
var a=10,b='mohibul',c=3.100,e=12,f=50;
var d=a+c+b+e+f;

console.log(d);
var ud;
typeof(ud);


let rd=10;
rd=12;

console.log(rd);

var h='5'+3+6;
console.log(h);

// different between const anad let

const y=10;
const y1=30;
const y2=30+20;
console.log(y);

var k=2**3;
console.log(k);

// comparison operator

var a;


a='hi';




if (a==10){
    console.log('it is 10');
}
else if(a>10){
    console.log('it is great then 10');
}
else if(a<10){
    console.log('it is less then 10');
}else{
    console.log('you are wrong');
}


// Array

var cars = ["Saab",1,"BMW"," ","alonx"];
console.log(cars[1]);


// object

var person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
var info=person.firstName+' '+person.lastName+'.'+'you age is '+person.age+'.'+ 'your eye color is'+' '+person.eyeColor;
console.log(info);



var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits);


var fruits = ["Banana", "Orange", "Apple"];


fruits.unshift("Jackfruit, Lemon");
console.log(fruits);

var str = "Apple, Banana, Kiwi,Mango";

var res = str.slice(8,17);
console.log(res);


var str = "Please locate 'locate' occurs!";
 var pos = str.lastIndexOf("locate");
 console.log(pos);

 var str = "Please locate 'locate' occurs!";
 var pos = str.search("locate");
 console.log(pos);

 var str = "Apple, Banana";
var res = str.substr(-4);
console.log(res);