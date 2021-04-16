// while loop

var i = 1;

while(i < 15){

console.log(i);
i++;
}

var j = 3;

while(j < 20){

    console.log(j);
    j++
}


//do while
var k = 1;

do {
    console.log(k);
    k++;
}
 while (k < 15);



 var m = 1;

 do {
     console.log(m);
     m++;
 }
  while (m < 30);
 
 
// break

var myNumber=[41,33,25,75,85,59,42];
var z = 1;
for(x of myNumber){
    
    if(x === 100){
       z = 1;
        break;
    }else{
        z = 30;
    }
}
console.log(z);



var myNumber=[41,33,25,75,85,59,42];
var z = 1;
for(x of myNumber){
    
    if(x === 75){
       z = 1;
        break;
    }else{
        z = 30;
    }
}
console.log(z);





var myString =["rose", "lily", "tuilip", "beli"];

for(x of myString){
    var text="";
    if(x === "rseo"){
        text ="yes";
        break;
    }else{
        text ="no";
    }
}
console.log(text);


var myString =["rose", "lily", "tuilip", "beli"];

for(x of myString){
    var text="";
    if(x === "tuilip"){
        text ="yes";
        break;
    }else{
        text ="no";
    }
}
console.log(text);



// continue

var i;
for (i = 0; i < 22; i++) {
  if (i === 13) { continue; }
  console.log(i);
}

var j;
for (j = 0; j < 20; j++) {
  if (j === j) { continue; }
  console.log(j);
}

var k;
for (k = 0; k < 11; k++) {
  if (k === 1) { continue; }
  console.log(k);
}