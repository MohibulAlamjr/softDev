
// The element Selector

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })
});

// The #id Selector

$(document).ready(function(){
    $("#button").click(function(){
      $("#se").hide();
    });
  });

//   The .class Selector

$(document).ready(function(){
    $("#button1").click(function(){
        $(".ss").hide();
    });
});

// Examples of jQuery Selectors

// select all 

$(document).ready(function(){
    $("#button2").click(function(){
        $("*").hide();
    });
});

// Class Intro 

$(document).ready(function(){
    $("#btn").click(function(){
      $("p.id1").hide();
    });
  });
  
//   $("p:first")
  
$(document).ready(function(){
    $("#btnn").click(function(){
      $("p:first").hide();
    });
  });


//   $("ul li:first")

$(document).ready(function(){
    $("#btn2").click(function(){
      $("ul li:first").hide();
    });
  });


//   $("ul li:first-child")

$(document).ready(function(){
    $("#btn3").click(function(){
      $("ul li:first-child").hide();
    });
  });

//   $("[href]")

$(document).ready(function(){
    $("#btn4").click(function(){
      $("[href]").hide();
    });
  });

//   $("a[target='_blank']")

$(document).ready(function(){
    $("#btn5").click(function(){
      $("a[target='_blank']").hide();
    });
  });


//   $("a[target!='_blank']")

$(document).ready(function(){
    $("#btn6").click(function(){
      $("a[target!='_blank']").hide();
    });
  });

//   $(":button")

$(document).ready(function(){
    $("#btn7").click(function(){
      $(":button").hide();
    });
  });

//   $("tr:even")

$(document).ready(function(){
    $("tr:even").css("color", "blue");
  });

//   $("tr:odd")


$(document).ready(function(){
    $("tr:odd").css("background-color", "gray");
  });
