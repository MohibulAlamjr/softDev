
// The click() method

$(document).ready(function(){
    $("h1").click(function(){
      $(this).hide();
    });
  });


// Double Click 

$(document).ready(function(){
    $("p").dblclick(function(){
      $(this).hide();
    });
  });

// For mouseenter()

$(document).ready(function(){
    $("#btn").mouseenter(function(){
      $("#d1").hide();
    });
  });

//   mouseleave() 

$(document).ready(function(){
    $("#d2").mouseleave(function(){
      $("#d").hide();
    });
  });
// Mouse Enter hide and show 

  $(document).ready(function(){
    $("#hh").mouseenter(function(){
        $("#hh1").hide();
        $("#hh2").show();
    });
   
   });


//    On click()


$(document).ready(function(){
    $("p").on("click", function(){
      $(this).hide();
    });
  });


//   blur and focus()

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "orange");
    });
    $("input").blur(function(){
      $(this).css("background-color", "Blue");
    });
  });

// Multiple Events 

$(document).ready(function(){
    $("#jj").on({
      mouseenter: function(){
        $(this).css("background-color", "blue");
      },  
      mouseleave: function(){
        $(this).css("background-color", "orange");
      }, 
      click: function(){
        $(this).css("background-color", "green");
      }  
    });
  });


// HOVER 

// $("#dd")
// .odd()
//   .hide()
// .end()
// .even()
//   .hover(function() {
//     $( this )
//       .toggleClass( ".Out" )
//       .next()
//         .stop( true, true )
//         .slideToggle();
//   });

