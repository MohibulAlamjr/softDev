
x = findMax(1, 123, 500, 115 , 44 , 88,0.01);

function findMax() {
  var i;
  var max = Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x);

// pick the value by object 

y = findMax1(1, 123, 500, 115 , 44 , 88,0.01);

function findMax1() {
  var result = arguments[2]+arguments[3];
  return result;
}

console.log(y);

// pick the value by parameter

z = findMax11(1, 123, 500, 115 , 44 , 88,0.01);

function findMax11(p1,p2,p3,p4,p5,p6,p7) {
    
  var result = p6+p7;
  var result1 =arguments[5]+arguments[6];
  return result + result1;
}

console.log(z);