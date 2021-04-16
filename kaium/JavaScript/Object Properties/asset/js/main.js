// Associative arrays in PHP
// Dictionaries in Python
// Hash tables in C
// Hash maps in Java
// Hashes in Ruby and Perl

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"

};
console.log(person.firstName + " is " + person.age + " years old.");



var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    FullName: function(){
        return this.firstName +" " +this.lastName;
    } 
};
console.log(person1.FullName()+ " age is "+person1.age);

// JavaScript Objects are Mutable
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;
console.log(person.age);


// JavaScript Properties
var txt = "";
var person = {fname:"John", lname:"Doe", age:20}; 
var x;
for (x in person) {
  console.log(person[x] + " ");
}

// Adding New Properties
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
    
  };
  person.nationality = "English";
  console.log(person.nationality);


//   Deleting Properties
var person2 = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
  };
  delete person2.age;
  console.log(person2.age);


//   Property Attributes
// All properties have a name. In addition they also have a value.

// The value is one of the property's attributes.

// Other attributes are: enumerable, configurable, and writable.

// These attributes define how the property can be accessed (is it readable?, is it writable?)

// In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).


