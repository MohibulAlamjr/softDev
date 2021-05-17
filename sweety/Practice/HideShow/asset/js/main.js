$(document).ready(function(){
    $("#p").click(function(){
      $("#lorem1").toggle(200);
    });
  });

  // Navbar 

  $(window).scroll(function() {
  
    let position    =   $(this).scrollTop();
      if (position <= 500) {
        $('.nav-menu').addClass('costum-navbar');
      } else {
        $('.nav-menu').removeClass('costum-navbar');
      }
    
  });
  
  
  // // ===== HAMBURGER BUTTON ===== //
  // $(document).ready(function() {
    
  //   $('.nav-button').click(function() {
  //     $('.nav-button').toggleClass('change');
  //   })
      
  // });
  