// siblings

$(document).ready(function(){
  $("#b01").siblings().addClass('sb01');
});
// next 
$(document).ready(function(){
  $("#i01").next().addClass('sb02');
});

// nextAll
// nextUntil
// first 
$(document).ready(function(){
  $("#d01").first().addClass('sb03');
});
// // last 
// $(document).ready(function(){
//   $("#d01").last().addClass('sb04');
// });

// eq 
$(document).ready(function(){
  $("p").eq(1).addClass('sb04');
});

// filter 
$(document).ready(function(){
  $("u").filter(".intro").addClass('sb04');
});

$(document).ready(function(){
  $("u").not(".intro").addClass('sb05');
});
