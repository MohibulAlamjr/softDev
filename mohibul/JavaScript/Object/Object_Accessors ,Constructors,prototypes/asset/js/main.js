// getter 

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang () {
      return this.language;
    }
  };

  console.log(person.lang);

//   setter
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    set lang (lang) {
      this.language = lang;
    }
  }
  person.lang="English";

  console.log(person.language);


//   getter  & setter 


var person2={

    firstName:"",
    lastName:"",
    year:"",
    nowyear:"",
    
    

    set fName(fn){
        this.firstName=fn.toUpperCase();
        
    },
    set lName(ln){
        this.lastName=ln;
        
    },
    set year1(year){
        this.year= year;
        
    },

    get fullName (){
        var c= this.firstName + " " + this.lastName;
        return c.toUpperCase();
    } ,

    // method
    
//    age : function(x){
//       return x - this.year;
//    },
   
   get age(){
    return this.nowyear - this.year;
   }

    
}

var date = new Date();
var u = date.getFullYear();


person2.fName="Mohibul";
person2.lName="Alam";
person2.year1=1996;
person2.nowyear=u;


console.log(person2.fullName);
console.log(person2.firstName);
console.log(person2.age);

//Object.defineProperty()

var obj = {
    counter : 125
};

// Define Setters and Getters
Object.defineProperty(obj,"reset",{
    get : function(){
        this.counter = 125;
    }
});

Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});

Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

Object.defineProperty(obj,"mul", {
  set : function (v){this.counter = this.counter*v;}
});

// Play with counter:

obj.add = 5;
console.log(obj.counter);
obj.subtract = 10;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
obj.reset;
console.log(obj.counter);
obj.mul=2;
console.log(obj.counter);


// JavaScript Object Constructors

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  var myFather = new Person("John", "Doe", 50, "blue");
  var kaium = new Person("AL","kaium",15,"black");
  console.log(myFather.firstName);
  console.log(kaium.lastName);
  Person.nationality = "English";
  console.log(kaium.nationality);


//   class

class person1 {

    constructor(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    }
}

var mohibul = new person1("John", "Doe", 50, "blue");

console.log(mohibul.age);

mohibul.bgroup="AB+";

mohibul.name= function(){
   return this.firstName+' ' + this.lastName;
}

console.log(mohibul.bgroup);
console.log(mohibul.name());

// add property in constractor 

//change value 
// Constructor function for Person objects
function Person3 (firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.firstName = name;
    }
  }

  var myMother = new Person3("Sally","Rally",48,"green");
  console.log(myMother.firstName);
  
  myMother.changeName("Mally");
  console.log(myMother.firstName);