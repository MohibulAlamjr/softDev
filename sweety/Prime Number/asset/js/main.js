// Find Prime Number

 console.log('Prime Number');

 var x = findPrime(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);


 function findPrime() {
   var i,j,flag;
   for (i=0; i<=arguments.length; i++) {
       flag=0;
       for(j=2;j<arguments[i];j++){
         if (arguments[i]%j==0) {
             flag=1;
         }
       }
         if(flag==0){
             console.log(i);
         }
     }
   return x;
 }