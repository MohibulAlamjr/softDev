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
 