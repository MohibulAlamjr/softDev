console.log('Function');

function MyFunction(a){
    console.log(a,"I am fine.");
}
MyFunction('Hi!');
MyFunction('Hello!');
MyFunction('Yes!');
MyFunction('Yeah!');

// SUM 

function sum(a,b){
    var c=a+b;
    console.log(c);
}
sum(2,5);
sum("Me","You");

// SUB 

function sub(a,b){
    var c=a-b;
    console.log(c);
}
sub(2,5);

// MOD 

function mod(a,b){
    var c=a%b;
    console.log(c);
}
mod(27,5);

// CALCULATOR

function calculator(a,b,c){
    if(a==="sum"){
         result=b+c;
    }
    else if(a==="sub"){
         result=b-c;
    }
    else if(a==="mul"){
         result=b*c;
    }
    else if(a==="div"){
         result=b/c;
    }
    else if(a==="mod"){
        result=b%c;
    }
    else{
       result=" something is error";
    }
    return result;
}
var s=calculator("sum",10,12);
console.log(s);



// CALCULATOR2

function calculator(a,b,c){
    if(a==="sum"){
         result=b+c;
    }
    else if(a==="sub"){
         result=b-c;
    }
    else if(a==="mul"){
         result=b*c;
    }
    else if(a==="div"){
         result=b/c;
    }
    else if(a==="mod"){
        result=b%c;
    }
    else{
       result=" something is error";
    }
    return result;
}
console.log(calculator("mul",10,12));

