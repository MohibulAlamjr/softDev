// For Sum 

function mySum(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    a = parseFloat(a);
    b = parseFloat(b);
    var c = a+b;
    document.getElementById("result").innerHTML=c;
}

// For Sub 

function mySub(){
    var a = document.getElementById("num3").value;
    var b = document.getElementById("num4").value;
    a = parseFloat(a);
    b = parseFloat(b);
    var c = a-b;
    document.getElementById("result1").innerHTML=c;
}

// For Mul

function myMul(){
    var a = document.getElementById("num5").value;
    var b = document.getElementById("num6").value;
    a = parseFloat(a);
    b = parseFloat(b);
    var c = a*b;
    document.getElementById("result2").innerHTML=c;
}
// For Div

function myDiv(){
    var x = document.getElementById("num7").value;
    var y = document.getElementById("num8").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x/y;
    document.getElementById("result3").innerHTML=z;
}

// For Mod 

function myMod(){
    var x = document.getElementById("num9").value;
    var y = document.getElementById("num10").value;
    x = parseFloat(x);
    y = parseFloat(y);
    var z = x%y;
    document.getElementById("result4").innerHTML=z;
}

