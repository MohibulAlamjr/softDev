$(document).ready(function(){
    $("#btn1").click(function(){
       $("#Number").hide();
       $("#oneNumber").show(); 
    })

     $(".res").click(function(){
        $(".common").hide();
        $("#result").show(); 
     })
})

// Celcius to Fahrenheit

$(document).ready(function(){
    $("#btn3").click(function(){
     var number = $("#input1").val();
     function singlePrime(x){


         number=(x-32)/1.8;
        //  number=(x*1.8)+32;
     }

     let result = singlePrime(number);
   if(result === 1){
   let y = number + " is a Celcius";
    $("#result").show();
    $("#pResult").text(y);
   }else{
    let z = number + " is not a Celcius";
    $("#result").show();
    $("#pResult").text(z);
   }

   

    })

})



$(document).ready(function(){
    $("#btn1").click(function(){
       $("#Number").hide();
       $("#oneNumber").show(); 
    })

     $(".res").click(function(){
        $(".common").hide();
        $("#result").show(); 
     })
})

// Celcius to Fahrenheit

$(document).ready(function(){
    $("#btn3").click(function(){
     var number = $("#input1").val();
     function singlePrime(x){


         number=(x-32)/1.8;
        //  number=(x*1.8)+32;
     }

     let result = singlePrime(number);
   if(result === 1){
   let y = number + " is a Celcius";
    $("#result").show();
    $("#pResult").text(y);
   }else{
    let z = number + " is not a Celcius";
    $("#result").show();
    $("#pResult").text(z);
   }

   

    })

})