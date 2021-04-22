
// Fading-in, fade out,toggle

$("#showG").click(function(){
    $("#green").toggle("slow");
})
$("#showR").click(function(){
    $("#red").toggle("slow");
})

// <!-- fadeto -->

$(document).ready(function(){
    $("#btn").click(function(){
        $("#div3").fadeTo("slow", 0.40);
        $("#div4").fadeTo("slow", 0.65);
        $("#div5").fadeTo("slow", 0.65);
    })
})


// Fade In  

$(document).ready(function(){
    $("#btn2").click(function(){
      $("#div6").fadeIn();
      $("#div7").fadeIn("slow");
      $("#div8").fadeIn(3000);
    });
  });

// Fade Out 

$(document).ready(function(){
    $("#btn3").click(function(){
      $("#di1").fadeOut();
      $("#di2").fadeOut("slow");
      $("#di3").fadeOut(1000);
    });
  });

// Fade in/Fade out/Fade to 

$(document).ready(function(){
    $("#btn4").click(function(){
      $("#dii").fadeIn();
      $("#dii1").fadeIn("slow");
      $("#dii2").fadeIn(3000);
    });
  });

















