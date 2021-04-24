// set

$(document).ready(function(){
    $("#btn").click(function(){
        var x = $("#p1").text();
         $("#p2").text(x);
   
  });

});


$(document).ready(function(){
    $("#btn4").click(function(){
        var x = $("#p2").text();
         $("#p1").text(x);
   
  });

});

$(document).ready(function(){
    $("#btn1").click(function(){
     var x = $("#p3").text();
      $("#p4").text(x);

    });
});

    // html 
    $(document).ready(function(){
        $("#btn5").click(function(){
         var x = $("#p03").html();
          $("#p04").html(x);
    
        });
      });



      $(document).ready(function(){
        $("#btn6").click(function(){
         var x = $("#p04").html();
          $("#h4").html(x);
    
        });
      });