// For tagName 

var a = document.getElementsByTagName("p");
document.getElementById("One").innerHTML = a[1].innerHTML;

// Tag Name for in a Div 

var b = document.getElementById("Div");
var c = b.getElementsByTagName("p");

document.getElementById("Two").innerHTML= c[0].innerHTML;