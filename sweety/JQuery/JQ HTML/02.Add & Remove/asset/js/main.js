
// append() Method


$(document).ready(function(){
    $("#btn1").click(function(){
      $("#ok").append("<i><b>Shovhana Sweety</i></b>.");
    });
  
    $("#btn2").click(function(){
      $("#oo").append("<li> Human </li>");
    });
  });

//   another one 

$(document).ready(function(){
    $("#button").click(function(){
      var a = "<p>Shovhana Sweety</p>";
      var b = "<p>Shovhana Sweety</p>";
      $("#hi").append(a,b);
    });
});


// Again

$(document).ready(function(){
    $("#p1").append("<i> hi, Bangladesh</i>");
  });

//   Prepend


$(document).ready(function(){
  $("#b1").click(function(){
    $("#kk").prepend("<b>Prepended text</b>. ");
  });
  $("#b2b").click(function(){
    $("ll").prepend("<li>Prepended item</li>");
  });
});


// Before After 


$(document).ready(function(){
  $("#jj").click(function(){
    $("#pp").before("<b>Before</b>");
  });

  $("#jjj").click(function(){
    $("#pp").after("<i>After</i>");
  });
});




$(document).ready(function(){
  $("#jj1").click(function(){
    $("#pp1").before("<b>Before</b>");
  });

  $("#jjj1").click(function(){
    $("#pp1").after("<i>After</i>");
  });
});



$(document).ready(function(){
  $("#jj2").click(function(){
    $("#pp2").before("<b>Before</b>");
  });

  $("#jjj2").click(function(){
    $("#pp2").after("<i><b>After<b></i>");
  });
});


// Remove Elements


$(document).ready(function(){
  $("#rmv").click(function(){
    $("#div1").remove();
  });
});


$(document).ready(function(){
  $("#rmv1").click(function(){
    $("#div2").remove();
  });
});



$(document).ready(function(){
  $("#rmv2").click(function(){
    $("#div3").remove();
  });
});


$(document).ready(function(){
  $("#rmv3").click(function(){
    $("#div4").remove();
  });
});


// empty() Method


$(document).ready(function(){
  $("#ooo").click(function(){
    $("#divv").empty();
  });
});


$(document).ready(function(){
  $("#ooo1").click(function(){
    $("#divv1").empty();
  });
});


$(document).ready(function(){
  $("#ooo2").click(function(){
    $("#divv2").empty();
  });
});

$(document).ready(function(){
  $("#ooo3").click(function(){
    $("#divv3").empty();
  });
});


// Filter the Elements to be Removed


$(document).ready(function(){
  $("#kkk").click(function(){
    $("p").remove(".test");
  });
});


$(document).ready(function(){
  $("#kkkk").click(function(){
    $(".test1").remove(".test1");
  });
});


$(document).ready(function(){
  $("#09").click(function(){
    $("p").remove(".tes, .demo");
  });
});


