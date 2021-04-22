
// Slide Down 

$(document).ready(function(){
    $("#id2").click(function(){
      $("#id1").slideDown("slow");
    });
  });

//   Slide Up 


$(document).ready(function(){
    $("#id4").click(function(){
      $("#id3").slideUp("slow");
    });
  });


//   Another One 

$(document).ready(function(){
    $("#d").click(function(){
        $("#dd").slideDown("slow");
    })
   
})

$(document).ready(function(){
    $("#ddd").click(function(){
        $("#dd").slideUp("slow");
    })
   
})

// toggole

$(document).ready(function(){
    $("#dddd").click(function(){
        $("#ddddd").slideToggle("slow");
    })
   
})