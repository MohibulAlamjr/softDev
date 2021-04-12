// array
var cars = [  "Saab", "Volvo",  "BMW","Hi","Bye"];
console.log(cars[3]);
cars[3]=console.log("Toyota");

var S ={
    fname:'Shovhana',
    lname:'Sweety',
    age:22
}
console.log(S['fname']);


// array can be a object 

var myArray=["Sweety","Shovhana",myfun(),S.age,2,4,6,8,10,12,14,16];
console.log(myArray[3]);
function myfun(){
    var x = 14;
    var y = 10;
    var sum = x+y;
   return sum;
}
console.log(myArray.length);
console.log(myArray[2]);

console.log(myArray[myArray.length-4]);

function indexNum(array,val){
    for(let i=0;i<array.length;i++){
        var index= 'aikhane value nei';
        if(array[i]==val){
            index=i;
            break;
            }
    }
    return index;
}

var mya=['sweety','mouly','kaium','mohibul']
var x = indexNum(myArray,20);
var y = indexNum(mya,'kaium');
console.log(x);
console.log(y);