
// HIDE & SHOW 

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });


// Hide & Show  

$(document).ready(function(){
    $("#hide1").click(function(){
      $("#para").hide(1000);
    });
    $("#show1").click(function(){
        $("#para").show(1000);
    })
  });

//   toggle  

$(document).ready(function(){
    $("#btn").click(function(){
        $("#div").toggle("slow");
    })
})



