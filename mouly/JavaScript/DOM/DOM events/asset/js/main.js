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

// onmouse and onmouseout events

function mOver(obj) {
    obj.innerHTML = "Good Evening"
  }
  function mOut(obj) {
    obj.innerHTML = "Good Noon"
  }  


  function mOver1(ob){
      ob.innerHTML = "From Jhenidah"
  }

  function mOut1(ob){
      ob.innerHTML = " This is Mouly"
  }

  // onmousedown, onmouseup and onclick Events

  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Pink";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="White";
  }


  function over(x){
    x.innerHTML="Blue";
}

function up(x){
    x.innerHTML="Black";
}

function over1(x){
    x.innerHTML="Munira";
}

function up1(x){
    x.innerHTML="Mouly";
}


