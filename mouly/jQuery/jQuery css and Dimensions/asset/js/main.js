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
      $("btn7").click(function(){
          $("#div4").css({"background-color": "red", "text-align: center"});
      });

  });