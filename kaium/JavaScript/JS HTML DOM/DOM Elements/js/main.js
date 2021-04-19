// Finding HTML Element by Id

// intro ID
// var myElement = document.getElementById("intro");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is " + myElement.innerHTML;


// Finding HTML Elements by Tag Name
// Demo ID

// var x = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The text in first paragraph (index 0) is: ' + x[0].innerHTML;

// This example finds the element with id="main", and then finds all <p> elements inside "main":

// main ID
// var x = document.getElementById("main");
// var y = x.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[2].innerHTML;


// Finding HTML Elements by Class Name
// class="intro"
// var x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;



// Finding HTML Elements by CSS Selectors
// var x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro": ' + x[3].innerHTML;


// Finding HTML Elements by HTML Object Collections
// function myFunction() {
//     var x = document.forms["frm1"];
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//       text += x.elements[i].value + "<br>";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }
