var tag1 = document.createElement("h1");
var text1 = document.createTextNode("Bye Bye");
tag1.append(text1);
var d = document.getElementById("div1");
d.append(tag1);



var tag2 = document.createElement("h2");
var text2 = document.createTextNode("mui Borisailla");
tag2.append(text2);
var d2 = document.getElementById("div2");
var beforetag = document.getElementById("p3");
d2.insertBefore(tag2, beforetag);

var elmnt = document.getElementById("p4").remove();

var tag3 = document.createElement("p");
var text3 = document.createTextNode("Dhaka,Barguna");
tag3.append(text3);
var raplaceTag = document.getElementById("p5");
var p = document.getElementById("div3");
p.replaceChild(tag3, raplaceTag);


// remove()
function myFunction() {
    var elmnt = document.getElementById("p2");
    elmnt.remove();

    var elmnt1 = document.getElementById("p1");
    elmnt1.remove();
}


