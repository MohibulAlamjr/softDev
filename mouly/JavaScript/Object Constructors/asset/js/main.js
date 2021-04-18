function person (first, last, age, eye){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
}

var myName = new person ("Munira", "Mouly", 23, "Black");

console.log(myName.firstName);
console.log(myName.firstName+ " "+ myName.eyecolor);


function shop (bird, dog, cat, cow){
    this.color = bird;
    this.price = dog;
    this.eyecolor = cat;
    this.number = cow;


}

var animals = new shop ("Blue", 2000, "Gray", 10);
var fish = new shop ("Gold", 10000, "Black", 100);

console.log(animals.eyecolor);
console.log(fish.eyecolor);
console.log(animals.eyecolor+ " Dog "+animals.price);
console.log(fish.number+ "  "+fish.color);


// adding method to an object 

function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  

  var myFather = new Person1("John", "Doe", 50, "blue");
  var myMother = new Person1("Sally", "Rally", 48, "green");
  

 myFather.bloodgroup = "O+";

 myMother.fullName = function (){
     return this.firstName+ " "+ this.lastName;
 }

 console.log(myFather.bloodgroup);
 console.log(myMother.fullName());
  

// change value

function Person4(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
    this.lastName = name;
    }
  }

  var Era = new Person4("shahanaj","sharmin",16,"black");

  Era.changeName("shanjida");
  console.log(Era.firstName);
  Era.changeName("blue");
  console.log(Era.eyeColor);