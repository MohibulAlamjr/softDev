// Return a CSS Property  

$(document).ready(function(){
    $("#btn").click(function(){
      alert("Background color = " + $("#h1").css("background-color"));
    });
  });



  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Background color = " + $("#h3").css("background-color"));
    });
  });


  
  $(document).ready(function(){
    $("#btn2").click(function(){
      alert("Color = " + $("#h1").css("color"));
    });
  });

//   set a css property 

$(document).ready(function(){
    $("#btn3").click(function(){
      $("#div2"). css("background-color", "blue");
});

 });

 $(document).ready(function(){
    $("#btn4").click(function(){
      $("#div3"). css("background-color", "yellow");
});

 });


 $(document).ready(function(){
    $("#btn5").click(function(){
      $("#h5"). css("color", "blue");
});

 });


//  set multiple css 


$(document).ready(function(){
    $("#btn6").click(function(){
      $("#h5"). css({"background-color": "yellow", "font-size": "200%"});
});

 });
  $(document).ready(function(){
      $("#btn7").click(function(){
          $("#div4").css({"color": "red", "text-align": "center"});
      });

  });

//   dimension 

// Inner height and weight 


$(document).ready(function(){
    $("#btn8").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div5").width() + "</br>";
      txt += "Height of div: " + $("#div5").height() + "</br>";
      txt += "Inner width of div: " + $("#div5").innerWidth() + "</br>";
      txt += "Inner height of div: " + $("#div5").innerHeight();
      $("#div5").html(txt);
    });
  });


//   outter height and weight 


$(document).ready(function(){
    $("#btn9").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div6").width() + "</br>";
      txt += "Height of div: " + $("#div6").height() + "</br>";
      txt += "Outer width of div: " + $("#div6").outerWidth() + "</br>";
      txt += "Outer height of div: " + $("#div6").outerHeight();
      $("#div6").html(txt);
    });
  });