// one click 

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


// double click 


$(document).ready(function(){
  $(".flower").dblclick(function(){
    $(this).hide();
  });
});


$(document).ready(function(){
  $("p.p03").dblclick(function(){
      $(this).hide();
  })
 
 })




$(document).ready(function(){
    $("h1").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });