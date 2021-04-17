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

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    return this.firstName;
  }
  

  var v= myFunction('mohibul','alam');
  console.log(v);

  function myFunction1(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    return this.firstName;
  }
  

  var vr= myFunction1('jone','doe');
  console.log(vr);

//  assing value in object using function

var myobj={
  store: function(fn,ln){
      this.firstName=fn;
      this.lastName=ln;
      this.age=arguments[2];
  },
  fullb:function (){
      return('you name is '+this.firstName+' '+this.lastName+' your age is '+this.age);
  }


}

myobj.store('sweety','akter',90);
console.log(myobj.firstName);
myobj.store('Serajum','Munira',100);
console.log(myobj.fullb());
myobj.store('Al','Kaium',150);
console.log(myobj.fullb());
myobj.store('Mohibul','Alam',180);
console.log(myobj.age);