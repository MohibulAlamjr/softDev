document.getElementById("myfastcall").innerHTML='hi puitee';

// get by tag name 

var x = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = x[2].innerHTML;

// get by tag name in a div 
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

document.getElementById("demo2").innerHTML= y[2].innerHTML;


//get element by class name

var x = document.getElementsByClassName("intro");

document.getElementById("demo3").innerHTML= x[1].innerHTML;

//

var x = document.querySelectorAll("p.intro1");

document.getElementById("demo4").innerHTML = x[2].innerHTML;


// get value from form

function myFun(){
 var t = document.forms["frm"];
 var text=" ";

 for(let i=0; i<t.length;i++){
     text += t.elements[i].value + "<br>";
    //  "mohibul <br> alam <br> 24 <br> Login"
 }
 document.getElementById("demo5").innerHTML= text;
}

