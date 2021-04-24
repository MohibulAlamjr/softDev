

$(document).ready(function(){
    $("h2").siblings().css({"color": "red", "border": "2px solid red"});
  });



  $(document).ready(function(){
    $("#b1").Siblings('div').addClass('s1')


});

$(document).ready(function(){
    $("#i1").Siblings('div').addClass('s2')


});

$(document).ready(function(){
    $("#d1").first().addClass('s3')

});

$(document).ready(function(){
    $("#d2").last().addClass('s4')

});


$(document).ready(function(){
    $("p").eq(1).addClass('s5')

});

$(document).ready(function(){
    $("u").filter(".intro").addClass('s6')

});

