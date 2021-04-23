// Get Content - text(), html(), and val()

$(document).ready(function(){
    $("#btn1").click(function(){
        var x = $("#test1").html();
        $("#h01").text(x);
    })
})


$(document).ready(function(){
    $("#btn2").click(function(){
        var y = $("#test1").html();
        $("#h02").html(y);
    })
})

$(document).ready(function(){
    $("#btn3").click(function(){
        var z = $("#test1").html();
        $("#h03").text(z);
    })
})


// Get Attributes - attr()
$(document).ready(function(){
    $("#btn4").click(function(){
        var z = $("#test1").attr("href");
        $("#h04").text(z);
    })
})


