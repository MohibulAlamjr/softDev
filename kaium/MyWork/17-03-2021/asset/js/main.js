// The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max =0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);


// The Arguments Object
x = findMax(-1, -123, -500, -115, -44, -88);

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

// The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i]< max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);


// The Arguments Object pic the valu
y = findMax1(1, 123, 500, 115, 44, 88);

function findMax1() {
  var result=arguments[2]+arguments[3];
  return result;

}
console.log(y);

// The Arguments parameter pic the valu
z = findMax3(1, 123, 500, 115, 44, 88);

function findMax3(p1,p2,p3,p4) {
  var result=p3+p1;
  return result;

}
console.log(z);

// The Arguments parameter pic the valu
a = findMax4(1, 123, 500, 115, 44, 88);

function findMax4(p1,p2,p3,p4) {
  var result=p3+p1;
  
  var result2 =arguments[5]+arguments[4];
  return result2;

}
console.log(a);


