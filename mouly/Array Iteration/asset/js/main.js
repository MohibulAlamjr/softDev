// for each function

var numbers = [12, 22, 34, 65, 87, 35];
numbers.forEach(myFunction);

function myFunction(value) {
    console.log(value);
  }

var numbers1 = [12, 32, 11, 10, 13, 16, 65];
numbers1.forEach(myFunction1);

function myFunction1(value1){
    console.log(value1);
}


// array map function

var numbers2 = [12, 22, 34, 65, 87, 35];
var numbers3 = numbers2.map(myFunction2);

function myFunction2(value2){
    return value2 * 2;
   
}
console.log(numbers3);

var numbers4 = [12, 22, 34, 65, 87, 35];
var numbers5 = numbers4.map(myFunction3);

function myFunction3(value3){
    return value3 * 3;
   
}
console.log(numbers5);


// array filter function

var numbers6 = [10, 5, 7, 9, 21, 85, 23, 22];
var Over20 = numbers6.filter(myFunction4);

function myFunction4(value4){
    return value4 > 20;
}
console.log(Over20);


var numbers7 = [10, 5, 7, 9, 21, 85, 23, 22];
var Over25 = numbers7.filter(myFunction7);

function myFunction7(value5){
    return value5 > 25;
}
console.log(Over25.toString());

// array reduce function 

var numbers8 = [10, 5, 7, 9, 21, 85, 23, 22];
var Sum = numbers8.reduce(myFunction8);

function myFunction8(total,value6){
    return  total + value6 ;
}
console.log("The sum is : " + Sum);



var numbers9 = ["s", "e", "r", "a", "j", "u", "m"];
var name1 = numbers9.reduce(myFunction9);

function myFunction9(total1,value7){
    return  total1 + value7;
}
console.log("The name is : " + name1 );


// array reduce right


var numberss = [102, 52, 71, 92, 21, 85, 23, 22];
var Sum1 = numberss.reduceRight(myFunctionn);

function myFunctionn(totall,valuee){
    return  totall + valuee ;
}
console.log("The sum is : " + Sum1);


var numberss1 = ["s", "e", "r", "a", "j", "u", "m"];
var name2 = numberss1.reduceRight(myFunctionn1);

function myFunctionn1(totall1,valuee1){
    return  totall1 + valuee1 ;
}
console.log("The name is : " + name2);

// every function


var numberss2 = [10, 5, 7, 9, 21, 85, 23, 22];
var every = numberss2.every(myFunctionn2);

function myFunctionn2(valuee2){
    return valuee2 > 21;
}
console.log(every);


var numberss3 = [10, 5, 7, 9, 21, 85, 23, 22];
var every1 = numberss3.every(myFunctionn3);

function myFunctionn3(valuee3){
    return valuee3 > 87;
}
console.log(every1);


// array some function


var numberss3 = [10, 5, 7, 9, 21, 85, 23, 22];
var some = numberss3.some(myFunctionn3);

function myFunctionn3(valuee3){
    return valuee3 > 21;
}
console.log(some);


var numberss4 = [10, 5, 7, 9, 21, 85, 23, 22];
var some1 = numberss4.some(myFunctionn4);

function myFunctionn4(valuee4){
    return valuee4 > 87;
}
console.log(some1);


// array index of

var name3 = ["serajum", "mouly", "munira", "serajum", "munira"];
var name4 = name3.indexOf("munira");
console.log(name4);
var name5 = name3.indexOf("serajum");
console.log(name5);

// array last index of

var name33 = ["serajum", "mouly", "munira", "serajum", "munira"];
var name44 = name33.lastIndexOf("munira");
console.log(name44);
var name55 = name33.lastIndexOf("serajum");
console.log(name55);


// array find function 

var numberss45 = [10, 5, 7, 9, 21, 85, 23, 22];
var find1 = numberss45.find(myFunctionn45);

function myFunctionn45(valuee45){
    return valuee45 > 21;
}
console.log(find1);


var numberss451 = [10, 5, 7, 9, 21, 85, 23, 22];
var find11 = numberss451.find(myFunctionn451);

function myFunctionn451(valuee451){
    return valuee451 > 9;
}
console.log(find11);


// array find index


var numbeerss45 = [10, 5, 7, 9, 21, 85, 23, 22];
var find1i = numbeerss45.findIndex(myFuncctionn45);

function myFuncctionn45(valuuee45){
    return valuuee45 > 21;
}
console.log(find1i);


var nummberss45 = [10, 5, 7, 9, 21, 85, 23, 22];
var find12 = nummberss45.findIndex(myFfunctionn45);

function myFfunctionn45(valluee45){
    return valluee45 > 9;
}
console.log(find12);

