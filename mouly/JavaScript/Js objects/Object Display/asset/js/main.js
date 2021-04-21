// display

var person = {
    lname : "Mouly",
    age : 23,
    country : "Bangladesh",
    city : "Jhenidah"
}
console.log(person);


var person1 = {
    lname : "Mouly",
    age : 23,
    country : "Bangladesh",
    city : "Jhenidah"
}

console.log(person1.lname+ " "+ person1.city);

// properties by name 

var person2 = {
    lname : "Mouly",
    age : 23,
    country : "Bangladesh",
    city : "Jhenidah"
}
console.log(person2);

// properties in loop
for(x in person2){
    console.log(person2[x]);
}

//using object.values

var myNm = Object.values(person2);
console.log(myNm.toString());


var myNm1 = Object.values(person);
console.log(myNm1.toString());

// using JSON.stringify

var myNm = JSON.stringify(person2);
console.log(myNm.toString());

var myNm1 = JSON.stringify(person);
console.log(myNm1.toString());


// stringify arrays

var array = ["rose", "beli", "daisy", "merigold"];

var myArray = JSON.stringify(array);
console.log(myArray);

var array1 = ["mouly", "era", "ema", "rusha"];

var myArray1 = JSON.stringify(array1);
console.log(myArray1);