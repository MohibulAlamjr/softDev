// for each
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value) {
    console.log(value);
  }

  console.log('map');
//   map 
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction1);


function myFunction1(value1) {
    return value1 * 3;
  }
  numbers2.forEach(myFunction2);

  function myFunction2(value3){
      console.log(value3);
  }

//   filter 
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction3);
function myFunction3(value) {
    return value > 10;
  }
  console.log(over18);


//   reduce 
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction4);

function myFunction4(total, value, ) {
  return total + value;
}
console.log(sum);

// different
var numbers1 = ['M', 'O', 'H', 'I', 'B','U','L'];
var sum = numbers1.reduce(myFunction5);

function myFunction5(total, value, ) {
  return total + value;
}
console.log(sum);
// reduceRight
var numbers1 = ['L', 'U', 'B', 'I', 'H','O','M'];
var sum = numbers1.reduceRight(myFunction6);

function myFunction6(total, value, ) {
  return total + value;}
  console.log(sum);

//   every

var numbers = [45, 24, 29, 16, 25];
var allOver18 = numbers.every(myFunction7);
function myFunction7(value) {
    return value > 18;
  }
  console.log(allOver18);

//   some 
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction8);

function myFunction8(value) {
  return value > 10;
}
console.log(someOver18);

// index.of 
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Orange");
console.log(a);

//Array.lastIndexOf

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

// find 
var numbers = [4, 9, 160, 25, 29];
var first = numbers.find(myFunction9);

function myFunction9(value) {
  return value > 18;
}
console.log(first);

// findIndex
var first1 = numbers.findIndex(myFunction10);
function myFunction10(value) {
    return value > 5;
  }
console.log(first1);



