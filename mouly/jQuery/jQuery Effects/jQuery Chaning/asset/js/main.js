// chaning 

$(document).ready(function(){
    $("#btn").click(function(){
      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });




  $(document).ready(function (){
      $("#btn1").click(function (){
          $("#p2").css("color", "blue").slideUp(3000).slideDown(3000);
      });
  });


  $(document).ready(function (){
    $("#btn2").click(function (){
        $("#p3").css("color", "violet").slideDown(3000).slideUp(3000);
    });
});



$(document).ready(function (){
    $("#btn3").click(function (){
        $("#p4").css("color", "violet")
        .slideToggle(3000)
        .slideUp(3000);
    });
});