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

// $(document).ready(function(){
//     $("span").parentsUntil('html').addClass('fparent4')


// })

// jQuery children() Method

$(document).ready(function(){
    $("div").find('s01').addClass('fparent5')


})
