
var person = {

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var kaium={
    firstName:'Al',
    lastName:'Kaium'
}
var x = person.fullName.call(person1); 
console.log(x);
var y = person.fullName.call(person2);
console.log(y);
var y = person.fullName.call(kaium);
console.log(y);

// arguments pass in object by call() 
var person3 = {
   
    fullName: function(city, country) {
        // this.city=city;
        // this.country=country;
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person4 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person5 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var x = person3.fullName.call(person4, "Oslo", "Norway"); 
  console.log(x);
 