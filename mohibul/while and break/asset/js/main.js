// for 
var i = 1;

console.log("comes from for");
for (; i < 10 ;){
  console.log(i);
  i++;

}

//while 
var j=1;
console.log("comes from while");
while( j < 12){
  console.log(j);
  j++;

}

//do while
var z=1;
console.log("comes from do while");
do {
    console.log(z);
    z++;
} while (z<13);


// break 

var myArray=[4,3,5,7,8,9,2];

for(x of myArray){
    var ind="";
    if(x === 8){
        ind='yes! you have this number in this array';
        break;
    }else{
        ind="you don't have this number in this array";
    }
}
console.log(ind);

// continue

var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log(i);
}


// calculator 


function myFun(a,b,c){
  var result = -1;
  switch(c){
    case "sum":
    case "SUM":
    case "Sum":
      result = a+b;
      break;
    case "sub":
    case "Sub":
    case "SUB":
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

console.log(myFun(3,50,"Sum"));


// while,do while,switch