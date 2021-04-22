// fade in method 

$(document).ready(function(){
    $("#btn2").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });




  $(document).ready (function(){
      $("#btn").click(function(){
          $("#div4").fadeIn(2000);
          $("#div5").fadeIn();
          $("#div6").fadeIn("slow");
      });
  });




  $(document).ready (function(){
    $("#btn1").click(function(){
        $("#div7").fadeIn(1000);
        $("#div8").fadeIn(3000);
        $("#div9").fadeIn(1000);
    });
});



// fade out 


$(document).ready (function(){
    $("#btn3").click(function(){
        $("#div11").fadeOut();
        $("#div12").fadeOut("slow");
        $("#div13").fadeOut(1000);
    });
});



$(document).ready (function(){
    $("#btn4").click(function(){
        $("#div71").fadeOut(2000);
        $("#div81").fadeOut();
        $("#div91").fadeOut("slow");
    });
});


// fade in and fade out 

$(document).ready (function(){
    $("#btn6").click(function(){
        $("#div21").fadeOut(2000);
        $("#div22").fadeIn();
        $("#div23").fadeOut("slow");
    });
});



// fade toggole 




$(document).ready (function(){
    $("#btn7").click(function(){
        $("#div011").fadeToggle();
        $("#div02").fadeToggle("slow");
        $("#div03").fadeToggle(1000);
    });
});



$(document).ready (function(){
    $("#btn8").click(function(){
        $("#div012").fadeToggle(1000);
        $("#div022").fadeToggle("slow");
        $("#div033").fadeToggle(1000);
    });
});




// fade in and fade toggole 

$(document).ready (function(){
    $("#btn9").click(function(){
        $("#div41").fadeToggle(1000);
        $("#div42").fadeIn("slow");
        $("#div43").fadeToggle(1000);
    });
});



// fade out and fade toggole 


$(document).ready (function(){
    $("#btn10").click(function(){
        $("#div51").fadeToggle(1000);
        $("#div52").fadeOut("slow");
        $("#div53").fadeToggle(1000);
    });
});



// fade to 

$(document).ready(function(){
    $("#btn11").click(function(){
      $("#div61").fadeTo("slow", 0.155);
      $("#div62").fadeTo("slow", 0.434);
      $("#div63").fadeTo("slow", 0.755);
    });
  });



  $(document).ready(function(){
    $("#btn12").click(function(){
      $("#div71").fadeTo("slow", 0.155);
      $("#div72").fadeTo("slow", 0.434);
      $("#div73").fadeTo("slow", 0.755);
    });
  });



//   fade in fade out fade to and afde toggole 



$(document).ready(function(){
    $("#btn13").click(function(){
      $("#div81").fadeTo("slow", 0.155);
      $("#div82").fadeOut(1000);
      $("#div83").fadeIn("slow");
      $("div84").fadeToggle(3000);

    });
  });







  $("#showgreen").click(function(){
    $("#green").toggle("slow");
})
$("#showred").click(function(){
    $("#red").toggle("slow");
})
