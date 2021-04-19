// For tagName 

var a = document.getElementsByTagName("p");
document.getElementById("One").innerHTML = a[1].innerHTML;

// Tag Name for in a Div 

var b = document.getElementById("Div");
var c = b.getElementsByTagName("p");

document.getElementById("Two").innerHTML= c[0].innerHTML;

// Get Element by Class Name


var a = document.getElementsByClassName("Hi");

document.getElementById("Three").innerHTML= a[1].innerHTML;

// Get Element By CSS 

var a = document.getElementsByClassName("hello");

document.getElementById("Four").innerHTML= a[1].innerHTML;

// Another one 

var x = document.querySelectorAll("p.hello");

document.getElementById("Four").innerHTML = x[2].innerHTML;

// For form 

function myForm(){
    var t = document.forms["from"];
    var text=" ";
   
    for(let i=0; i<t.length;i++){
        text += t.elements[i].value + "<br>";
    document.getElementById("Six").innerHTML= text;
   }