
// jQuery hide() and show()

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide(1000);
  });
  $("#show").click(function(){
    $("p").show(2000);
  });
});

// jQuery toggle()
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#p1").toggle(1000);
     $("#p2").toggle(1000);
  });
});

// jQuery Effects - Fading

// jQuery fadeIn() Method
$(document).ready(function(){
  $("#btn2").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});


// jQuery fadeOut() Method
$(document).ready(function(){
  $("#btn3").click(function(){
    $("#div4").fadeOut();
    $("#div5").fadeOut("slow");
    $("#div6").fadeOut(3000);
  });
});