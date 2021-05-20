$(document).ready(function () {
    $("#submit").click(function () {
        let year = $("#year").val();
        if (year % 400 === 0) {   
            $(".show").html(year + " is a leap year");
        } else if (year % 100 != 0) {
            if (year % 4 === 0) {
                $(".show").html(year + " is a leap year");
            } else {
                $(".show").html(year + " is not a leap year");
            }
        } else {
            $(".show").html(year + " is not a leap year");
        }
    })
})

$(document).ready(function(){
    $("#submit1").click(function(){
        let year1 = $("#year1").val();
        let year2 = $("#year2").val();
        var text="";
      for(;year1<=year2;){
    
        if (year1 % 400 === 0) {   
            text += year1 + "<br>";
        } else if (year1 % 100 != 0) {
            if (year1 % 4 === 0) {
                text += year1 + "<br>";
            } 
        } 

        year1++;
      }
     
      $(".show").html(text);


    })
})