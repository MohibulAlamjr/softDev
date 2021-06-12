$(document).ready(function(){
   
      $("#secoundcard").animate({
        opacity: 1,
       top:'0px'

      },1500,()=>{
        $("#card1body").fadeIn(1500).css("background","#2c3e50")
      });

      $("#firstcard").animate({
        
     opacity: 1,
      left: '0px'
 
       },1500,()=>{
        $("#card2body").fadeIn(1500).css("background","#2c3e50")
      });
       $("#thredcard").animate({
        
        opacity: 1,
        
        right: '0px'
    
          },1500,()=>{
            $("#card3body").fadeIn(1500).css("background","#2c3e50")
          });
 
  });