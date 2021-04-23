// apend 
$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").append(" <b>flower</b>.");
    });
});


$(document).ready(function(){
    $("#btn2").click(function(){
      $("#h1").append(" <b>Mouly</b>.");
    });
});


// prepend 

$(document).ready(function(){
    $("#btn3").click(function(){
      $(".p1").prepend(" <i>Beli</i>.");
    });
});


$(document).ready(function(){
    $("#btn4").click(function(){
      $("#h2").prepend(" <b>From</b>.");
    });
});


//   new elements with append and prepend 

function appendText() {
    var txt1 = "<p>Assalamualaikum.</p>";       
    var txt2 = $("<p></p>").text("Good Noon"); 
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Assalamualaikum";         
    $("body").append(txt1, txt2, txt3);   
  }


// before 

$(document).ready(function(){
   
    $("#btn5").click(function(){
      $("#para").before("<span>Write</span>")
    });
  })


// after 

$(document).ready(function(){
    $("#btn6").click(function(){
      $("#para1").before("<i>This is</i>");
    });
});


// before and after 

$(document).ready(function(){
    $("#btn7").click(function(){
      $("#p01").before("<b>Hi</b>");
    });
  
    $("#btn8").click(function(){
      $("#p01").after("<i>Hi</i>");
    });
  });



//   remove 

$(document).ready(function(){
    $("#remove").click(function(){
      $("#div1").remove();
    });
  });
 


  $(document).ready(function(){
    $("#remove1").click(function(){
      $("#div2").remove();
    });
  });
 

//   empty method 

$(document).ready(function(){
    $("#remove3").click(function(){
      $("#div3").remove();
    });
  });
 


  $(document).ready(function(){
    $("#remove4").click(function(){
      $("#div4").remove();
    });
  });
 
