// slidedown 

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });


  $(document).ready(function(){
      $("#div1").click(function(){
          $("#div2").slideDown(1000);
      });
  });


//   slideup 

$(document).ready(function(){
    $("#div3").click(function(){
        $("#div4").slideUp(2000);
    });
});


$(document).ready(function(){
    $("#div5").click(function(){
        $("#div6").slideUp("slow");
    });
});


// slide toggole 

$(document).ready(function(){
    $("#div7").click(function(){
        $("#div8").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#div9").click(function(){
        $("#div10").slideToggle(2000);
    });
});


// slide up and slide down 

$(document).ready(function(){
    $("#div11").click(function(){
        $("#div12").slideUp(3000);
        $("#div13").slideDown(1000);
    });
});




$(document).ready(function(){
    $("#div111").click(function(){
        $("#div121").slideDown(3000);
        $("#div131").slideUp(1000);
    });
});


// slide up and toggole 

$(document).ready(function(){
    $("#div011").click(function(){
        $("#div021").slideToggle(3000);
        $("#div031").slideUp(1000);
    });
});


$(document).ready(function(){
    $("#div0011").click(function(){
        $("#div0021").slideUp(3000);
        $("#div0031").slideToggle(1000);
    });
});


// slide down and toggole 

$(document).ready(function(){
    $("#div002").click(function(){
        $("#div003").slideDown(3000);
        $("#div004").slideToggle(1000);
    });
});


$(document).ready(function(){
    $("#div007").click(function(){
        $("#div008").slideToggle(3000);
        $("#div009").slideDown(1000);
    });
});



// slide up slide down and toggole 

$(document).ready(function(){
    $("#div0071").click(function(){
        $("#div0081").slideToggle(3000);
        $("#div0091").slideDown(1000);
        $("div0004").slideUp(3000);
    });
});


$(document).ready(function(){
    $("#div00071").click(function(){
        $("#div00081").slideUp(3000);
        $("#div00091").slideToggle(1000);
        $("div00004").slideDown(3000);
    });
});
