// Creating New HTML Elements (Nodes)

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);


var x = document.createElement("Rose");
var y = document.createTextNode("Beli");
x.append(y);
var z = document.getElementById("demo");
z.append(x);



var x1 = document.getElementById("Serajum");
var y1 = document.getElementById("Mouly");
x1.append(y1);
var z1 = document.getElementById("demo1");
z1.append(x1);


// Creating new HTML Elements - insertBefore()


var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div2");
var child = document.getElementById("p11");
element.insertBefore(para,child);


var x2 = document.createElement("h");
var y2 = document.createTextNode("Banana.");
x2.appendChild(y2);

var element1 = document.getElementById("div3");
var child1 = document.getElementById("p011");
element1.insertBefore(x2,child1);


// Removing Existing HTML Elements

function myFunction() {
    var elmnt = document.getElementById("pp1");
    elmnt.remove();
  }

  function myFunction1() {
    var elmnt = document.getElementById("pp22");
    elmnt.remove();
  }

  



