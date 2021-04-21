// jQuery animate() - Manipulate Multiple Properties
$(document).ready(function(){
  $("#btn").click(function(){
    $("div").animate({left: '250px'});
  });
});


$(document).ready(function(){
  $("#btn2").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});