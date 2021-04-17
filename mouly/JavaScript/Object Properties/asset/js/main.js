// properties 

var person = {
    firstname : "John",
    lastname : "Doe",
    age : 50,
    haircolor : "brown"
}
console.log(person.lastname+ " "+ person.haircolor);

// properties access in for


var human = {
 firstName : "Munira",
 lastName : "Mouly",
 fcolor : "Blue",
 age : 23

}
for (y in human){
    console.log(human[y]);
}


var person1 = {
    firstname : "John",
    lastname : "Doe",
    age : 50,
    haircolor : "brown"
}
for (x in person1){
    console.log(person1[x]);
}


// add properties  

var human2 = {
    firstName : "Munira",
    lastName : "Mouly",
    fcolor : "Blue",
    age : 23
   
   }

   human2.language = "Bangla";
   human2.country = "Bangladesh";
   console.log(human2);

   // delete properties

   var person2 = {
    firstname : "John",
    lastname : "Doe",
    age : 50,
    haircolor : "brown"
}
delete person2.haircolor;
delete person2.lastname;

console.log(person2);