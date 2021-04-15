// // FOR
// var i =1;

// for(; i<10 ;)
// {
//     console.log(i);
//     i++;
// }
// // while

// var j=0;
// while(j<12){
//     console.log(j);
//     j++
// }

// // do while

// var z=0;
// console.log(Comes From do while);
// do{
//     console.log(z);
// } while(z<13);

// Comparing For and While
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;

for (;cars[i];) {
    console.log(cars[i]);
  i++;
}

var ca = [4,1,2,5,1,];
for(x of ca){
    var ind = " ";
if(x ===5){
    var ind="Yes!";
    break;
}
else{
    ind="NO";
}
}
console.log(ind);


// The Continue Statement



var ca = [4,1,2,5,1,4,5,2,1];
for(x in ca){
    var ind1 = -Infinity;
if(ca[x]===5){
    var ind1=x;
    
    console.log(ind1);
}
// else{
//     ind1="NO";
// }
}
