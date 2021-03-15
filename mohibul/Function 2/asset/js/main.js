
// regular Function

function myFunction(a, b) {
    return a * b;
  }

 console.log(myFunction(7,8));



// anonimus function 
var x = function (a, b) {return a * b};

console.log(x(4,5));




// constractor 
var myFunction = new Function("a", "b", "return a + b");

console.log( myFunction("hi", " mohibul Alam"));


// Function Hoisting

console.log(myFunctionn(5));

function myFunctionn(y) {
  return y * y;
}

// Self calling or invoking function 

(function (a,b) {
   console.log(a+b);
   console.log(a-b);
   console.log(a*b);
   console.log(a/b);
  })(7,8);


//   Functions are Objects

// lenght

  function myFunctionu(a, b,c,d) {
    return arguments.length;
  }
  console.log(myFunctionu(4,6,5,6));

// number to string 
  function myFunctionr(a, b) {
    return a * b;
  }
  
  var txt = myFunctionr(8,5).toString();
  console.log(txt);

  console.log(typeof(txt));
  

// string to number 


  function myFunctionu(a, b) {
    return a + b;
  }
  
  var txt1 = Number( myFunctionu('8','5'));
  
  console.log(txt1);

  console.log(typeof(txt1));
  