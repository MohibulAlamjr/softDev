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

  // Selects the first  element of the first list

  $(document).ready(function(){
    $(".list").click(function(){
      $("ul li:first").hide();
    });
  });


  $(document).ready(function(){
    $(".list1").click(function(){
      $("ul li:first").hide();
    });
  });


  // Selects the first  element of every list

  $(document).ready(function(){
    $(".list2").click(function(){
      $("ul li:first-child").hide();
    });
  });


  $(document).ready(function(){
    $(".list3").click(function(){
      $("ul li:first-child").hide();
    });
  });


  // Selects all elements with an href attribute

  $(document).ready(function(){
    $(".list4").click(function(){
      $("[href1]").hide();
    });
  });

  $(document).ready(function(){
    $(".list5").click(function(){
      $("[href1]").hide();
    });
  });


  // Selects all elements with a target attribute value equal to "_blank"


  $(document).ready(function(){
    $("list6").click(function(){
      $(".hh[target='_blank']").hide();
    });
  });


  // Selects all <a> elements with a target attribute value NOT equal to "_blank"

  $(document).ready(function(){
    $(".list7").click(function(){
      $("a1[target!='_blank']").hide();
    });
  });