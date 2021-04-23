// parent 
$(document).ready(function(){
    $("span").parent().addClass('fparent');
  });

// parent
  $(document).ready(function(){
    $("b").parent().addClass('fparent2');
  });
//parents 
$(document).ready(function(){
    $("b").parents('div').addClass('fparent3');
  });
//   parentsUntil
  $(document).ready(function(){
    $("span").parentsUntil('body').addClass('fparent4');
  });

//   find
  $(document).ready(function(){
    $("div").find(".s01").addClass('fparent5');
  });

