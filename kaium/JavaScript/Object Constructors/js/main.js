function Person(a,b, c, d) {
    this.firstName = a;
    this.lastName = b;
    this.age = c;
    this.eyeColor = d;
  }
  
  // Create a Person object
  var myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather);

//   Object Types (Blueprints) (Classes)

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  console.log("My father is " + myFather.age + ". My mother is " + myMother.age + ".");


  class Person1 {
      constructor(first, last, age, eye){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      
      }
  }
  var kaium = new Person1 ("John", "Doe", 50, "blue");
  console.log(kaium.age);


//   Adding a Property to an Object
 kaium.bgroup ="B+";
 kaium.name = function(){
    return this.firstName+' '+this.lastName;
 }
 console.log(kaium.bgroup);
 console.log(kaium.name());


//  Adding a Property to a Constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  // You can NOT add a new property to a constructor function
  Person.nationality = "English";

  
  // Create 2 Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  console.log("The nationality of my father is " + myFather.nationality);

//   Adding a Method to a Constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName+" "+this.age
    };
  }
  var myFather = new Person("Siddik", "Sorif", 50, "blue");
  console.log("My father is " + myFather.name());


//   The changeName() function
  function Person3(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
  }
  // Create a Person object
  var myMother = new Person3("Sally","Begu",48,"green");
  
  // Change last name
  myMother.changeName("Doe");
  console.log("My mother's last name is " + myMother.lastName);

//   Built-in JavaScript Constructors

// var x1 = new Object();   // A new Object object
// var x2 = new String();   // A new String object
// var x3 = new Number();   // A new Number object
// var x4 = new Boolean();  // A new Boolean object
// var x5 = new Array();  // A new Array object
// var x6 = new RegExp();   // A new RegExp object
// var x7 = new Function(); // A new Function object
// var x8 = new Date(); 

// console.log("x1: " + typeof x1 + " " +
// "x2: " + typeof x2 + " " +
// "x3: " + typeof x3 + " " +
// "x4: " + typeof x4 + " " +
// "x5: " + typeof x5 + " " +
// "x6: " + typeof x6 + " " +
// "x7: " + typeof x7 + " " +
// "x8: " + typeof x8 + " ";)