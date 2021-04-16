// acount the element and console element and elements number 
// var x=  findOdd(1,2,3,5,7,8,9,80,81,96,89)
// var y=  findEven(1,2,3,5,7,8,9,80,81,96,89)
// var z=  findPrime(55,230)




//  var x=  findOdd(1,2,3,5,7,8,9,80,81,96,89)
console.log('This is odd Number:');
x = findMax(1,2,3,5,7,8,9,80,81,96,89);
function findMax() {
  var i;
  
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i]%2 !==0) {
     var  max = arguments[i];
     console.log(max);
    }
  }
  
}




// var y=  findEven(1,2,3,5,7,8,9,80,81,96,89)
console.log('This is odd Even:');
x = findMax(1,2,3,5,7,8,9,80,81,96,89);
function findMax() {
  var i;
  
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i]%2==0) {
     var  max = arguments[i];
     console.log(max);
    }
  }
  
}




// this is nonPrime Number(1-100)
console.log('this is nonPrime Number:');
for (x=1; x<=100; x++){ 
  for(a=2; a<=x; a++)
  
  if(x%a===0 && a!==x){
        
   console.log(x);
  }  
}




// This is odd Number(1-100)
console.log('This is odd Number:');
for (x=1; x<=100; x++){ 
  
  if(x%2 !==0){
   
    console.log(x);
  }
  
}




// console.log('This is Prime Number:');
// function findMax() = new findMax  {
//     if (findMax%2==0) {
//      var  max = findMax();
//      console.log(max);
//     }
//   }
//   findMax( 55,230);