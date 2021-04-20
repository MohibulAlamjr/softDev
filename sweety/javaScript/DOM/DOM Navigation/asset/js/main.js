
// Child Nodes and Node Values


document.getElementById("hi1").innerHTML = document.getElementById("hi").innerHTML;


document.getElementById("hi3").innerHTML = document.getElementById("hi2").innerHTML;


document.getElementById("hi5").innerHTML = document.getElementById("hi4").innerHTML;


document.getElementById("hi7").innerHTML = document.getElementById("hi6").innerHTML;

document.getElementById("hi9").innerHTML = document.getElementById("hi8").innerHTML;


document.getElementById("id1").innerHTML = document.getElementById("id").innerHTML;


document.getElementById("id3").innerHTML = document.getElementById("id2").innerHTML;

// Chile node 

document.getElementById("nn1").innerHTML = document.getElementById("nn").firstChild.nodeValue;

document.getElementById("nn3").innerHTML = document.getElementById("nn2").firstChild.nodeValue;

document.getElementById("nn5").innerHTML = document.getElementById("nn4").childNodes[0].nodeValue;

// Root Nodes 

alert(document.body.innerHTML);

// Node Name 

document.getElementById("kk1").innerHTML = document.getElementById("kk").nodeName;


// Node Type 

document.getElementById("kk3").innerHTML = document.getElementById("kk2").nodeType;




















