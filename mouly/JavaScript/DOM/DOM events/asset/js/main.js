  // reacting on events

  function changeText(text){
      text.innerHTML = "Oooops";
  }

  function changeText(text1){
    text1.innerHTML = "Good Morning";
}

function changeText (id){
    id.innerHTML = " Hlw";
}

function changeDate(date){
    date.innerHTML = Date ();
}

function changedate(time){
    time.innerHTML = Date ();
}

function displayDate(dis){
    dis.innerHTML = Date ();
}

 // assign event using thr html dom 

 document.getElementById("btn").onclick = myFun;

 function myFun (){
     document.getElementById("demo").innerHTML = Date ();
 }

 document.getElementById("btn1").onclick = myFun1;

 function myFun1(){
    document.getElementById("demo1").innerHTML = "Good Evening" ;
 }


  // onchange event

  function myFun2() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function myfun3(){
    var y = document.getElementById("lname");
    y.value = y.value;
}

function myfun4(){
    var z = document.getElementById("dis");
    z.value = z.value.toUpperCase();
}