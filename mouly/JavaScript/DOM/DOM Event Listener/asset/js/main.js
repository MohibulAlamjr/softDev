// addEventListener() method

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello!"
    
});

document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("demo1").innerHTML = 100 + 875;
    
});

document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("demo2").innerHTML = 867 - 875;
    
});


// add an event handler to an even element

document.getElementById("btn3").addEventListener("click", function() {
    alert("Asslamualaikum!");
});

document.getElementById("btn4").addEventListener("click", function(){
    alert("Good Evening");
});


// add many event handler to the same even element 

var x = document.getElementById("btn5");
x.addEventListener("click", myFunction);
x.addEventListener("click",myFunction1);

function myFunction(){
    alert("Hello!");
}

function myFunction1(){
    alert("This is Mouly");
}


var y = document.getElementById("btn6");
y.addEventListener("click", myFun);
y.addEventListener("click", myFun1);

function myFun (){
    alert("Rose");
}

function myFun1(){
    alert("Beli");
}

// another way

var z = document.getElementById("btn7");
 z.addEventListener("click",myFun3);
 z.addEventListener("click", myFun2);


function myFun3(){
    document.getElementById("demo3").innerHTML="Rose";
    document.getElementById("demo3").style.color="Red";
 }

 function myFun2(){
    document.getElementById("demo4").innerHTML="Merigold";
    document.getElementById("demo4").style.color="Pink";
 }

  // three lister in same event element

 var z = document.getElementById("btn8");
 z.addEventListener("click",myFun4);
 z.addEventListener("click", myFun5);
 z.addEventListener("click", myFun6);


function myFun4(){
    document.getElementById("demo5").innerHTML="Apple";
    document.getElementById("demo5").style.color="Blue";
 }

 function myFun5(){
    document.getElementById("demo6").innerHTML="Banana";
    document.getElementById("demo6").style.color="Yellow";
 }

 function myFun6(){
    document.getElementById("demo7").innerHTML="Orange";
    document.getElementById("demo7").style.color="Orange";
 }

 // Add an Event Handler to the window Object

  
 // using function in a function

 var x1=111;
var y1=131;

document.getElementById("TR").addEventListener("click", function(){
    myfun7(x1,y1);
});

function myfun7(x1,y1){
    document.getElementById("PP").innerHTML=x1+y1;
}


var x1="100";
var y1="200";

document.getElementById("TR1").addEventListener("click", function(){
    myfun7(x1,y1);
});

function myfun8(x1,y1){
    document.getElementById("PP1").innerHTML=x1+y1;
}


// Event Bubbling or Event Capturing

document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);


  document.getElementById("para1").addEventListener("click", function() {
    alert("It's White!");
  }, false);
  
  document.getElementById("Div1").addEventListener("click", function() {
    alert("It's Blue!");
  }, false);
  
  document.getElementById("para2").addEventListener("click", function() {
    alert("It's White!");
  }, true);
  
  document.getElementById("Div2").addEventListener("click", function() {
    alert("It's Blue!");
  }, true);


  // removeEventListener() method

  document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo9").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}



document.getElementById("myDIV1").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo11").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV1").removeEventListener("mousemove", myFunction);
}