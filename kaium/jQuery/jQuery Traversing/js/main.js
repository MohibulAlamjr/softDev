$(document).ready(function(){
  $("span").parent().addClass('fparent')
});
// parents
$(document).ready(function(){
    $("b").parent().addClass('fparent2')
})

$(document).ready(function(){
    $("b").parent('div').addClass('fparent3')


})
// jQuery parentsUntil() Method
$(document).ready(function(){
    $("span").parentsUntil('body').addClass('fparent4')


})