// Find odd number



x = findOdd(2,4,5,8,9,1,23,35);

function findOdd() {
  var i;
  var number;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2!==0) {
      number = arguments[i];
    }
  }
  return number;
}

console.log(x);

// Find even number

y = findEven(12,36,11,24,54,89,91);

function findEven() {
  var i;
  var number1;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2==0) {
      number1 = arguments[i];
    }
  }
  return number1;
}

console.log(y);
