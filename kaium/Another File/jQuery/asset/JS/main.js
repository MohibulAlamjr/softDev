// jQuery hide
$(document).ready(function () {
    $("#jqueryTexthide").click(function () {
        $("p").hide();
    });
});
// jQuery show
$(document).ready(function () {
    $("#jqueryTextshow").click(function () {
        $("p").show();
    });
});


// jquery Text hide With Alart p tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlartp").click(function () {
        $("p").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});
// jquery Text hide With Alart h1 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth1").click(function () {
        $("h1").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});

// jquery Text hide With Alart h2 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth2").click(function () {
        $("h2").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});


// jquery Text hide With Alart h3 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth3").click(function () {
        $("h3").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});


// jquery Text hide With Alart h4 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth4").click(function () {
        $("h4").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});



// jquery Text hide With Alart h5 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth5").click(function () {
        $("h5").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});




// jquery Text hide With Alart h6 tag
$(document).ready(function () {
    $("#jqueryTexthideWithAlarth6").click(function () {
        $("h6").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});

// ----------------------------------------------

// jquery Text Hide With Delay p
$(document).ready(function () {
    $("#jqueryTextHideWithDelayp").click(function () {
        $("p").hide(1000);
    });
});

// jquery Text Show With Delay p
$(document).ready(function () {
    $("#jqueryTextShowWithDelayp").click(function () {
        $("p").show(2000);
    });
});


// --------------------------------------------------
// jquery Text Hide With Delay h1
$(document).ready(function () {
    $("#jqueryTextHideWithDelayh1").click(function () {
        $("h1").hide(1000);
    });
});

// jquery Text Show With Delay h1
$(document).ready(function () {
    $("#jqueryTextShowWithDelayh1").click(function () {
        $("h1").show(2000);
    });
});

// --------------------------------------------------------

// jquery Text Hide With Delay h2
$(document).ready(function () {
    $("#jqueryTextHideWithDelayh2").click(function () {
        $("h2").hide(1000);
    });
});

// jquery Text Show With Delay h2
$(document).ready(function () {
    $("#jqueryTextShowWithDelayh2").click(function () {
        $("h2").show(2000);
    });
});


// ----------------------------------------------------------

// jquery Text Hide With Delay h3
$(document).ready(function () {
    $("#jqueryTextHideWithDelayh3").click(function () {
        $("h3").hide(1000);
    });
});

// jquery Text Show With Delay h3
$(document).ready(function () {
    $("#jqueryTextShowWithDelayh3").click(function () {
        $("h3").show(2000);
    });
});

// ---------------------------------------------------------

// jquery Text Toggle p
$(document).ready(function () {
    $("#jqueryTextToggleP").click(function () {
        $("p").toggle(1000);

    });
});

// jquery Text Toggle h1
$(document).ready(function () {
    $("#jqueryTextToggleH1").click(function () {
        $("h1").toggle(1000);

    });
});


// jquery Text Toggle h2
$(document).ready(function () {
    $("#jqueryTextToggleH2").click(function () {
        $("h2").toggle(1000);

    });
});

// jquery Text Toggle h3
$(document).ready(function () {
    $("#jqueryTextToggleH3").click(function () {
        $("h3").toggle(1000);

    });
});

// jquery Text Toggle h4
$(document).ready(function () {
    $("#jqueryTextToggleH4").click(function () {
        $("h4").toggle(1000);

    });
});


// jquery Text Toggle h5
$(document).ready(function () {
    $("#jqueryTextToggleH5").click(function () {
        $("h5").toggle(1000);

    });
});


// jquery Text Toggle h6
$(document).ready(function () {
    $("#jqueryTextToggleH6").click(function () {
        $("h5").toggle(1000);

    });
});


  // jQuery Effects - Sliding
  $(document).ready(function(){
    $("#jqueryTextslideDownH6").click(function(){
      $("#h6").slideDown("slow");
    });
  });

  // jQuery slideUp() Method

  $(document).ready(function(){
    $("#jqueryTextslideUpgH6").click(function(){
      $("#h6").slideUp("slow");
    });
  });


//   // jQuery slideToggle() Method
//   $(document).ready(function(){
//     $("#flip2").click(function(){
//       $("#panel2").slideToggle("slow");
//     });
//   });

//   // jQuery Callback Functions
//   $(document).ready(function(){
//     $("#btn6").click(function(){
//       $("#p01").hide("slow");
//     });
//   });

//   $(document).ready(function(){
//     $("#btn7").click(function(){
//       $("#p02").hide(1000);

//     });
//   });



//   // jQuery - Chaining
//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#p1").css("color", "green").slideUp(2000).slideDown(2000);
//     });
//   });


//   // click()
// $(document).ready(function(){
//     $("#a1").click(function(){
//       $(this).hide();
//     });
//   });

//   // dblclick()
//   $(document).ready(function(){
//     $("#a2").click(function(){
//       $(this).hide();
//     });
//   });

//   // The on() Method
// $(document).ready(function(){
//     $("#p5").on("click", function(){
//       $(this).hide();
//     });
//   });

//   $(document).ready(function(){
//     $("#p6").on({
//       mouseenter: function(){
//         $(this).css("background-color", "blue");
//       },  
//       mouseleave: function(){
//         $(this).css("background-color", "Black");
//       }, 
//       click: function(){
//         $(this).css("background-color", "yellow");
//       }  
//     });
//   });


// //   Get Set Remove 

// // Get Content - text(), html(), and val()

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         var x = $("#test1").html();
//         $("#h01").text(x);
//     })
// })


// $(document).ready(function(){
//     $("#btn2").click(function(){
//         var y = $("#test1").html();
//         $("#h02").html(y);
//     })
// })

// $(document).ready(function(){
//     $("#btn3").click(function(){
//         var z = $("#test1").html();
//         $("#h03").text(z);
//     })
// })


// // Get Attributes - attr()
// $(document).ready(function(){
//     $("#btn4").click(function(){
//         var z = $("a").attr("href");
//         $("#h04").text(z);
//     })
// })


// // jQuery - Set Content and Attributes


// $(document).ready(function(){
//   $("#btn5").click(function(){
//     $("#test2").text("Hello world!");
//   });
//   $("#btn6").click(function(){
//     $("#test3").html("<b>Hello world!</b>");
//   });
//   $("#btn7").click(function(){
//     $("#test4").val("Dolly Duck");
//   });
// });


// // A Callback Function for text(), html(), and val()

// $(document).ready(function(){
//   $("#btn8").click(function(){
//     $("#test5").text(function(i, origText){
//       return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
//     });
//   });

//   $("#btn9").click(function(){
//     $("#test6").html(function(i, origText){
//       return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
//     });
//   });
// });

// // Set Attributes - attr()

// $(document).ready(function(){
//   $("#btn10").click(function(){
//     $("#w3s").attr("href", "https://www.google.com/");
//   });
// });