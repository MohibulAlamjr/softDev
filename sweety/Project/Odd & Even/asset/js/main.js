
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#id1").hide();
        $("#id2").show();
    });

    $("#btn2").click(function(){
        $("#id1").hide();
        $("#id3").show(); 
     })
     $(".res").click(function(){
        $(".1").hide();
        $("#id4").show(); 
     });

});



// Calculation

$(document).ready(function(){
    $("#btn3").click(function(){
        var odd = $("#input1").val();
        var c = "";
    
        function myFunction(x){
            
                if( x % 2 == 0 ){
                    c = 0;
                }
                else{
                    c = 1;
                    
                }
            
            return c;
        }
        let result = myFunction(odd);
        if(result === 1){

            let y = odd + " is a odd number";
            $("#id4").show();
            $("#answer").text(y);
        }
        else{
            let z = odd + " Is a Even number";
            $("id4").show();
            $("#answer").text(z);
        }
    })
})


// Odd ANd Even 


// $(document).ready(function(){
//     $("#btn4").click(function(){
//         var firstNumber = $("#input02").val();
//         var lastNumber = $("#input03").val();
//         var even  = " ";
//         var odd = " "; 

      
//         for(let i = firstNumber; i<= lastNumber ; i++){
//         	if(i%2==0){
//         		even += i + "  ";
//         	}
        	
//         	else{
//         		odd += i + "  ";
//         	}
//         }
        
//         $("#id4").show();
//         $("#answer").html("Even: "+even+"<br> Odd: "+odd);

//     })

// })




$(document).ready(function(){
    $("#btn4").click(function(){
        var first = $("#input02").val();
        var last = $("#input03").val()
        var even = "";
        var odd = " ";
    
        function myFunction1(x){
            
                if( x % 2 == 0 ){
                    c = 0;
                }
                else{
                    c = 1;
                    
                }
            
            return c;
        }
        for(let i = first; i<= last ; i++){
            let result = myFunction1(i);
                    	if(result === 0){
                    		even += i + " ";
                    	}
                        
                    	else{
                    		odd += i + " ";
                    	}
                    }

                    $("#id4").show();
                    
        $("#answer").html("Even: "+ even +"<br> Odd: "+odd);

                    
        
    })
})


