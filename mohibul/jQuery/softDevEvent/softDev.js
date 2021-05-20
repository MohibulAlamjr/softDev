
// mouseleavealert
$(document).ready(function(){
    $("#alertText").css("display","none");
    $("#alert").mouseleave(function(){
        let a= $("#alertText").text();
        alert(a);
    })
}
)
// mouseleavehide
$(document).ready(function(){
    
    $("#mouseLeaveHide").mouseleave(function(){
    $("#mouseLeaveHideEffect").hide();
        
    })
}
)
// mouseleaveshow
$(document).ready(function(){
    
    $("#mouseLeaveShow").mouseleave(function(){
    $("#mouseLeaveShowEffect").show();
        
    })
}
)

// mouseleavetoggle
$(document).ready(function(){
    
    $("#mouseLeaveToggle").mouseleave(function(){
    $("#mouseLeaveToggleEffect").toggle();
        
    })
}
)