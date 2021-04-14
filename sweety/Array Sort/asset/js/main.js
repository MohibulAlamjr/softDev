// Sort 

var Name = ["Sweety","Akter","Shovhana","Islam","Mouly"];
Name.sort();
console.log(Name.toString());

var letter = ["S","H","O","V","H","A","N","A"];
letter.sort();
console.log(letter.toString());

// Reversing

Name.reverse();
console.log(Name.toString());

letter.reverse();
console.log(letter.toString());

// Numeric sort 

var num = [30,20,40,50,60,15,12];
function myFunction(){
num.sort(function(i,n){return i-n});
console.log(num);
}

var N = [2,4,8,5,0,1,7,3,6];
function myFunction1(){
N.sort(function(x,y){return x - y});
}
console.log(N);

// Maximum Value 

console.log(num[0]);
console.log(N[6]);

// Minimum value 

console.log(num[num.length-1]);
console.log(N[N.length-1]);

// Decending Order 

var num = [30,20,40,50,60,15,12];
num.sort(function(a,b){return b - a});
console.log(num);

N.sort(function(x,y){return y - x});
console.log(N);

// Random Sort 

num.sort(function(a,b){return 0.5 - Math.random});
console.log(num.toString());

N.sort(function(x,y){return 0.5 - Math.random});
console.log(N.toString());


// Math.Maximum

var number = [30,20,40,50,60,15,12];
var M = Math.max.apply(null,number);
console.log(M);

var N = [2,4,8,5,0,1,7,3,6];
var NN = Math.max.apply(null,N);
console.log(NN);

// Math Minimum

var number = [30,20,40,50,60,15,12];
var M = Math.min.apply(null,number);
console.log(M);

var N = [2,4,8,5,0,1,7,3,6];
var NN = Math.min.apply(null,N);
console.log(NN);

// MAX 
var number = [30,20,40,50,60,15,12];
function max(a){
    var c = -Infinity;
    for(let i = 0; i < a.length;i++){
        if(c<a[i]){
            c=a[i];
        }
        else{
            c=c;
        }
    }
    return c;
}

console.log(max(number));

// Another one 

var number1 = [30,20,40,50,60,15,12];
function max1(b){
    var d = -Infinity;
    for(let i = 0; i < d.length;i++){
        if(d>a[i]){
            d=b[i];
        }
        else{
            d=d;
        }
    }
    return d;
}

console.log(max1(number1));

// Minimum

var number = [30,20,40,50,60,15,12];
function min(a){
    var c = +Infinity;
    for(let i = 0; i < a.length;i++){
        if(c>a[i]){
            c=a[i];
        }
        else{
            c=c;
        }
    }
    return c;
}

console.log(min(number));


// Another one 

var number = [30,20,40,50,60,15,12];
function min1(a){
    var c = +Infinity;
    for(let i = 0; i < a.length;i++){
        if(c<a[i]){
            c=a[i];
        }
        else{
            
        }
    }
    return c;
}

console.log(min1(number));








