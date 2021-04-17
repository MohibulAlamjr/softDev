var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    age : 50
  };
   console.log(person.age);
  console.log(person.fullName());

  var human = {
      fname : "serajum",
      lname : "mouly",
      fullname : function (){
          return this.fname + " " + this.lname;
      },
      fcolor : "blue"
  }
  console.log(human.fcolor);
  console.log(human.fullname());



  var human = {
    fname : "serajum",
    lname : "mouly",
    fullname : function (){
        return this.fname + " " + this.lname;
    },
    fcolor : "blue",
    year : 1997,
    age : function(){

        let date = new Date ();
        let y = date.getFullYear();
        return y - this.year;
    }
};


console.log(human.age());
console.log(human.fullname().toUpperCase());
console.log(human.fullname().toLowerCase());

