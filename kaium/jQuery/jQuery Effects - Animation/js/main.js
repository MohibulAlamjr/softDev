// jQuery animate() - Manipulate Multiple Properties
$(document).ready(function(){
  $("#btn").click(function(){
    $(".style").animate({left: '250px'});
  });
});

// jQuery animate() - Manipulate Multiple Properties
$(document).ready(function(){
  $("#btn2").click(function(){
    $(".style2").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

// jQuery animate() - Using Relative Values
$(document).ready(function(){
  $("#btn3").click(function(){
    $(".style3").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});

// jQuery animate() - Using Pre-defined Values
$(document).ready(function(){
  $("#btn4").click(function(){
    $(".style4").animate({
      height: 'toggle'
    });
  });
});

// jQuery animate() - Uses Queue Functionality
$(document).ready(function(){
  $("#btn5").click(function(){
    var div = $(".style5");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});



$(document).ready(function(){
  $("#btn6").click(function(){
    var div = $(".style6");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});