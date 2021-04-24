
$(document).ready(function(){
    $("#dd").click(function(){
      alert("Background color = " + $("p").css("background-color"));
    });
  });

// return 

  $(document).ready(function(){
    $("#bttn").click(function(){
      alert("Background color = " + $("#hi1").css("background-color"));
    });
  });



  $(document).ready(function(){
    $("#bttn1").click(function(){
      alert("Background color = " + $("#hi3").css("background-color"));
    });
  });


  
  $(document).ready(function(){
    $("#bttn2").click(function(){
      alert("Color = " + $("#hi1").css("color"));
    });
  });


// CSS Property 

$(document).ready(function(){
  $("#btn").click(function(){
    $("#ok").css({"background-color":"red","text-align": "center"});
  });
});


$(document).ready(function(){
  $("#btn2").click(function(){
    $("#ok2").css({"color":"gray","text-align": "center" ,"font-size":"300%"})
  });
});


$(document).ready(function(){
  $("#btn3").click(function(){
    $("#o , #o1 , #o2 , #o3").css({"background-color":"gray","text-align": "center" ,"font-size":"200%"})
  });
});

