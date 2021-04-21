// on 

$(document).ready(function(){
 $("p.p02").on("click",function(){
     $(this).hide();
 })

})
// double click event 
$(document).ready(function(){
    $("p.p03").dblclick(function(){
        $(this).hide();
    })
   
   })
//    mouseente
   $(document).ready(function(){
    $("#p04").mouseenter(function(){
        $("#pp").hide();
        $("#pp1").show();
    })
   
   })

//    mouseleave
   $(document).ready(function(){
    $("#p05").mouseleave(function(){
        $("#pp1").hide();
        $("#pp").show();
        
    })
   
   })

//    <!-- focus -->

   $(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
        
 
    })
    $("input").blur(function(){
        $(this).css("background-color", "blue");
        
 
    })

   
   })

//    on 

$(document).ready(function(){
    $("#onid").on({

        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "blue");
        },
        click: function(){
            $(this).css("background-color", "red");  
        }
    })
})

