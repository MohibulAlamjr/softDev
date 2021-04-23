
// text 

$(document).ready(function(){
  $("#btn1").click(function(){
      var x= $("#hi").text();
      $("#hi1").text(x);
   });

});


$(document).ready(function(){
   $("#button1").click(function(){
       var i= $("#h").text();
       $("#h1").text(i);
    });
 
 });


 $(document).ready(function(){
   $("#button2").click(function(){
       var j= $("#h2").text();
       $("#h3").text(j);
    });
 
 });


 $(document).ready(function(){
   $("#button3").click(function(){
       var j2= $("#h4").text();
       $("#h5").text(j2);
    });
 
 });

// HTML 

$(document).ready(function(){
    $("#btn2").click(function(){
        var y= $("#hi2").html();
        $("#hi3").html(y);
     });
  
  });

  $(document).ready(function(){
   $("#b1").click(function(){
       var y2= $("#id1").html();
       $("#id2").html(y2);
    });
 
 });


 $(document).ready(function(){
   $("#b2").click(function(){
       var y3= $("#id3").html();
       $("#id4").html(y3);
    });
 
 });


//   Val ()

$(document).ready(function(){
    $("#btn3").click(function(){
        var z= $("#001").val();
        $("#hi5").text(z);
     });
  
  });


  $(document).ready(function(){
   $("#bt1").click(function(){
       var z1= $("#1").val();
       $("#t2").text(z1);
    });
 
 });


 $(document).ready(function(){
   $("#bt2").click(function(){
       var z2= $("#2").val();
       $("#t4").text(z2);
    });
 
 });


//   Multiple 

$(document).ready(function(){
    $("#btnn1").click(function(){
        var a= $("#hii").text();
        $("#hii1").text(a);
     });
  
  });


  $(document).ready(function(){
    $("#btnn2").click(function(){
        var b = $("#hii2").html();
        $("#hii3").html(b);
     });
  
  });


  $(document).ready(function(){
    $("#btnn3").click(function(){
        var c= $("#002").val();
        $("#hii5").text(c);
     });
  
  });

//   Attr()

$(document).ready(function(){
   $("#btt").click(function(){
       var n1= $("#im1").attr("src");
       $("#im2").attr("src",n1);
       
    })
 
 })


// href 

$(document).ready(function(){
   $("#btt2").click(function(){
       var h = $("#ancer").attr("href");
       $("#ancer2").attr("href",h);
       
    });
 
 });

// SET 


$(document).ready(function(){
   $("#btnt1").click(function(){
     $("#test1").text("Hello softDev!");
   });
   $("#btnt2").click(function(){
     $("#test2").html("<b>Hello softDev!</b>");
   });
   $("#btnt3").click(function(){
     $("#test3").val("nothing");
   });
 });