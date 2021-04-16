


function callFun(){
     x = document.getElementById("number1").value;
     y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);

}



function myFun(){
    callFun();
    var z = x+y;
   result(z);
}

function myFun1(){
    callFun();
    var z = x-y;
    result(z);
}


function myFun2(){
    callFun();
    var z = x*y;
    result(z);
}

function myFun3(){
    callFun();
    var z = x/y;
    result(z);
}

function myFun4(){
    callFun();
    var z = x%y;
    result(z);
}

function result(z){
    document.getElementById("result").innerHTML=z;
}