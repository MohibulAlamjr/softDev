// using for in object 

var x;
var fullName = {
 fName:"Serajum",
 mName:"Munira",
 lName:"Mouly",
 age:23
};

for (x in fullName){
    console.log(fullName[x]);
}


var y;
var colors = {
 one:"black",
 two:"blue",
 three:"red",
 four:"purpel"
};

for(y in colors){
    console.log(colors[y]);
}

// using for in array to get index

var numbers = [12, 45, 67, 32, 47, 98];
var x;

for(x in numbers){
    console.log(numbers[x]);
}



// using for each to get value

var numbers1 = [75, 98, 32, 55, 68, 99];
numbers1.forEach(myFunction);

function myFunction(value){
    console.log(value);
}