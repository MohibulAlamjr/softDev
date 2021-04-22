
// Fading-in, fade out,toggle

$("#showG").click(function(){
    $("#green").toggle("slow");
})
$("#showR").click(function(){
    $("#red").toggle("slow");
})

// <!-- fadeto -->

$(document).ready(function(){
    $("#btn").click(function(){
        $("#div3").fadeTo("slow", 0.40);
        $("#div4").fadeTo("slow", 0.65);
        $("#div5").fadeTo("slow", 0.65);
    })
})