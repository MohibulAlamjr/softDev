// regular function 

function myFunction(a,b){
    return a*b;
}
console.log(myFunction(2,3));

function myFunctionn(a,b){
    return a+b;
}
console.log(myFunctionn(2,3));

function myFunctionnn(a,b){
    return a+b;
}
console.log(myFunctionnn('sweet','flower'));


// anonimus function

var x= function(a,b) {return a*b}

console.log(x(5,7));

var y= function(a,b) {return a+b}

console.log(y(5,7));

var z= function(a,b) {return a+b}

console.log(z('5',7));


// constructor function 

var myFunction2= new Function("a" ,"b" , " return a+b ");

console.log(myFunction2("hi" ," this is mouly "));


var myFunction3= new Function("a" ,"b" , " return a+b ");

console.log(myFunction3("5" ,"9 "));


// Function Hoisting

console.log(myFunction(6));

 function myFunction(y){
     return y*y;
 }

 console.log(myFunctioon(6,7));

 function myFunctioon(m,y){
     return m*y;
 }

 console.log(myFunctiion(6,9));

 function myFunctiion(b,y){
     return b+y;
 }

 // Self calling or invoking function

 (function(a,b){

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
 })
 (9,6);

 // length arguments

 function myFuncttion(a,b){
     return arguments.length;

 }
console.log(myFuncttion(1,2,3,4));

function myFunctttion(a){
    return arguments.length;

}
console.log(myFunctttion(1,2,3));


// number to string 


function myFuncction(a, b) {
    return a * b;
}
  var txt = myFuncction(5,5).toString();
  
  console.log(txt);

  console.log(typeof(txt));

  function myFunccction(a, b) {
    return a + b;
}
  var txt = myFunccction(5,5).toString();
  
  console.log(txt);

  console.log(typeof(txt));

  // string to number 


  function myFfunction(a, b) {
    return a + b;
  }
  
  var txt1 = Number( myFfunction('7','5'));
  
  console.log(txt1);

  console.log(typeof(txt1));


  function myFunctionu(a, b) {
    return a + b;
  }
  
  var txt2 = Number( myFunctionu('8','8'));
  
  console.log(txt2);

  console.log(typeof(txt2));

  //   arrow function 


var N = (x, y) => { return x * y };
console.log(N(5,9));

 
var T = (x, y) => { return x * y };
console.log(T(8,8));