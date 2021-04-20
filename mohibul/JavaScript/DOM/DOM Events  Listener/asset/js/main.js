
document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML=5+9;
  });



//   work in same tag

var x = document.getElementById("btn");

 x.addEventListener("click",myFun1);
 x.addEventListener("click", myFun2);

 function myFun1(){
    document.getElementById("demo1").innerHTML="Sweety"
 }

 function myFun2(){
    document.getElementById("demo2").innerHTML="Mouly";
    document.getElementById("demo2").style.color="blue";
 }

//  three Listener in one

var x = document.getElementById("btn1");
var y = document.getElementById("demo3");
x.addEventListener("click",myFun3);
x.addEventListener("mouseover",myFun4);
x.addEventListener("mouseout",myFun5);

function myFun3(){
    y.innerHTML += "Mouly <br>";

}
function myFun4(){
    y.innerHTML += "Sweety <br>";
    
}
function myFun5(){
    y.innerHTML += " Kaium <br>";
    
}

// using function in function

var x1=10;
var y1=13;

document.getElementById("btn2").addEventListener("click", function(){
    myfun6(x1,y1);
})

function myfun6(x1,y1){
    document.getElementById("demo4").innerHTML=x1+y1;
}

// remove

document.getElementById("myDIV").addEventListener("mousemove",myfun7);
function myfun7(){
    document.getElementById("demo10").innerHTML=Math.random();
}

document.getElementById("myBtn5").addEventListener("click",function(){
    document.getElementById("myDIV").removeEventListener("mousemove", myfun7);
})
