document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
document.getElementById("id03").innerHTML = document.getElementById("id01").nodeName;

// append node

var tag1 = document.createElement("h1");
var text1 = document.createTextNode("Bye Bye");
tag1.append(text1);
var d = document.getElementById("demo1");
d.append(tag1);



// append before

var tag2 = document.createElement("h1");
var text2 = document.createTextNode("Ami Rajshahian");
tag2.append(text2);

var d2 = document.getElementById("demo2");
var beforeTag = document.getElementById("p03");

d2.insertBefore(tag2,beforeTag);

// remove 
 document.getElementById("p02").remove();



 var tag3= document.createElement("p");
 var text3= document.createTextNode("chat-gaiya");
 tag3.append(text3);
 var replaceTag = document.getElementById("p04");
 var p = document.getElementById("demo3");

 p.replaceChild(tag3,replaceTag);

