// parent 

$(document).ready(function(){
    $("span").parent().addClass('parent');
  });

// parent

  $(document).ready(function(){
    $("i").parent().addClass('parent2');
  });

//parents 

$(document).ready(function(){
    $("i").parents('div').addClass('parent3');
  });

//   parentsUntil

  $(document).ready(function(){
    $("span").parentsUntil('body').addClass('parent4');
  });

//   find
  $(document).ready(function(){
    $("div").find(".01").addClass('parent5');
  });
