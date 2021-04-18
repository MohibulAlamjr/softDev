var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    year     : 1996,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    age: function (){
            var date = new Date();
            let x = date.getFullYear();
            return x - this.year;
    }
    
  };

   console.log(person.fullName().toUpperCase());

   console.log(person.age());

   //display

   var person1 = {
       name:"John",
       age:30, 
       city:"New York"
    };

    
   

console.log(person1)

// Properties by name

console.log(person1.age)

// Properties in a Loop
for(x in person1){
    console.log(person1[x]);
}

// using Object.values() 

var myOb = Object.values(person1);
console.log(myOb.toString());

var newOb = JSON.stringify(person1);
console.log(newOb);

// Stringify Arrays
var arr = ["John", "Peter", "Sally", "Jane"];

var myString = JSON.stringify(arr);
console.log(myString);