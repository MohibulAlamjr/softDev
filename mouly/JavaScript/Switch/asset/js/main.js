// switch

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
}
console.log(day);


function myCalculator(x,y,z){

    var result = " null";
    switch(z){
        case "sum":
         case "Sum":
         case "SUM":
         case "SuM":
             result = x + y;
             break;

         case "sub":
         case "Sub":
         case "SUB":
         case "SuB":
             result = x - y;
             break;

         case "mul":
         case "Mul":
          case "MUL":
          case "MuL":
                 result = x * y;
                 break;

         case "div":
         case "Div":
         case "DIV":
         case "DiV":
                result = x / y;
                break;

         case "mod":
         case "Mod":
         case "MOD":
         case "Mod":
                result = x % y;
                break;
    }
    return result;
}
console.log( myCalculator(9, 81, "sum"));
console.log( myCalculator(9, 81, "sub"));
console.log( myCalculator(9, 81, "Mul"));
console.log( myCalculator(9, 81, "Div"));
console.log( myCalculator(9, 81, "Mod"));
console.log( myCalculator(9, 81, "Modd"));

