// JS Object Defination

var x = "Shovhana Sweety";
var women = {
    Fname: "Shovhana",
    Lname: "Sweety",
    age: 22,
    color: "Bright Green",
    eyeColor: "Black",
    height: 5,
    weight: 47,
    fullNmae: function(){
        return this.Fname + " " + this.Lname + "\n" + this.color + "\n" + this.age + "\n" + this.eyeColor + "\n" + this.height + "\n" + this.weight;
       }
};
console.log(women.fullNmae());

// Update value 
var x = women;
x.age = 20;
x.eyeColor = 'Brown';
x.Lname = "Awashi";
x.gender = 'Female';
console.log(x);

// Another One 

var man = {
    Fname: "Mr.",
    Lname: "Tommy",
    age: 20,
    color: "Black",
    eyeColor: "Brown",
    height: 4,
    weight: 25,
    fullNmae: function(){
        return this.Fname + " " + this.Lname + "\n" + this.color + "\n" + this.age + "\n" + this.eyeColor + "\n" + this.height + "\n" + this.weight;
       }
};
console.log(man.fullNmae());

// Update or Adding Value 

var women1 = {
    Fname: "Sabrina",
    age: 15,
    color: "Bright",
    height: 5.5,
    weight: 38,
}
var a = women1;
a.age = 20;
a.eyeColor = 'Brown';
a.Lname = "Awashi";
a.gender = 'Female';
console.log(a);

// Deleting

delete women1.height;
delete women1.Fname;
delete women1.age;
console.log(a);


// Properties Access for in for

var text = "";
var person = {fname:"Aniba", lname:"Khusy", color:"Bright",age:13}; 
var i;
for (i in person) {
  console.log(person[i]);
}


// Adding Properties 

var man1 = {
    fname: "Lamim",
    lname: "Sadib",
    color: "Bright",
    gender: "male",
    age: 2.5,
};


man1.eyeColor = "Black";
console.log(man1.eyeColor);

delete man1.color;
delete man1.age;
console.log(man1);
