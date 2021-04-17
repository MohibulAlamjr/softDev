// Arguments Object

x = findMax(1, 123, 500, 115 , 44 , 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x);

x1 = findMax1(1, 123, 500, 115 , 44 , 88);

function findMax1() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x1);

x2 = findMax2(1, 123, 500, 115 , 44 , 88);

function findMax2() {
  var i;
  var max = Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x2);

x3 = findMax3(1, 123, 500, 115 , 44 , 88);

function findMax3() {
  var i;
  var max = Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x3);


// pick the value by object 

x4 = findMax4(1, 123, 500, 115 , 44 , 88,90);

function findMax4() {
  var result = arguments[2]+arguments[3];
  return result;
}

console.log(x4);



x5 = findMax5(1, 123, 500, 115 , 44 , 88,90);

function findMax5() {
  var result = arguments[4]+arguments[6];
  return result;
}

console.log(x5);


x6 = findMax6(1, 123, 500, 115 , 44 , 88,90);

function findMax6() {
  var result = arguments[0]+arguments[6];
  return result;
}

console.log(x6);


// pick the value by parameter

x7 = findMax7(1, 123, 500, 115 , 44 , 88,90);

function findMax7(p0,p1,p2,p3,p4,p5,p6) {
    
  var result = p5+p6;
  
  return result;
} 

console.log(x7);



x8 = findMax8(1, 123, 500, 115 , 44 , 88,90);

function findMax8(p0,p1,p2,p3,p4,p5,p6) {
    
  var result = p0+p3;
  
  return result;
} 

console.log(x8);


x9 = findMax9(1, 123, 500, 115 , 44 , 88,90);

function findMax9(p0,p1,p2,p3,p4,p5,p6) {
    
  var result = p3+p5;
  var result1 =arguments[1]+arguments[5];
  return result + result1;
} 

console.log(x9);

x10 = findMax10(1, 123, 500, 115 , 44 , 88,90);

function findMax10(p0,p1,p2,p3,p4,p5,p6) {
    
  var result = p1+p2;
  var result1 =arguments[3]+arguments[4];
  return result + result1;
} 

console.log(x10);

