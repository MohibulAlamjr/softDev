// Get Content - text(), html(), and val()

$(document).ready(function(){
    $("#btn1").click(function(){
        var x = $("#test1").html();
        $("#h01").text(x);
    })
})


$(document).ready(function(){
    $("#btn2").click(function(){
        var y = $("#test1").html();
        $("#h02").html(y);
    })
})

$(document).ready(function(){
    $("#btn3").click(function(){
        var z = $("#test1").html();
        $("#h03").text(z);
    })
})


// Get Attributes - attr()
$(document).ready(function(){
    $("#btn4").click(function(){
        var z = $("a").attr("href");
        $("#h04").text(z);
    })
})


// jQuery - Set Content and Attributes


$(document).ready(function(){
  $("#btn5").click(function(){
    $("#test2").text("Hello world!");
  });
  $("#btn6").click(function(){
    $("#test3").html("<b>Hello world!</b>");
  });
  $("#btn7").click(function(){
    $("#test4").val("Dolly Duck");
  });
});


// A Callback Function for text(), html(), and val()

$(document).ready(function(){
  $("#btn8").click(function(){
    $("#test5").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#btn9").click(function(){
    $("#test6").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
});

// Set Attributes - attr()

$(document).ready(function(){
  $("#btn10").click(function(){
    $("#w3s").attr("href", "https://www.google.com");
  });
});