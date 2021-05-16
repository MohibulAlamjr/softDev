
// Slide Troggle 

$(document).ready(function(){
    $("#p").click(function(){
      $("#lorem1").toggle(200);
    });
  });

// Second Troggle 

$(document).ready(function(){
  $("#Laboratory").click(function(){
    $("#lorem2").slideToggle(200);
  });
});

// Third Toggle 


$(document).ready(function(){
  $("#Diagnostic").click(function(){
    $("#lorem3").slideToggle(200);
  });
});


// Navbar


$(window).scroll(function() {
  
  let position    =   $(this).scrollTop();
    if (position <= 10000) {
      $('.nav-menu').addClass('costum-navbar');
    } else {
      $('.nav-menu').removeClass('costum-navbar');
    }
  
});






















