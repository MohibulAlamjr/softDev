// animation method 
$(document).ready(function(){
    $("#bt").click(function(){
      $("#div").animate({left: '250px'});
    });
  });

  $(document).ready(function(){
      $("#btn").click(function(){
          $("#div1").animate({right: '300px'});
      });
  });


//   animate Manipulate Multiple Properties 

$(document).ready(function(){
    $("#btn1").click(function(){
      $("#div2").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });


  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#div3").animate({
        right: '300px',
        opacity: '0.75',
        height: '150px',
        width: '150px'
      });
    });
  });

//   using relatives values 

$(document).ready(function(){
    $("#btn3").click(function(){
      $("#div4").animate({
        right: '300px',
        opacity: '0.75',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });

//   using pre defined values 
//  toggole 
$(document).ready(function(){
    $("#btn4").click(function(){
      $("#div5").animate({
     
        opacity: '0.75',
        height: 'toggle'
     
      });
    });
  });

//  uses queue functionality 

$(document).ready(function(){
    $("#btn5").click(function(){
      var div = $("#div6");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });


  
$(document).ready(function(){
    $("#btn6").click(function(){
      var div = $("#div7");
      div.animate({height: '400px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, 1000);
      div.animate({height: '400px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, 3000);
    });
  });


    
$(document).ready(function(){
    $("#btn7").click(function(){
      var div = $("#div8");
      div.animate({height: '500px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, 3000);
      div.animate({width: '300px', opacity: '0.8'}, 1000);
      div.animate({height: '400px', opacity: '0.4'}, "slow");
      
    });
  });



  $(document).ready(function(){
    $("#btn8").click(function(){
      var x = $("#div9");  
      x.animate({left: '100px'}, "slow");
      x.animate({fontSize: '3em'}, "slow");
    });
  });


  $(document).ready(function(){
    $("#btn9").click(function(){
      var x = $("#div10");  
      x.animate({right: '50px'}, 1000);
      x.animate({fontSize: '4em'}, "slow");
    });
  });