var colors = ["red","blue","black","white"];
console.log(colors);

var colors = [
    "red",
    "blue",
    "black",
    "white"
];
console.log(colors);

var colors = new Array ("blue","black","white");
console.log(colors);

// searching by index number
var colors = new Array ("blue","black","white","red");
console.log(colors[1]);
console.log(colors[0]);
console.log(colors[3]);
 
// add elements
var colors = ["red","blue","black","white"];
colors[2] = "green";
console.log(colors);
colors[3] = "purpel";
console.log(colors);

// arrays are objects

var person = ["akash","neel","megh"];
console.log(person[2]);

var person = {firstName:"neel",lastName:"akash",age:24};
console.log(person["lastName"]);
console.log(person.firstName);
console.log(person.age);


var shop = {
    list1: "books",
    list2: "pens",
    list3: "pencils",
    total: 3

}

console.log(shop.list3);


var myArray=[myshop(),shop.list1,20,30,100,80,90,shop.list1];

function myshop(){
    var x=20;
    var y=20;
    var mul=x*y;
    return mul;
}
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[6]);
console.log(myArray[7]);
// array elememts can be objects 

// lenghth

var colors = ["red","blue","black","white"];
console.log(colors.length);
var colors = ["blue","black","white"];
length = colors.length;
console.log(length);

// accessing the first array element

var colors = ["red","blue","black","white"];
var first = colors[0];
console.log(first);
var first2 = colors[3];
console.log(first2);

// accessing the last array element

var colors = ["red","blue","black","white","purpel"];
var last = colors[colors.length-1];
console.log(last);
var last = colors[colors.length-2];
console.log(last);

// looping array elements 

var colorss, collect, clen , i;
colorss = ["Blue", "black", "white", "black"];
cLen = colorss.length;

text = "<ul>";
for (i = 0; i < cLen; i++) {
  text = text + "<li>" + colorss[i] + "</li>";
}
text = text + "</ul>";

console.log(text);


var colorss1, collect, clen , i;
colorss1 = ["Blue", "black", "white", "black"];
cLen = colorss.length;


for (i = 0; i < cLen; i++) {
  text1 = text + "<li>" + colorss1[i] + "</li>";
}
console.log(text1);

// access index number 
 
function myColor(name,value){
   for (let i = 0; i<name.length; i++){
       var index = ' '
       if(name[i] == value){
           index = i;
           break;
       }
   }
   return index;
}

var array = ["Blue", "black", "white", "black"];
var array2 = myColor(array, 'black');
var array3 = myColor(array, 'purpel');
console.log(array2);
console.log(array3);

// for each function 

var colors3, text,i;
colors3 =  ["Blue", "black", "white", "black"];

text = "<ul>";
colors3.forEach(myFunction);
text = text + "</ul>";


function myFunction(value) {
  text = text + "<li>" + value + "</li>";
}
console.log(text);

// diffrent 
var color5 = ["Blue", "Orange", "red", "acqa"];


for(let i = 0; i < color5.length;i++){
    console.log(color5[i]);
}



var colors4, text4,i;
colors4 =  ["Blue", "black", "white", "black"];

text4 = "<ul>";
colors3.forEach(myFunction);
text4 = text4 + "</ul>";


function myFunction(value) {
  text4 = text4 + "<li>" + value + "</li>";
}
console.log(text);

fruits.forEach(myFunction);

function myFunction(value) {
    console.log(value);
  } 

// adding array

var food = ["ice-cream","cocolate","fish","vegetables"];
food.push("water");
console.log(food);
food.push("mango");
console.log(food);

// adding elements by array length

var food1 = ["ice-cream","cocolate","fish","vegetables"];
food1[food1.length] = "juice";
console.log(food1);
food1[food1.length] = "chips";
console.log(food1);

// adding elements br array indexes

var food2 = ["ice-cream","cocolate","fish","vegetables"];
food2[3] = "lemon";
console.log(food2);
food2[0] = "phn";
console.log(food2);
food2[8] = "laptop";
console.log(food2);

// associative array 

var person = [];
 person[1] = "serajum";
 person [2] = "munira";
 person [3] = 23;

 var name5 = person[1];
 console.log(person);
 console.log(name5);
 var len = person.length;
 console.log(len);
 console.log(name5 + len);



 var person = [];
 person["firstName"] = "serajum";
 person ["lastName"] = "munira";
 person ["age"] = 23;

 var name6 = person["firstName"];
 console.log(name6);
 var name8 = person["lastName"];
 console.log(name8);
 var name7 = person["age"];
 console.log(name7);
 var len = person.length;
 console.log(len);
 console.log(name6 + name8);

 // typeof array  

 var food2 = ["ice-cream","cocolate","fish","vegetables"];
console.log(typeof(food2));

var array= [10,40,60,43,567,09];
console.log (typeof(array));


