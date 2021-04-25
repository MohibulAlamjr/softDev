$(document).ready(function(){
    $("#btn1").click(function(){
       $("#Number").hide();
       $("#oneNumber").show(); 
    })

    $("#btn2").click(function(){
        $("#Number").hide();
        $("#lenghtNumber").show(); 
     })

     $(".res").click(function(){
        $(".common").hide();
        $("#result").show(); 
     })
})


// calculation


$(document).ready(function(){
    $("#btn3").click(function(){
     var number = $("#input1").val();

     
     function singlePrime(x){
         for(let i=2; i<=x/2 ;i++){
            var l=0;
             if(x % i !=0){
                 l=1;
                 
             }else{
                 l=0;
                 break;
               
                
             }
         }

         return l;
     }
     

   let result = singlePrime(number);
   if(result === 1){
   let y = number + " is a Prime Number";
    $("#result").show();
    $("#pResult").text(y);
   }else{
    let z = number + " is not a Prime Number";
    $("#result").show();
    $("#pResult").text(z);
   }

   

    })

})





// lenght 

$(document).ready(function(){
    $("#btn4").click(function(){
        var firstNumber = $("#input02").val();
        var lastNumber = $("#input03").val(); 

        function singlePrime1(x){
            var k=0;
            for(let j=2; j<=x/2 ;j++){
                if(x % j !=0){
                    k = 1;
                }else{
                    k = 0;
                    break;
                    
                }
            }
           return k; 
        }
      var text=" ";
        for(let i = firstNumber; i<= lastNumber ; i++){
          var c =  singlePrime1(i);
          if(c === 1){
             text += i + "<br>" ;
          }

        }

        $("#result").show();
        $("#pResult").html(text);




    })

})
