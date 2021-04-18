// Prototype
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
//   add property
  Person.prototype.bgroup="ab+";
  console.log(myFather.bgroup);
  console.log(Person);
  console.log(myMother.bgroup);

//   add method 

Person.prototype.fullName= function(){
   return this.firstName+ " " + this.lastName;

}
console.log(myMother.fullName());
console.log(myFather.fullName());

