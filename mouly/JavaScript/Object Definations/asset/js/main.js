// obhects are veriables 

var person = {
       firstName : "Serajum",
       lastName : "Munira",
       age : 23,
       hairColor : "black"

}
 console.log(person.firstName);
 console.log(person.firstName + " "+ person.lastName);


 var food = {
       food1 : "ice-cream",
       food2 : "juice",
       food3 : "water",
       food4 : "burger"

 }

 console.log(food.food1);
 console.log(food.foo4+ "  "+ food.food3);
 console.log(food.food3);

 var person1 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"

 }
 console.log(person1.firstName + " "+ person1.lastName+ ".His eyscolor is "+ person1.eyeColor);
     


 var person = new Object() 
    person.firstName = "Serajum";
    person.lastName = "Munira";
    person.age = 23;
    person.hairColor = "black";


console.log(person.lastName);
console.log(person.age + " "+ person.hairColor);



var food2 = new Object ()
    food2.food1 = "ice-cream";
    food2.food6 = "juice";
    food2.food3 = "water";
    food2.food4 = "burger";



console.log(food2.food3);
console.log(food2.foo4+ "  "+ food2.foo1);
console.log(food2.food6);
console.log(food2.foo4);

// objects are mutable - updated value

var human ={
    fName : "John",
    lName : "Doe",
    age : 50,
    eyecolor : "blue"

}

var y = human;
y.age = 60;
y.eyecolor = "black";
human.age = 70;
console.log(human);


var human1 = {
    firstname : "Serajum",
    lastname : "Mouly",
    fcolor : "black",
    age : 20,
}
 human1.age = 23;
 human1.lastname =" Munira";
 human1.fcolor = "blue";

 console.log(human1);

 // delete value

 var human11 = {
    firstname : "Serajum",
    lastname : "Mouly",
    fcolor : "black",
    age : 20,
}
 human11.age = 23;
 human11.lastname =" Munira";
 human11.fcolor = "blue";
delete human11.lastname;
delete human11.age;
 console.log(human11);