// Find odd number

console.log('Odd numbers:');
x = findOdd(2,4,5,8,9,1,23,35);

function findOdd() {
  var i;
  var number;
  var count=0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] %2!==0) {
      number = arguments[i];
      count=count+1;
      console.log(number);
      
     
    }
    
  }
  return count;
}

console.log(x);


console.log('Odd numbers:');
x1=findOdd1(3,5,7,3,11,86,93,11,54,87);

function findOdd1(){
  var i,number1;
  var count=0;
  for(i=0;i < arguments.length; i++){
    if(arguments[i] %2!==0){
      number1 = arguments[i];
      count=count+1;
      console.log(number1);
    }
  }
  return count;
}

console.log(x1);


console.log('Odd numbers:');
x2=findOdd2(4,46,434,847,43,98,35,222);

function findOdd2(){
  var i,number2;
  var count=0;
  for(i=0;i < arguments.length; i++){
    if(arguments[i] %2!==0){
      number2 = arguments[i];
      count=count+1;
      console.log(number2);
    }
  }
  return count;
}

console.log(x2);

