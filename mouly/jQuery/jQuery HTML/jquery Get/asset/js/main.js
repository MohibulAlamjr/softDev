// text

$(document).ready(function(){
    $("#btn1").click(function(){
        var x= $("#h01").text();
        $("#h02").text(x);
     });
  
  });


  $(document).ready(function(){
    $("#btn2").click(function(){
        var x= $("#p01").text();
        $("#h03").text(x);
     });
  
  });


  $(document).ready(function(){
    $("#btn3").click(function(){
        var x= $("#h01").text();
        $("#h04").text(x);
     });
  
  });


//   html 

$(document).ready(function(){
    $("#btn4").click(function(){
        var y= $("#h05").html();
        $("#p02").html(y);
        
     })
  
  })

  $(document).ready(function(){
    $("#btn5").click(function(){
        var y = $("#h06").html();
        $("#p03").html(y);
     });
  
  });

  $(document).ready(function(){
    $("#btn6").click(function(){
        var z = $("#h07").html();
        $("#p04").html(z);
     });
  
  });

// val 

$(document).ready(function(){
    $("#btn7").click(function(){
        var q = $("#p05").val();
        $("#h08").text(q);
        
     })
  
  })


  $(document).ready(function(){
    $("#btn8").click(function(){
        var q = $("#p06").val();
        $("#h08").text(q);
        
     });
  
  });


  $(document).ready(function(){
    $("#btn9").click(function(){
        var q = $("#p07").val();
        $("#h08").text(q);
        
     });
  
  });


//   attr 

$(document).ready(function(){
    $("#btn10").click(function(){
      var b = $("#w3s").attr("href");
      $("#01h").html(b);
    });
  });


  $(document).ready(function(){
    $("#btn12").click(function(){
      var b = $("#go").attr("href");
      $("#02h").html(b);
    });
  });

  $(document).ready(function(){
    $("#btn13").click(function(){
      var b = $("#fb").attr("href");
      $("#03h").html(b);
    });
  });

