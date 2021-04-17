// for conditions 

var hour = new Date().getHours(); 
var day;
if (hour > 18) {
  day = "Good morning";
} else {
  day = "Good noon";
}

console.log(day);


var hour = new Date().getHours(); 
var day1;
if (hour > 9) {
  day1 = "Good morning";
} else if (hour > 20 ){
  day1 = "Good noon";
} else{
    day1 = "Good afternoon";
}

console.log(day1);



var x = 10;

if (x > 5){
    result = "It is greater than 5";
}

else {
    result = "It is lesser than 5";
}

console.log(result);


var x = 20;

 if(x > 40){
     results = "It is greater.";
 }
 else if(x < 40){
     results = "It is smaller.";
 }

 else {
     reults = "It is false."
 }

 console.log(results);