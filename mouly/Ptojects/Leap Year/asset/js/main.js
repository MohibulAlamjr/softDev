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
        function myYear (year){
          var y = " ";
         if (year % 400 == 0
        && year % 100 !== 0 
         && year %4 ==0){
             y = 0;
         }
        else {
            y = 1;

        }

        return y;
    }
let output = myYear (leap);
if(output === 0){
    let z = leap + " is leap year";
    $("#bt4"). show();
    $("#output").text(z);
}

if(output === 1){
    let m = leap + " is not leap year";
    $("#bt4"). show();
    $("#output").text(m);
}


});
 });
