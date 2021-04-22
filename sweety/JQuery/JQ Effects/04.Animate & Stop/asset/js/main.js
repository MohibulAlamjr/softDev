// For Animate 

$(document).ready(function(){
    $("#btn").click(function(){
      $("#div").animate({
          left: '250px',
          opacity:'0.5',
         height:'+= 140',
         width: '+=140',
        });
    });
  });


//   for Toggle 

$(document).ready(function(){
    $("#btn1").click(function(){
      $("#div1").animate({
         left: 'toggle'
       
        });
 });
 
 });

//  Manipulate Multiple Properties

$(document).ready(function(){
    $("#btn2").click(function(){
      $("#div2").animate({
        left: '250px',
        opacity: '0.5',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });

//   toogle 

$(document).ready(function(){
    $("#btn2").click(function(){
      $("#div2").animate({
         height: 'toggle',
         width:'toggle',
         
         });
 });

 });

//  Uses Queue Functionality

$(document).ready(function(){
    $("#btn3").click(function(){
      var a = $("#div3");
      a.animate({height: '300px', opacity: '0.4'}, "slow");
      a.animate({width: '300px', opacity: '0.8'}, "slow");
      
      a.animate({height: '100px', opacity: '0.4'}, "slow");
      a.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });


// Another One 


$(document).ready(function(){
    $("#btn4").click(function(){

      var s = $("#div4");

      s.animate({height: '400px', opacity: '0.4',fontSize:'3em'}, "slow");

      s.animate({width: '400px', opacity: '0.8',fontSize:'3em'}, "slow");

      s.animate({height: '100px', opacity: '0.4',fontSize:'3em'}, "slow");

      s.animate({width: '100px', opacity: '0.8',fontSize:'3em'}, "slow");
    });

    $("#btn5").click(function(){
        $("#div4").stop();
  });
});

// Just for font Size 

$(document).ready(function(){
    $("#btn6").click(function(){
      var c = $("#div5");  
      c.animate({left: '100px'}, "slow");
      c.animate({fontSize: '3em'}, "slow");
    });
  });




