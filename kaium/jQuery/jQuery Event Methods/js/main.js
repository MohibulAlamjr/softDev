// click()

$(document).ready(function(){
  $("#a1").click(function(){
    $(this).hide();
  });
});

// dblclick()
$(document).ready(function(){
  $("#a2").click(function(){
    $(this).hide();
  });
});

// // mouseenter()

// $(document).ready(function(){
//   $("#p1").mouseenter(function(){
//     alert("You entered p1!");
//   });
// });


// // mouseleave()
// $(document).ready(function(){
//   $("#p2").mouseleave(function(){
//     alert("Bye! You now leave p2!");
//   });
// });

// // mousedown()
// $(document).ready(function(){
//   $("#p3").mousedown(function(){
//     alert("Mouse down over p3!");
//   });
// });

// // hover()


// $(document).ready(function(){
//   $("#p4").hover(function(){
//     alert("You entered p4!");
//   },
//   function(){
//     alert("Bye! You now leave p4!");
//   }); 
// });

// focus()

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
blur()
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});





// The on() Method
$(document).ready(function(){
  $("#p5").on("click", function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $("#p6").on({
    mouseenter: function(){
      $(this).css("background-color", "blue");
    },  
    mouseleave: function(){
      $(this).css("background-color", "Black");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});
