var myNodelist = document.getElementsByTagName("h2");
console.log(myNodelist.length);


function myFunction() {
  var myNodelist = document.querySelectorAll("p");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var b = 0xf;  
    var p = 0xC4482D
    myNodelist[i].style.color = "#f4482D";
    b += 0x99;
  }
}
