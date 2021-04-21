
// show or hide

$(document).ready(function(){
    // hide 
    $("#hd").click(function(){
        $("#div01").hide(1000);
    })
    // show 
    $("#sw").click(function(){
        $("#div01").show(1000);
    })
//   toggle
    $("#tog").click(function(){
        $("#div02").toggle(1000);
    })
//fade-in/fadout/toggle

$("#showgreen").click(function(){
    $("#green").toggle("slow");
})
$("#showred").click(function(){
    $("#red").toggle("slow");
})




})
// <!-- fadeto -->

$(document).ready(function(){
    $("#fto").click(function(){
        $("#d01").fadeTo("slow", 0.40);
        $("#d02").fadeTo("slow", 0.65);
    })
})