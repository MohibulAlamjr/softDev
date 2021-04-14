// for Each

var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  console.log(value + index );
}

// Array.map()
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction1);

function myFunction1(value) {
    return value - 2;
  }
 numbers2.forEach(myFunction2);
 function myFunction2(value3){
 console.log(value3);
}


// Array.filter()
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value4) {
  return value4 > 18;
}
console.log(over18);


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunctionf);

function myFunctionf(value4) {
  return value4 < 18;
}
console.log(over18);


// Array.reduce()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunctionx);

function myFunctionx(total, value) {
  return total + value;
}
console.log(sum);

// Array.reduceRight()
var numbers = ['K', 'A', 'I', 16, 25];
var sum = numbers.reduceRight(myFunction);
function myFunction(total, value, index, array) {
    return total + value;
  }
  console.log(sum)


  // Array.reduceleft()
var numbers = [9, 16, 25, 'A', 'I'];
var sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
    return total + value;
  }
  console.log(sum)

// Array.every()
var numbers = [45, 40, 90, 36, 25];
var allOver18 = numbers.every(myFunctioni);

function myFunctioni(valuei) {
  return valuei > 18;
}
console.log(allOver18);

var numbers = [45, 4, 90, 36, 25];
var allOver18 = numbers.every(myFunctioni);

function myFunctioni(valuei) {
  return valuei > 18;
}
console.log(allOver18);


// Array.some()
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}console.log(someOver18);


// Array.indexOf()
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

// Array.lastIndexOf()
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

// Array.find()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first); 


// Array.findIndex()
var numbers = [4, 9, 19, 24, 2];
var first = numbers.findIndex(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(first);

