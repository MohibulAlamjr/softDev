
var fruits = ["Alam", "alam ", "anml ", "abml","abkl"];
fruits.sort(); 
console.log(fruits.toString());

// Reversing
fruits.reverse();
console.log(fruits.toString());

// numaric sort  
var points = [40, 100, 1, 5, 25, 10,43];
points.sort(function(a, b){return a - b});
console.log(points);
// max value 
console.log(points[0]);

// min value 
console.log(points[points.length-1]);

// decending order 
points.sort(function(a, b){return b-a});
console.log(points);


// home work 
// The Compare Function

// random sort 
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points.toString());



// The Fisher Yates Method learn for all

// Math.max 
var points2 = [40, 100, 1, 5, 25, 10];
var max1 = Math.max.apply(null,points2);
console.log(max1);
// Math.min 
var max1 = Math.min.apply(null,points2);
console.log(max1);

// my maximum value 
var points2 = [40, 100, 1, 5, 25, 10];

function max(arr){

    var x = -Infinity;
    for(let i=0; i < arr.length;i++){

        if(x<arr[i]){
            x=arr[i];
        }else{
            x=x;
        }
        

    }

    return x;

}
console.log(max(points2));


// my minimum value 
var points2 = [40, 100, 1, 5, 25, 10];

function min(arr){

    var x = +Infinity;
    for(let i=0; i < arr.length;i++){

        if(x>arr[i]){
            x=arr[i];
        }else{
            x=x;
        }
        

    }

    return x;

}
console.log(min(points2));

