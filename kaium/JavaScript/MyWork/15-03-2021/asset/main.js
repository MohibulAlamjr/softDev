//regular function
function myfunction(a,b){
    return a+b;
}
console.log(myfunction(7,8))

//constructor
var myfunction=new Function ("a","b","return a+b");
console.log(myfunction("hi"," al kaium"));

//anonimus Function
 var x=function(a,b){return a*b};
 console.log(x(4,5));

 //Function Hoisting
 console.log (myFunction(5));

function myFunction(y) {
  return y * y;
}

//Self-Invoking Functions
(function () {
    console.log("hellow my name is kaium");  // I will invoke myself
  })();

  (function (a,b) {
    console.log(a+b);
    console.log(a*b); 
    console.log(a-b); // I will invoke myself
  })(2,3);

  //Functions are Objects length
//   function myFunction(a, b) {
//     return arguments.length;
//   }
//   console.log(myfunction(4,6));



//   function myFunction(a, b) {
//     return arguments.number;
//   }
//   console.log(myfunction(4,6));



//   function myFunction(a, b) {
//     return a * b;
//   }
  
//   var txt = myFunction(8,5).toString();
//   console.log(typeof(Text));


// var txt = myFunction('8','5');
// txt=number(txt);
//   console.log(txt);



//Functions Can Be Used as Values
function myFunction(a, b) {
    return a * b;
  }
  
  var x = myFunction(4, 3);


  //Arrow Functions
  const xy = (x, y) => { return x * y };
  console.log(xy(7,8));




