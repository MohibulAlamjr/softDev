
$(document).ready(function(){
    $("button").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div1").width() + "</br>";
      txt += "Height of div: " + $("#div1").height();
      $("#div1").html(txt);
    });
  });

//   innerWidth() and innerHeight() Methods

$(document).ready(function(){
    $("#bb").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div2").width() + "</br>";
      txt += "Height of div: " + $("#div2").height() + "</br>";
      txt += "Inner width of div: " + $("#div2").innerWidth() + "</br>";
      txt += "Inner height of div: " + $("#div2").innerHeight();
      $("#div2").html(txt);
    });
  });


//   outerWidth() and outerHeight() Methods 


$(document).ready(function(){
    $("#bb1").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div3").width() + "</br>";
      txt += "Height of div: " + $("#div3").height() + "</br>";
      txt += "Outer width of div: " + $("#div3").outerWidth() + "</br>";
      txt += "Outer height of div: " + $("#div3").outerHeight();
      $("#div3").html(txt);
    });
  });




// ReSize Div 


$(document).ready(function(){
    $("#ff").click(function(){
      $("#div4").width(500).height(500);
    });
  });

