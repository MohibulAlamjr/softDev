// JavaScript Object Methods

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());


//   Using Built-In Methods
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName().toUpperCase());


var person2 = {
    firstName: "md",
    lastName: "al",
    id: 5566,
    year : 1999,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: function(){
       var date = new Date();
        let x = date.getFullYear();
        return x - this.year;
    }
};
console.log(person2.fullName().toUpperCase());
console.log(person2.age());


// ----------------------------------------------------------------
// JavaScript Display Objects



// Adding a Method to an Object
var person1 = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    age : 28
  };
  person.name = function() {
    return this.firstName + " " + this.lastName;
  };
  console.log(person.name());

  console.log(person1.age);
  for(x in person1){
      console.log(person1[x]);
  }
//   Using Object.values()
  var myob = Object.values(person1);

  console.log(myob.toString());
//   Using JSON.stringify()
  var newOb = JSON.stringify(person1);
  console.log(newOb);

  var arr = ["John", "Peter", "Sally", "Jane"];
//   Stringify Arrays
var myString = JSON.stringify(arr);
console.log(myString);

console.log(arr.toString());



