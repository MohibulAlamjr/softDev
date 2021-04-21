function myFunction() {
  var myNodelist = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "blue";
  }
}


var myNodelist = document.querySelectorAll("h3");
document.getElementById("demo").innerHTML =
"This document contains " + myNodelist.length + " paragraphs.";



var myNodelist = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
"The innerHTML of the second paragraph is: " +
myNodelist[1].innerHTML;