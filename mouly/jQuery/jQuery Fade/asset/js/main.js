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


  $("#showgreen").click(function(){
    $("#green").toggle("slow");
})
$("#showred").click(function(){
    $("#red").toggle("slow");
})
