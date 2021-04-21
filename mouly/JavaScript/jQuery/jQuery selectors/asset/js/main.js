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

//   select all elements 

$(document).ready(function(){
    $(".p0").click(function(){
      $("*").hide();
    });
  });

//   Selects the current HTML element

$(document).ready(function(){
    $(".p06").click(function(){
      $(this).hide();
    });
  });


//   Selects all <p> elements with class

$(document).ready(function(){
    $(".p006").click(function(){
      $("p.h001").hide();
    });
  });
 

//   select the first elements 

$(document).ready(function(){
    $("#demo3").click(function(){
      $("p:first").hide();
    });
  });