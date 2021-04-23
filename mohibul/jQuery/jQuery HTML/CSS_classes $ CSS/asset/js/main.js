// add class
$(document).ready(function(){
  $("#btn01").click(function(){
     $("#dd").addClass("d02");
     $("#pp").addClass("p03");
  })
})
// remove class
$("#btn02").click(function(){
  $("#pp").removeClass("p03");
  $("#dd").removeClass("d02");
});

//toggole class

$("#btn03").click(function(){

  $("#pp").toggleClass("p03");
  $("#dd").toggleClass("d02");
});
//add CSS 

$("#btn04").click(function(){

  $("#p02").css("color","blue");
  
});