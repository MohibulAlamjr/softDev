// The HTMLCollection length

var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
"This document contains " + myCollection.length + " paragraphs.";



var myNodelist = document.getElementsByTagName("h1");
console.log(myNodelist.length);

function myFunction() {
    var myNodelist1 = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myNodelist1.length; i++) {
       
       
        
      myNodelist1[i].style.color = "red";
    
    }
  }

    // DOM node lists 

    var myNodelist = document.querySelectorAll("p");
document.getElementById("demo1").innerHTML =
"The innerHTML of the second paragraph is: " +
myNodelist[1].innerHTML;




function myFunction1() {
    var myNodelist = document.querySelectorAll("p");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      myNodelist[i].style.color = "blue";
    }
  }