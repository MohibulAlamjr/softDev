
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log("My father is " + myFather.age + ". My mother is " + myMother.age);


// We also learned that you can not add a new property to an existing object constructor:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log("The nationality of my father is " + myFather.nationality);


// To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
console.log("The nationality of my father is " + myFather.nationality);
console.log(Person);


// The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person5(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person5.prototype.name = function() {
  return this.firstName + " " + this.lastName
};
var myFather = new Person5("Siddik", "Sorif", 50, "blue");
console.log("My father is " + myFather.name());

