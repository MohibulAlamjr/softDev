$(document).ready(function(){
  $("#btn1").click(function(){
    $("#p01").hide('slow',function(){
      $("#p02").show('slow',function(){
        $("#p02").hide('slow',function(){
          $("#p03").show('slow');
        });
       

      });
    });
  })

})

// Chaining

$(document).ready(function(){
  $("#btn3").click(function(){
    $("#p06").css("color","blue")
    .hide(1000)
    .show(1000);
  })
})