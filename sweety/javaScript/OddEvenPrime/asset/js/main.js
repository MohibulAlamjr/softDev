// Find Odd NUmber 

x = findODD(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);


function findODD() {
  var i;
  var result;
  for (i=0; i<arguments.length; i++) {
    if (arguments[i]%2==1) {
      result = arguments[i];
      console.log(result);
    }
  }
}