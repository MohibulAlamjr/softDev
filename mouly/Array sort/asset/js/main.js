// sorting arrays 

var flowers = ["Rose", "Tuilip", "Lotus", "Daisy", "Beli"];
console.log(flowers.sort());

var food = ["apple", "Ice-cream", "Water", "cocolate"];
console.log(food.sort());

// reversing array

var flowers = ["Rose", "Tuilip", "Lotus", "Daisy", "Beli"];
flowers.reverse;
console.log(flowers.toString());

var food = ["apple", "Ice-cream", "Water", "cocolate"];
food.reverse;
console.log(food.toString());

// numeric sort(ascending order)

var number = [34, 67, 45, 489, 90, 23, 56, 78];
number.sort(function(a, b){return a - b});
console.log(number);


// descending number

var number = [35, 869, 45, 23, 8458, 274, 365, 273];
number.sort(function(a, b){return b - a});
console.log(number);


// highest value
console.log(number[0]);

 // lowest value
 console.log(number[number.length-1]);

// compare function 

console.log('SORT');

function mySort(){
    var number = [54, 67, 23, 49, 9, 57, 23];
    var z = number.sort();
    var alpha = z;


document.getElementById("results").innerHTML=alpha;

}

function mySort1(){
    var number = [54, 67, 23, 49, 9, 57, 23];
    var alpha1 = number.sort(function(a, b){return b - a});
    


document.getElementById("results").innerHTML=alpha1;

}
  

// sorting an array in random order

function mySort2(){

    var number3 = [21, 34, 65, 78, 45, 67, 90];
    var random = number3.sort(function(a, b){return 0.5 - Math.random()});

    document.getElementById("results").innerHTML=random;  

}

// max value on array


var number = [12, 32, 22, 86 ,64 ,1, 34];
var max = Math.max.apply(null,number);
console.log(max);

// min value on array

var number1 = [12, 32, 22, 86 ,64 ,1, 34];
var min = Math.min.apply(null,number1);
console.log(min);

// finding max value using function

var numberr = [3564, 57, 284, 3454, 576, 23];

function myMax(val){

    var x = -Infinity;
    for(let i=0; i < val.length;i++){

        if(x<val[i]){
            x=val[i];
        }else{
            x = x;
        }
        

    }

    return x;

}
console.log(myMax(numberr));



var numberrr = [-3564, -57, - 284, -3454, -576, -23];

function myMax1(val1){

    var x = -Infinity;
    for(let i=0; i < val1.length;i++){

        if(x<val1[i]){
            x=val1[i];
        }else{
            x = x;
        }
        

    }

    return x;

}
console.log(myMax1(numberrr));




var numbeerrr = [3564, 57,  284, 3454, 576, 23];

function myMaax1(vaal1){

    var x = Infinity;
    for(let i=0; i < vaal1.length;i++){

        if(x<vaal1[i]){
            x=vaal1[i];
        }else{
            x = x;
        }
        

    }

    return x;

}
console.log(myMaax1(numbeerrr));



var numberrr2 = [-3564, -57, - 284, -3454, -576, -23];

function myMax11(val11){

    var x = Infinity;
    for(let i=0; i < val11.length;i++){

        if(x<val11[i]){
            x=val11[i];
        }else{
            x = x;
        }
        

    }

    return x;

}
console.log(myMax11(numberrr2));

// finding min value using function

var number3 = [-3564, -57, - 284, -3454, -576, -23];

function myMin(val3){

    var x = -Infinity;
    for(let i=0; i < val3.length;i++){

        if(x>val3[i]){
            x=val3[i];
        }else
    {
            x = 1;
        }
        

    }

    return x;

}
console.log(myMin(number3));



var number4 = [3564, 57, 284, 3454, 576, 23];

function myMin1(vall1){

    var x = -Infinity;
    for(let i=0; i < vall1.length;i++){

        if(x>vall1[i]){
            x=vall1[i];
        }else
        {
            x = " ";
        }
        

    }

    return x;

}
console.log(myMin1(number4));



var number44 = [3564, 57, 284, 3454, 576, 23];

function myMiin1(vaall1){

    var x = Infinity;
    for(let i=0; i < vaall1.length;i++){

        if(x>vaall1[i]){
            x=vaall1[i];
        }else
        {
            x = " ";
        }
        

    }

    return x;

}
console.log(myMiin1(number44));