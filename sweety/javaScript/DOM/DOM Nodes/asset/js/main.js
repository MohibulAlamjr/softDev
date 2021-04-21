// Creating New HTML Nodes

var x = document.createElement("p");
var y = document.createTextNode("This is new.");
x.appendChild(y);

var element = document.getElementById("div");
element.appendChild(x);

// HTML Elements - insertBefore()

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);


// Removing Existing


var elmnt = document.getElementById("p4");
elmnt.remove();


// Removing a Child Node

var parent = document.getElementById("div2");
var child = document.getElementById("p01");
parent.removeChild(child);

// Replacing HTML Elements 

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var parent = document.getElementById("div3");
var child = document.getElementById("p11");
parent.replaceChild(para, child);
