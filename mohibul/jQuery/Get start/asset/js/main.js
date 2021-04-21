// using tag or element selector 
$(document).ready(function(){
    $('p').click(function(){
        $(this).hide();
    })
});
// using id selector 
$(document).ready(function(){
    $("#btn").click(function(){
        $("#p01").hide();
    })
});
// using id & class selector 
$(document).ready(function(){
    $("#btn1").click(function(){
        $(".p02").hide();
    })
});