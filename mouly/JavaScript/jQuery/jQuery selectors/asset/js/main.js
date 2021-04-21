// element selectors 
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});



// id selectors 

$(document).ready(function(){
    $("#click").click(function(){
      $("#p2").hide();
    });
  });


  $(document).ready(function(){
    $("#btn1").click(function(){
      $("#p3").hide();
    });
  });

// class selector 

$(document).ready(function(){
    $(".btn2").click(function(){
      $(".test").hide();
    });
  });


//   id & class selector  


$(document).ready(function(){
    $("#btn6").click(function(){
      $(".p04").hide();
    });
  });

