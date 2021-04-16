// Array.forEach

var numbers = [40, 43, 9, 19, 25,28,32];
numbers.forEach(myFunction);
function myFunction(value) {
    console.log(value);
  }

  var Num = [1,3,5,7,9,13,11,15,17];
  Num.forEach(myFunction);
  function myFunction(value){
      console.log(value);
  }

//   Array_Map

var Num = [1,3,5,7,9,13,11];
var Num1= Num.map(myMap);
function myMap(value1){
    return value1 * 2;
  }
  Num1.forEach(myMap1);
  function myMap1(value2){
  console.log(value2);
  }


  var Num = [1,3,5,7,9,13,11];
var Num2= Num.map(myMap2);
function myMap2(value4){
    return value4 * 5;
  }
  Num2.forEach(myMap3);
  function myMap3(value3){
  console.log(value3);
  }

  // Array.Filter

  var a = [1,3,5,7,9,13,11];
  var b = a.filter(myFilter);
  function myFilter(value){
    return value < 20;
  }
  console.log(b);


  var c = [1,3,5,7,9,13,11];
  var d = c.filter(myFilter1);
  function myFilter1(value){
    return value > 20;
  }
  console.log(d);


  var e = [1,3,5,7,9,20,11,21,19];
  var f = e.filter(myFilter2);
  function myFilter2(value){
    return value >= 20;
  }
  console.log(f);


  // Array.reduce()

  var a = [1,45,44,32,26,4];
  var mul = a.reduce(myReduce);
  function myReduce(total,value){
       return total * value;
  }
  console.log('The mul is:' + mul);

  var a = [1,45,44,34];
  var sub = a.reduce(myReduce1);
  function myReduce1(total,value){
       return total - value;
  }
  console.log('The sub is:' + sub);


  var a = [45,25];
  var sum = a.reduce(myReduce2, 160);
  function myReduce2(total,value){
    return total + value;
}
console.log('The sum is:' + sum);

// Array.ReduceRight()


var a = [50,70,100];
var sum = a.reduceRight(myRight);
function myRight(total,value){
  return total + value;
}
console.log(sum);

var a = ["AS","Soon","AS"];
var sub = a.reduceRight(myRight1);
function myRight1(total,value){
  return total - value;
}
console.log('The sub is:' + sub);

// Array.Every()

var a = [2,4,6,8,10,12,14,20];
var over = a.every(myEvery);
function myEvery(value){
return value <= 20
}
console.log(over);

var a = [2,4,5,7,10,9,81];
var over = a.every(myEvery1);
function myEvery1(value){
return value <= 10
}
console.log(over);

// Array.Some()

var a = [445, 60,79,24, 25];
var some = a.some(mySome);

function mySome(value) {
  return value > 40;
}
console.log(some);

// indexedDB.Of()

var Name = ["MOuly", "Sweety", "Kaium","Joy"];
var a = Name.indexOf("Joy");
console.log(a);


// Array.LastIndex()

var Name = ["MOuly", "Sweety", "Kaium","Joy"];
var a = Name.lastIndexOf("MOuly");
console.log(a);

// Array.Find()

var a = [2,4,5,7,10,9,81];
var find = a.find(myFind);
function myFind(value){
  return value > 10;
}
console.log(find);

// indexedDB.Find()

var a = [2,4,5,7,10,9,81];
var Index = a.findIndex(myIndex);
function myIndex(value){
  return value > 8;
}
console.log(Index);


