
// The HTMLCollection Object

var myCollection = document.getElementsByTagName("p");
document.getElementById("01").innerHTML =
"the second paragraph is: " +
myCollection[1].innerHTML;


var myCollection1 = document.getElementsByTagName("p");
document.getElementById("02").innerHTML =
"the First paragraph is: " +
myCollection1[0].innerHTML;


var myCollection2 = document.getElementsByTagName("h1");
document.getElementById("02").innerHTML =
"the First paragraph is: " +
myCollection2[0].innerHTML;


// HTMLCollection Length

var myCollection3= document.getElementsByTagName("p");
document.getElementById("hi").innerHTML = 
"This document contains " + myCollection3.length + " paragraphs.";


// Change the text color of all <p> elements:

function myFun() {
    var myCollection4 = document.getElementsByTagName("h2");
    var i;
    for (i = 0; i < myCollection4.length; i++) {
      myCollection4[i].style.color = "blue";
    }
  }



//    For Node List
// DOM NodeList Object


var myNodelist = document.querySelectorAll("p");
document.getElementById("hh").innerHTML =
"This document contains " + myNodelist.length + " paragraphs.";


function myFun1() {
    var myNodelist1 = document.querySelectorAll("p");
    var j;
    for (j = 0; j < myNodelist1.length; j++) {
      myNodelist1[j].style.color = "gray";
    }
  }