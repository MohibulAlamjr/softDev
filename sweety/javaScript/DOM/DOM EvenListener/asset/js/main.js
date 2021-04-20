
// Add Even Listener 

document.getElementById("button").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("id").innerHTML = Date();
}


document.getElementById("button1").addEventListener("click", displayDate1);

function displayDate1() {
  document.getElementById("id1").innerHTML = Date();
}


document.getElementById("button2").addEventListener("mouseover", displayDate2);

function displayDate2() {
  document.getElementById("id2").innerHTML = Date();
}

document.getElementById("button3").addEventListener("mouseout", displayDate3);

function displayDate3() {
  document.getElementById("id3").innerHTML = Date();
}

// Add an Event Handler to an Element

document.getElementById("Button").addEventListener("click", function() {
    alert("Are You softDevian?");
  });

  document.getElementById("Button1").addEventListener("mouseover", function() {
    alert("Are You softDevian?");
  });


  document.getElementById("Button2").addEventListener("mouseout", function() {
    alert("Are You softDevian?");
  });


  // Add Many Event Handlers to the Same Element 


  var x = document.getElementById("btn");
x.addEventListener("mouseover",fFunction);
x.addEventListener("mouseover", myFunction);

function fFunction() {
  alert ("Are You Robot?");
}

function myFunction() {
  alert ("OK");
}



//   work in same tag

var x = document.getElementById("btn1");

 x.addEventListener("click",hello);
 x.addEventListener("click", hello1);

 function hello(){
    document.getElementById("hi").innerHTML="Welcome";
 }

 function hello1(){
    document.getElementById("hi1").innerHTML="softDevians";
    document.getElementById("hi1").style.color="red";
 }


 var y = document.getElementById("btn2");

 y.addEventListener("mouseout",hello2);
 y.addEventListener("mouseout", hello3);

 function hello2(){
    document.getElementById("hi2").innerHTML="Welcome";
    document.getElementById("hi2").style.color="blue";
 }

 function hello3(){
    document.getElementById("hi3").innerHTML="softDevians";
    document.getElementById("hi3").style.color="gray";
 }


 var z = document.getElementById("btn3");

 z.addEventListener("mouseover",hello4);
 z.addEventListener("mouseover", hello5);

 function hello4(){
    document.getElementById("hi4").innerHTML="Welcome";
    document.getElementById("hi4").style.color="blue";
 }

 function hello5(){
    document.getElementById("hi5").innerHTML="softDevians";
    document.getElementById("hi5").style.color="gray";
 }

//  different types to the same element(three in one)


var i = document.getElementById("mybutton");
i.addEventListener("mouseover", mouseover);
i.addEventListener("click", click);
i.addEventListener("mouseout", mouseout);

function mouseover() {
  document.getElementById("three").innerHTML += "Hello world!<br>";
}

function click() {
  document.getElementById("three").innerHTML += "click <br>";
}

function mouseout() {
  document.getElementById("three").innerHTML += "I am here<br>";
}


var i = document.getElementById("mybutton1");
i.addEventListener("mouseover", mouseover1);
i.addEventListener("click", click1);
i.addEventListener("mouseout", mouseout1);

function mouseover1() {
  document.getElementById("three1").innerHTML = "Hello world!<br>";
}

function click1() {
  document.getElementById("three1").innerHTML = "click <br>";
}

function mouseout1() {
  document.getElementById("three1").innerHTML = "I am here<br>";
}

// Passing VREyeParameters(function in funtion)

var k = 10;
var l = 7;

document.getElementById("hii").addEventListener("click", function() {
  myCow(k,l);
})

function myCow(k, l){
  document.getElementById("hhh").innerHTML = k * l;
} 



var k1 = 10;
var l1 = 10;
document.getElementById("hii1").addEventListener("click", function() {
  myCow1(k1,l1);
});

function myCow1(k1,l1){
  document.getElementById("hhh1").innerHTML = k1 + l1;
} 

// Event Bubbling or Event Capturing


document.getElementById("sweety").addEventListener("click", function() {
  alert("You clicked the blueviolet place");
}, false);

document.getElementById("sweety1").addEventListener("click", function() {
  alert("You clicked the cornsilk place");
}, false);

document.getElementById("shova").addEventListener("click", function() {
  alert("You clicked the darkgolden place!");
}, true);

document.getElementById("shova1").addEventListener("click", function() {
  alert("You clicked the crimson place!");
}, true);


// trying another

// document.getElementById("sho").addEventListener("mouseover", function() {
//   alert("You clicked the darkgolden place!");
// }, true);

// document.getElementById("sho1").addEventListener("mouseover", function() {
//   alert("You clicked the crimson place!");
// }, true);


// document.getElementById("sweet").addEventListener("mouseout", function() {
//   alert("You clicked the blueviolet place");
// }, false);

// document.getElementById("sweet1").addEventListener("mouseout", function() {
//   alert("You clicked the cornsilk place");
// }, false);

// REMOVE 

document.getElementById("mine").addEventListener("mousemove", Remove);

function Remove() {
  document.getElementById("mine2").innerHTML = Math.random();
}

function remove() {
  document.getElementById("mine").removeEventListener("mousemove", Remove);
}

















  