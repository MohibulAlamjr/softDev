

var id = null;
function myMove() {
  var elem = document.getElementById("animate");  
   
  var pos = 0;
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
  var elem = document.getElementById("animate1");  
   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }

 

}
