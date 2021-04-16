// JavaScript Switch Statement
var day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}console.log("Today is " + day);







// calculator 
function myFun(a,b,c){
    var result = -1;
    switch(c){
      case "sum":
        result = a+b;
        break;
      case "sub":
          result = a-b;
          break;
      case "mul":
            result = a*b;
            break;
      case "div":
              result = a/b;  
    }
    return result;
  }
  console.log(myFun(3,50,));