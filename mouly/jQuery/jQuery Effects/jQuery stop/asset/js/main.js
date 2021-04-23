$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });


  $(document).ready(function(){
    $("#UP").click(function(){
      $("#panel11").slideUp(7000);
    });
    $("#stop1").click(function(){
      $("#panel11").stop();
    });
  });


  
  $(document).ready(function(){
    $("#toggole1").click(function(){
      $("#panel2").slideToggle(7000);
      $("#panel3").slideDown(5000);
    });
    $("#stop3").click(function(){
      $("#panel2").stop();
    });
  });