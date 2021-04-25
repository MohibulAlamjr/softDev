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
          
            
             for(let i = 0; i = year; i ++){

             var l = 0;
             if(year % 400 ==0){
               

             }
             else if(year % 1001 == 0){
                
               
             }
             else if(year % 4 == 0){
               
             }
            }



        
    });
});