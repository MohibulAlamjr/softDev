// finding html element by id

document.getElementById("demo").innerHTML = "THIS IS MOULY";
document.getElementById("demo2").innerHTML = "Assalamualaikum";

// finding html element by tag

var x = document.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = "The flower is " + x[0].innerHTML;



// finding html elements by tag in a div


var x = document.getElementById("fruits");
var y = x.getElementsByTagName("p");

document.getElementById("demo4").innerHTML= y[3].innerHTML;

//finding html element by class name

var z = document.getElementsByClassName("food");
document.getElementById("demo5").innerHTML= z[0].innerHTML;


//   finding html elements by cee selectors

var x = document.querySelectorAll("p.animal");
document.getElementById("demo6").innerHTML = x[2].innerHTML;


// finding elements by html object collections

function myFun() {
    var n = document.forms["box"];
    var text = "";
    var m;
    for (m = 0; m < n.length ;m++) {
      text += n.elements[m].value + "<br>";
    }
    document.getElementById("demo7").innerHTML = text;
}