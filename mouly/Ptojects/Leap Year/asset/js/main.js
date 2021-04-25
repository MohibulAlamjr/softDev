// for button 

$(document).ready(function(){
    $("#bt1").click(function(){
       $("#year").hide();
       $("#oneYear").show(); 
    })

});


$(document).ready(function(){
    $("#bt3").click(function(){
        $("#oneYear").hide(); 
      $("#output1").show(); 
    })

});



$(document).ready(function(){
    $("#bt2").click(function(){
       $("#year").hide();
       $("#year2").show(); 
    })

});


$(document).ready(function(){
    $("#bt4").click(function(){
        $("#year2").hide(); 
      $("#output1").show(); 
    })

});



// calculation 

$(document).ready(function(){
    $("bt3").click(function(){
       var leap = $("#input").val();
        function leapYear (year){
          year % 4 == 0){
                  
                }
               }
   
   
            
        
    });
});