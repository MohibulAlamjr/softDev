function changeText(id) {
    id.innerHTML = "Ooops!";
  }

 function changeDate(x){
    x.innerHTML = Date();
 }

 document.getElementById("btn").onclick = myFun;

 function myFun(){
     document.getElementById("demo").innerHTML = Date();
 }

 function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

// onmouseover

function myChange(x){
    x.innerHTML="hlw";
}

function myChange1(x){
    x.innerHTML="hi";
}


// onmousedown, onmouseup and onclick Events

function over(x){
    x.innerHTML="kaium";
}

function up(x){
    x.innerHTML="sweety";
}