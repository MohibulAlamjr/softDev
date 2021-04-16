// object 
var person1="john deo";

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function(){
             return this.firstName + " " + this.lastName;
            }
  };
  
  console.log( person.fullName());
  // update value

  var person3 = {
   firstName:"John",
   lastName:"Doe",
   age:50, 
   eyeColor:"blue"}

person3.age=20;
var x = person3;
x.age=10;
x.lastName='alam';
delete person3.lastName;
console.log(x);


// properties access in for 

var txt = "";
var person1 = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person1) {
  console.log(person1[x]);
}

// add properties 
var person2 = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
  };
  
  person2.nationality = "English";
  console.log(person2.nationality);

  delete person2.age;
  console.log(person2);
  