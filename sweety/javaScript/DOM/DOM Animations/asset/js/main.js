var id = null;
function move() {
  var elem = document.getElementById("Animation");  
   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

var id = null;
function move1() {
  var elem = document.getElementById("Animation1");  
   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame1, 10);
  function frame1() {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++;
      
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}
