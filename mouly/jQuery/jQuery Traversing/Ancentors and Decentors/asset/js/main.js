// parent 

$(document).ready(function(){
    $(".s1").parent().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("li").parent().addClass('parent1');
  });


  $(document).ready(function(){
    $("div").parent().addClass('parent2');
  });

  $(document).ready(function(){
    $(".s1").parent().addClass('parent3');
  });


  $(document).ready(function(){
    $("span").parent().addClass('parent5');
  });


  $(document).ready(function(){
    $("#b1").parent().addClass('parent6');
  });



// parents 



$(document).ready(function(){
  $(".div1").parents().addClass('parents1');
});


$(document).ready(function(){
  $(".g1").parents().addClass('parents2');
});



$(document).ready(function(){
  $("#r1").parents().addClass('parents3');
});



$(document).ready(function(){
  $(".c2").parents().addClass('parents4');
});



$(document).ready(function(){
  $("#a1").parents().addClass('parents6');
});


// presentutil 


$(document).ready(function(){
  $("#ff").parentsUntil().addClass('parentsu1');
});



$(document).ready(function(){
  $("#th").parentsUntil().addClass('parentsu2');
});



$(document).ready(function(){
  $("#hr").parentsUntil().addClass('parentsu3');
});



$(document).ready(function(){
  $("#kk").parentsUntil().addClass('parentsu4');
});

