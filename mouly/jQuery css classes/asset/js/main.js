$(document).ready(function(){
    $("button").click(function(){
      $("h1, h2, p").addClass("blue");
      $("div").addClass("important");
    });
  });


  $(document).ready(function(){
    $("#btn1").click(function(){
      $(".p1").addClass("violet");
      $("div1").addClass("important");
    });
  });



  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#div2").addClass("green");
     
    });
  });

//   remove classes 
$(document).ready(function(){
    $("#btn6").click(function(){
      $(".blue").removeClass("blue");
    });
  });


  $(document).ready(function(){
    $("#btn7").click(function(){
      $(".ss").removeClass("green1");
    });
  });