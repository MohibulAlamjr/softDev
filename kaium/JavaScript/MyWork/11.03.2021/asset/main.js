function holud(a){
    console.log(a+"yellow night")
}
holud("Sweety's");
holud("mouly's");
holud("kaium's");
//sum Function.
function sum(a,b){
    var c=a+b;
    console.log(c);
}
sum(1,2);
sum("Hellow","world");

function calculator(a,b,c){
    if(a==="sum"){
        var result=b+c;

    }
    else if(a==="sub"){
         result=b-c;
    }
    else if(a==="ml"){
          result=b*c;
    }
    else if(a==="div"){
          result=b/c;
    }
    else {
        result="Something is wrong";
    }
    return result;
}
var t =calculator("ml",8,7);
console.log(t);

console.log(calculator("sum",4,5));

