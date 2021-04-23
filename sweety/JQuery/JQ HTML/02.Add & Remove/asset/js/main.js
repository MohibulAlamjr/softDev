
// append() Method


$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").append("<b>Shovhana Sweety</b>.");
    });
  
    $("#btn2").click(function(){
      $("ol").append("<li> Human </li>");
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
