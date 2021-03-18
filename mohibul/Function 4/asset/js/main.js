// acount the element and console element and elements number 
// var x=  findOdd(1,2,3,5,7,8,9,80,81,96,89)
// var y=  findEven(1,2,3,5,7,8,9,80,81,96,89)
// var z=  findPrime(55,230)

// using this

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }


  var myObject1 = {
    firstName:"mofiz",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
console.log(myObject.fullName());
console.log(myObject1.fullName());

// using new 

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.fullbio= function(){
    return('your name is '+this.firstName+' '+this.lastName+' your age is '+this.age+' your eye color is '+this.eyeColor)

} 

console.log(person.fullbio());

// differnnt way

var person2={
   firstName :"John",
   lastName : "Doe",
   age : 50,
   eyeColor : "blue",
    fullbio: function (){
        return('your name is '+this.firstName+' '+this.lastName+' your age is '+this.age+' your eye color is '+this.eyeColor)
    }

}

console.log(person2.fullbio());