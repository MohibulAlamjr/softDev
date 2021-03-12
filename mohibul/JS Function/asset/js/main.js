function holud(a){
    console.log(a+" yellow night");
}


holud("sweety's");
holud("mouly's");
holud("kaium's");


// sum function
function sum(a,b){
 var c=a+b;
 console.log(c);
}

sum(3,4);
sum(9,4);
sum(3,5.5);
sum(3,40);
sum(30,4);
sum(35,4);



function calculator(a,b,c){

    if(a==="sum"){
        var result=b+c;
    }
    else if(a==="sub"){
        result=b-c;
    }
    else if(a==="mul"){
        result=b*c;
    }
    else if(a==="div"){
        result=b/c;
    }else{
        result="Something is Wrong";
    }
    
    return result;

}
 

console.log(calculator("sum",4,5));
console.log(calculator("sub",6,5));
console.log(calculator("mul",4,6));
console.log(calculator("div",4,5.50));



