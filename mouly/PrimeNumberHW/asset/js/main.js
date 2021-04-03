console.log('Prime Numbers:')
 x=findPrime(55,56,57,58,59,60);
 var i,numbers;
 function findPrime(){
     for(i=55; i < arguments.length; i++){
         if(arguments[i] %59!==0){
             numbers = arguments[i];
             console.log(numbers);
         }
     }
 }
 console.log(x);