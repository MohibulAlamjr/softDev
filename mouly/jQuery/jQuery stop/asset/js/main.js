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
      $("#panel1").slideUp(7000);
    });
    $("#stop1").click(function(){
      $("#panel1").stop();
    });
  });


  
  $(document).ready(function(){
    $("#toggole").click(function(){
      $("#panel11").slideToggle(7000);
    });
    $("#stop2").click(function(){
      $("#panel11").stop();
    });
  });