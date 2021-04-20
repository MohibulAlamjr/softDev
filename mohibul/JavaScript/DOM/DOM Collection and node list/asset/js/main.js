var myNodelist = document.getElementsByTagName("h1");
console.log(myNodelist.length);

function myFunction() {
    var myNodelist1 = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myNodelist1.length; i++) {
       
       
        
      myNodelist1[i].style.color = "red";
    
    }
  }