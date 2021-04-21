$(document).ready(function(){
   $("#btn1").click(function(){
     $("#div01").animate({
        left: '250px',
        opacity: '0.5',
        height: '+=150px',
        width: '+=150px'
        
        })
})

})
// toggle
$(document).ready(function(){
    $("#btn2").click(function(){
      $("#div02").animate({
         right: 'toggle'
         
         })
 })
 
 })

//  funcnalities

$(document).ready(function(){
    $("#btn3").click(function(){
      var x=$("#div04");
    x.animate({height: '300px', opacity: '0.4',fontSize: '3em'}, "slow");
    x.animate({width: '300px', opacity: '0.8',fontSize: '1em'}, "slow");
    x.animate({height: '100px', opacity: '0.4',fontSize: '3em'}, "slow");
    x.animate({width: '100px', opacity: '0.8',fontSize: '1em'}, "slow");
         
         
         })
$("#btn4").click(function(){
            $("#div04").stop();
          });
 })
 
