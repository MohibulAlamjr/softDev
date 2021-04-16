// Find even number

console.log('Even numbers:')
y = findEven(12,36,11,24,54,89,91);

function findEven() {
  var i;
  var number;
  var count=0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2==0) {
      number = arguments[i];
      console.log(number);
      count=count+1;
    }
  }
 return count;
}

console.log(y);


console.log('Even numbers:')
y1 = findEven1(22,334,545,456,23,2,45,78);

function findEven1() {
  var i;
  var number1;
  var count=0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2==0) {
      number = arguments[i];
      console.log(number1);
      count=count+1;
    }
  }
 return count;
}

console.log(y1);


console.log('Even numbers:')
y2 = findEven2(1,2,3,4,5,6,7,8,9,112,13,12,134,);

function findEven2() {
  var i;
  var number2;
  var count=0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2==0) {
      number2 = arguments[i];
      console.log(number2);
      count=count+1;
    }
  }
 return count;
}

console.log(y2);
