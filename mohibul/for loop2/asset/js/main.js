// using in for object 
var person = {
    fname:"John",
    lname:"Doe", 
    age:25,
    co: "mr. x"
    };
    
var txt = "";
var x;

for (x in person) {
 console.log(person[x]); 
}


// using in for array get index 
var numbers = [45, 4, 9, 16, 25];
var x;
for (x in numbers) {
   console.log(numbers[x]); 
}


// using for each for get value 

numbers.forEach(myFunction);


function myFunction(value) {
  console.log(value);
}


//////////////////////////////////////

// of in array 
var cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(x);
}

// of in string 

var lan="Mohibul alam";

for(let x of lan){
    console.log(x);
}

