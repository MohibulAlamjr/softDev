
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

// jQuery fadeToggle() Method
$(document).ready(function(){
  $("button").click(function(){
    $("#div7").fadeToggle();
    $("#div8").fadeToggle("slow");
    $("#div9").fadeToggle(3000);
  });
});
// jQuery fadeTo() Method
$(document).ready(function(){
  $("#btn5").click(function(){
    $("#div10").fadeTo("slow", 0.15);
    $("#div11").fadeTo("slow", 0.4);
    $("#div12").fadeTo("slow", 0.7);
  });
});

// jQuery Effects - Sliding
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

// jQuery slideUp() Method

$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideUp("slow");
  });
});


// jQuery slideToggle() Method
$(document).ready(function(){
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
});
