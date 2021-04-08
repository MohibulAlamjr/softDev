
function myFun(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x+y;
    document.getElementById("result").innerHTML=z;
}

function myFun1(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x-y;
    document.getElementById("result").innerHTML=z;
}


function myFun2(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x*y;
    document.getElementById("result").innerHTML=z;
}

function myFun3(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x/y;
    document.getElementById("result").innerHTML=z;
}

function myFun4(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x%y;
    document.getElementById("result").innerHTML=z;
}

