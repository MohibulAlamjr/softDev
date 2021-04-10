// array
var cars = [
    "Saab", 
    "Volvo", 
    "BMW"
];
console.log(cars[1]);
// object 
var name1 ={
    fname:'mohibul',
    lname:'alam',
    age:24
}
console.log(name1['fname']);


// array can be a object 

var myArray=["Mohibul",myFun(),name1.lname,20,30,100,80,90];
console.log(myArray[2]);
function myFun(){
    var x=20;
    var y=20;
    sum=x+y;
    return sum;
}
// lenght 
console.log(myArray.length);
// last element
console.log(myArray[myArray.length-2]);


// access index number;

function indexNumber(array,val){
    for(let i=0;i<array.length;i++){
        var indexn= 'here is no this type of value';
        if(array[i]==val){
            indexn=i;
            break;
            }
    }
    return indexn;
}

var mya=['sweety','mouly','kaium','mohibul'];
var o = indexNumber(myArray,30);
var y = indexNumber(mya,'sweety');
console.log(o);
console.log(y);

// reach all Element of array 
var fruits = ["Banana", "Orange", "Apple", "Mango"];


for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}




// different rules



fruits.forEach(myFunction);

function myFunction(value) {
    console.log(value);
  } 