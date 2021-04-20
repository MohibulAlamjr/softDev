function myFunction(){
    var a = document.getElementById("num").value;
    var b = document.getElementById("num1").value;
    a = parseFloat(a);
    b = parseFloat(b);
    var c = a + b;
    document.getElementById("ans").innerHTML=c;
}
