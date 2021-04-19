var id = null;
function myMove() {
  var elem = document.getElementById("animate");   
   
  var pos = 10;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }

  
}


var id = null;
function myMove1() {
  var elem1 = document.getElementById("animate1");   
   
  var pos1 = 0;
  clearInterval(id);
  id1 = setInterval(frame1, 5);
  function frame1() {
    if (pos1 == 350) {
      clearInterval(id1);
    } else {
      pos1++; 
      elem1.style.right = pos1 + "px"; 
      
      elem1.style.top= pos1 + "px";
    }
  }
}

