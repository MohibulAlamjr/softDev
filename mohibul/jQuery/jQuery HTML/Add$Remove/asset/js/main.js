
// append
$(document).ready(function(){
  $("#div01").append("<p>hi, Mouly</p>");
})
// prepend
$(document).ready(function(){
  var x="<p>hi, Mouly</p>";
  var y ="<p>hi, sweety</p>";
  $("#div02").prepend(x,y);
})
  //  before 

  $(document).ready(function(){
   
    $("#btn1").click(function(){
      $("#s01").before("<span>Mouly</span>")
    });
  })

  // after
  $(document).ready(function(){
   
    $("#btn2").click(function(){
      var m="<span> sweety</span>";
      $("#s01").after(m);
    });
  })

  //Remove
  $(document).ready(function(){
   
    $("#btn3").click(function(){
      $("#d02").remove();
    });
  })
//empty
  $(document).ready(function(){
   
    $("#btn4").click(function(){
      $("#d03").empty();
    });
  })