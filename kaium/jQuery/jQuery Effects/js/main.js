
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

