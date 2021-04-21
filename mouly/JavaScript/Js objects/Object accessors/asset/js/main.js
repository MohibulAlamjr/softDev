// javascript setter

var person = {
    firstname : "john",
    lastname : "Doe",
    language : "English",
    age : 50,
    get name (){
        return this .lastname+ " "+ this.firstname;
    }
}
console.log(person.name);



var person1 = {
    firstName : "serajum",
    midName : "munira",
    lastName : "mouly",
    country : "Bangladesh",
    age : 23,
    get fullname (){
        return this .firstName+ " "+ this.midName+ " "+ this.lastName;
    }
}
console.log(person1.fullname);


// javascript setter 


var person2 = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    set lang (lang) {
      this.language = lang;
    }
  }
  person2.lang="English";

  console.log(person2.language);




  var person3 = {
    firstname : "john",
    lastname : "Doe",
    language : "English",
    age : 50,
    nationality : "",
    set name1 (name1){
       this.nationality = name1;
    }
}

person3.name1 = "English";
console.log(person3.nationality+ " "+person3.age);


// using setter & getter in together


var person4 = {
    favouritecolor : "",
    hobby : "",
    eyecolor : "",
    year : "",
    newYear : "" ,

    set fcolor (fcolor){
        this.favouritecolor = fcolor;
    },
    set hby (hby){
        this.hobby  = hby;
    },
    set ecolor (ecolor){
        this.eyecolor = ecolor;
    },
    set yr (yr){
        this.year = yr;
    },
    get char (){
        return this.favouritecolor + " " + this.hobby + " "+ this.eyecolor;
    },
    get age (){
        return this.newYear - this.year;
    }
   

}

let newYear = new Date ();
let x = newYear.getFullYear();




person4.fcolor= "blue";
person4.hby = "crafting";
person4.eyecolor = "black";
person4.yr = 1997;
person4.newYear = x;

console.log(person4.char);
console.log(person4.favouritecolor);
console.log(person4.hobby);
console.log(person4.age);


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

   
   get age(){
    return this.nowyear - this.year;
   }

    
}

var date = new Date();
var y = date.getFullYear();


person2.fName="John";
person2.lName="Doe";
person2.year1=1960;
person2.nowyear=y;


console.log(person2.fullName);
console.log(person2.firstName);
console.log(person2.age);



//data quality

var person5 = {
    firstName : "serajum",
    midName : "munira",
    lastName : "mouly",
    country : "Bangladesh",
    age : 23,
    get fullname (){
        return this .firstName+ " "+ this.midName+ " "+ this.lastName;
    }
}
console.log(person5.fullname.toUpperCase());
console.log(person5.fullname.toLowerCase());


// object define property

var obj = {
    counter : 10
};

Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
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


obj.add = 7;
console.log(obj.counter);
obj.subtract = 4;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
obj.reset;
console.log(obj.counter);


var object = {
    counter1 : 100
};

Object.defineProperty(object," reset", {
    get : function () {this.counter1 = -100;} 
});

Object.defineProperty(object, "increment",{
     get : function () { this.counter1++;}

});

Object.defineProperty(object, "decrement",{
    get : function () {this.countrt--;}
});

Object.defineProperty(object, "add",{
    set : function (value){this.counter1 +=value; }
});

Object.defineProperty(object, "substract",{
    set : function (value){this.counter1 -=value; }
});

Object.defineProperty(object, "mul",{
    set : function (value){this.counter1 =counter1*value; }
});

Object.defineProperty(object, "div",{
    set : function (value){this.counter1 = counter1 / value; }
});

Object.defineProperty(object, "mod",{
    set : function (value){this.counter1 = counter1 % value; }
});


object.add = 20;
console.log(object.counter1);
object.substract = 10;
console.log(object.counter1);
object.substract = 30;
console.log(object.counter1);
object.substract = 40;
console.log(object.counter1);
object.substract = 50;
console.log(object.counter1);
object.reset ;
console.log(object.counter1);