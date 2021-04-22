
// with callBack

$(document).ready(function(){
    $("#id1").click(function(){
      $("#p1").hide("slow", function(){
          alert("WE ARE softDev FAMILY")
      });
    });
});


// without Callback


$(document).ready(function(){
    $("#id2").click(function(){
      $("#p").hide(1000);
      alert("The paragraph");
    });
  });

//   For Chaining


$(document).ready(function(){
    $("#btn").click(function(){
      $("#p2").css("color", "blue").slideUp(2000).slideDown(2000);
    });
  });


//   Another One 


$(document).ready(function(){
    $("#btn1").click(function(){
      $("#p01").hide('slow',function(){
        $("#p02").show('slow',function(){
          $("#p02").hide('slow',function(){
            $("#p03").show('slow');
          });
        });
      });
    });
  });