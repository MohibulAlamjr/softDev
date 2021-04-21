function holud (b){
    console.log(b + " yelllow night");
}
holud("sweety's");
holud("mouly's");
holud("kaium's");
 


function sum (a,b){
    var c=a+b;
    console.log(c);
}

sum(3,7);
sum(30,2);
sum(3,79);
sum(8,9);
sum(5,7);


function sub(d,e){
    var f=d-e;
    console.log(f);
}
sub (3,7);
sub (30,2);
sub (3,79);
sub (8,9);
sub (5,7);


function string (m,n){
var x=m+n;
console.log(x);
}

string ("5","6");

function calculator (a,b,c){
    if(a==="sum"){
        var result=b+c;
    }

    else if(a==="sub"){
        var result=b-c;
    }

    else if(a==="div"){
        var result=b/c;
    }
    else if (a==="multi"){
        var result=b*c;
    }
    else {
        result="You are wrong"
    }
    return result;
}

var P=calculator ("sum",8,9);
console.log(P);

console.log(calculator ("sub",8,9));
console.log(calculator ("div",8,9));
console.log(calculator ("multi",8,9));
console.log(calculator ("sUb",8,9));