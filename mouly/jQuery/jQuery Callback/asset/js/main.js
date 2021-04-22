// callback 


$(document).ready(function(){
    $("#btn1").click(function(){
      $("#p2").hide("slow", function(){
        alert("Serajum Munira is no more");
      });
    });
  });


  
$(document).ready(function(){
    $("#btn").click(function(){
      $("#p1").hide("slow", function(){
        alert("Beli is my favourite flower.");
      });
    });
  });



//   without callback 


$(document).ready(function(){
    $("#btn2").click(function(){
      $("#p3").hide(1000);
      alert("Rose Beli Daisy Merigold");
    });
  });


  $(document).ready(function(){
    $("#btn3").click(function(){
      $("#p4").hide(2000);
      alert("Burger Pizza Chocolate");
    });
  });



