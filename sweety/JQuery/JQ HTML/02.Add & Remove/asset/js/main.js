
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















