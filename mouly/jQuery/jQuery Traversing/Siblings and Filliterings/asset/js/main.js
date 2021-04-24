// siblings 

$(document).ready(function(){
    $("#p1").siblings().addClass('sb01');

});


$(document).ready(function(){
    $(".last").siblings().addClass('sb02');

});

$(document).ready(function(){
    $("h1").siblings().addClass('sb03');

});


// next method 

$(document).ready(function(){
    $("#i1").next().addClass('sb04');
  });
  

  
$(document).ready(function(){
    $("#b2").next().addClass('sb05');
  });
  

  
$(document).ready(function(){
    $("span").next().addClass('sb06');
  });
  

// nextAll 

$(document).ready(function(){
    $("#h2").nextAll().addClass('sb07');
  }); 

  
$(document).ready(function(){
    $("#b2").nextAll("#last").addClass('sb08');
  }); 


  
$(document).ready(function(){
    $("#i1").nextAll().addClass('sb09');
  }); 

//   nextUtil 

$(document).ready(function(){
    $("h2").nextUntil("#l1").addClass('s10');
  });


  
$(document).ready(function(){
    $("h2").nextUntil("#i1").addClass('s11');
  });


  
$(document).ready(function(){
    $("h2").nextUntil("#last").addClass('s12');
  });


//   prev 


$(document).ready(function(){
    $("#i1").prev().addClass('sb04');
  });
  

  
$(document).ready(function(){
    $("#b2").prev().addClass('sb05');
  });
  

  
$(document).ready(function(){
    $("span").prev().addClass('sb06');
  });

//   prev All 


$(document).ready(function(){
    $("#h2").prevAll().addClass('sb07');
  }); 

  
$(document).ready(function(){
    $("#b2").prevAll("#last").addClass('sb08');
  }); 


  
$(document).ready(function(){
    $("#i1").prevAll().addClass('sb09');
  }); 



//   prevUtil 



$(document).ready(function(){
    $("h2").prevUntil("#l1").addClass('s10');
  });


  
$(document).ready(function(){
    $("h2").prevUntil("#i1").addClass('s11');
  });


  
$(document).ready(function(){
    $("h2").prevUntil("#last").addClass('s12');
  });
