
///////////////// hiding elements ////////////////

//  hide elements by default

$("#dbclickHide").dblclick(function(){
    $("#dbclickHideEffect").hide();
  });

//   for hide slowly 


$("#dbclickHideSlowly").dblclick(function(){
    $("#dbclickHideEffectSlowly").hide(1000);
  });

//   for hide fastly


$("#dbclickHideFastly").dblclick(function(){
    $("#dbclickHideEffectFastly").hide(-3000);
  });



  ///////////////// showing elements ////////////////


//   show elements by default 

$(document).ready(function(){
 $("#dbclickShowEffect").css("display", "none");
$("#dbclickShow").dblclick(function(){
    $("#dbclickShowEffect").show();
  });
});


// for show slowly 

$(document).ready(function(){
    $("#dbclickShowEffectSlowly").css("display", "none");
   $("#dbclickShowSlowly").dblclick(function(){
       $("#dbclickShowEffectSlowly").show(3000);
     });
   });
   
//    for show fastly


$(document).ready(function(){
    $("#dbclickShowEffectFastly").css("display", "none");
   $("#dbclickShowFastly").dblclick(function(){
       $("#dbclickShowEffectFastly").show(-3000);
     });
   });


// //////   toggole elements /////////


// toggole elements by default 

$(document).ready(function(){
    $("#dbclickToggole").dblclick(function(){
      $("#dbclickToggoleEffect").toggle();
    });
  });


//   for toggle slowly 


$(document).ready(function(){
    $("#dbclickToggoleSlowly").dblclick(function(){
      $("#dbclickToggoleEffectSlowly").toggle(3000);
    });
  });

//   for toggle fastly 


$(document).ready(function(){
    $("#dbclickToggoleFastly").dblclick(function(){
      $("#dbclickToggoleEffectFastly").toggle(-3000);
    });
  });

//   for hide and show elements 

// hide and show by default 

$(document).ready(function(){
    $("#dbclickHideandShow").dblclick(function(){
      $("#dbclickHidandShoweffect").hide();
    });
    $("#dbclickShowandHideEffect").css("display", "none");
    $("#dbclickShowandHide").dblclick(function(){
      $("#dbclickShowandHideEffect").show();
    });
  });

// hide and show slowly 
  
$(document).ready(function(){
    $("#dbclickHideandShowSlowly").dblclick(function(){
      $("#dbclickHidandShoweffectSlowly").hide(300);
    });
    $("#dbclickShowandHideEffectSlowly").css("display", "none");
    $("#dbclickShowandHideSlowly").dblclick(function(){
      $("#dbclickShowandHideEffectSlowly").show(3000);
    });
  });

// hide and show fastly 
  
$(document).ready(function(){
    $("#dbclickHideandShowFastly").dblclick(function(){
      $("#dbclickHidandShoweffectFastly").hide(-3000);
    });
    $("#dbclickShowandHideEffectFastly").css("display", "none");
    $("#dbclickShowandHideFastly").dblclick(function(){
      $("#dbclickShowandHideEffectFastly").show(-3000);
    });
  });


//   hide show and toggole elements 

// hide show and toggle by default 


$(document).ready(function(){
    $("#dbclickHideShowToggole").dblclick(function(){
      $("#dbclickHidandShowToggoleEffect").hide();
    });
    $("#dbclickShowHideToggleEffect").css("display", "none");
    $("#dbclickShowandHideToggle").dblclick(function(){
      $("#dbclickShowandHideToggleEffect").show();
    });
    $("#dbclickToggoleShowHide").dblclick(function(){
        $("#dbclickToggoleShowHideEffect").toggle();
      });
  });

//   for hide show and toggle slowly 


$(document).ready(function(){
    $("#dbclickHideShowToggoleSlowly").dblclick(function(){
      $("#dbclickHidandShowToggoleEffectSlowly").hide(3000);
    });
    $("#dbclickShowandHideToggleEffectSlowly").css("display", "none");
    $("#dbclickShowandHideToggleSlowly").dblclick(function(){
      $("#dbclickShowandHideToggleEffectSlowly").show(3000);
    });
    $("#dbclickShowandHideToggleSlowly").dblclick(function(){
        $("#dbclickToggoleShowHideEffectSlowly").toggle(3000);
      });
  });

  //   for hide show and toggle fastly 

  
$(document).ready(function(){
    $("#dbclickHideShowToggoleFastly").dblclick(function(){
      $("#dbclickHidandShowToggoleEffectFastly").hide(-3000);
    });
    $("#dbclickShowandHideToggleEffectFastly").css("display", "none");
    $("#dbclickShowandHideToggleFastly").dblclick(function(){
      $("#dbclickShowandHideToggleEffectFastly").show(-3000);
    });
    $("#dbclickShowandHideToggleFastly").dblclick(function(){
        $("#dbclickToggoleShowHideEffectFastly").toggle(-3000);
      });
  });


/////////////////////   fade in //////////////////////

// fade in by defauly 

$(document).ready(function(){
    $("#dbclickFadeInEffect").css("color","red");
    $("#dbclickFadeInEffect").css("display", "none");
    $("#dbclickFadeIn").dblclick(function(){
      $("#dbclickFadeInEffect").fadeIn();
     
    });
  });

//   fade in slowly 


$(document).ready(function(){
    $("#dbclickFadeInEffectSlowly").css("color","blue");
    $("#dbclickFadeInEffectSlowly").css("display", "none");
    $("#dbclickFadeInSlowly").dblclick(function(){
      $("#dbclickFadeInEffectSlowly").fadeIn(3000);
     
    });
  });

//   fade in fastly 



$(document).ready(function(){
    $("#dbclickFadeInEffectFastly").css("color","green");
    $("#dbclickFadeInEffectFastly").css("display", "none");
    $("#dbclickFadeInFastly").dblclick(function(){
      $("#dbclickFadeInEffectFastly").fadeIn(-3000);
     
    });
  });


/////////////////////////   fade out ////////////////////////////


// fade out by default 


$(document).ready(function(){
    $("#dbclickFadeOutEffect").css("color","red");
    $("#dbclickFadeOut").dblclick(function(){
      $("#dbclickFadeOutEffect").fadeOut();
     
    });
  });


//   fade out slowly 


$(document).ready(function(){
    $("#dbclickFadeOutEffectSlowly").css("color","blue");
    $("#dbclickFadeOutSlowly").dblclick(function(){
      $("#dbclickFadeOutEffectSlowly").fadeOut(3000);
     
    });
  });


//   fade out fastly 



$(document).ready(function(){
    $("#dbclickFadeOutEffectFastly").css("color","green");
    $("#dbclickFadeOutFastly").dblclick(function(){
      $("#dbclickFadeOutEffectFastly").fadeOut(-3000);
     
    });
  });


//////////////////////// fade toggole ////////////////////////////////

// fade toggole by default 


$(document).ready(function(){
    $("#dbclickFadeToggoleEffect").css("color","red");
    $("#dbclickFadeToggole").dblclick(function(){
      $("#dbclickFadeToggoleEffect").fadeToggle();
     
    });
  });


//   fade toggole slowly 


$(document).ready(function(){
    $("#dbclickFadeToggoleEffectSlowly").css("color","blue");
    $("#dbclickFadeToggoleSlowly").dblclick(function(){
      $("#dbclickFadeToggoleEffectSlowly").fadeToggle(3000);
     
    });
  });


//   fade toggole fastly 


$(document).ready(function(){
    $("#dbclickFadeToggoleEffectFastly").css("color","blue");
    $("#dbclickFadeToggoleFastly").dblclick(function(){
      $("#dbclickFadeToggoleEffectFastly").fadeToggle(-3000);
     
    });
  });



  ///////////////////////// fade to //////////////////////////

  // fade to 

  
$(document).ready(function(){
  $("#dbclickFadeToEffect").css("color","red");
  $("#dbclickFadeTo").dblclick(function(){
    $("#dbclickFadeToEffect").fadeTo("slow", 0.15);
   
  });
});

// fade to slowly
 
$(document).ready(function(){
  $("#dbclickFadeToEffectSlowly").css("color","blue");
  $("#dbclickFadeToSlowly").dblclick(function(){
    $("#dbclickFadeToEffectSlowly").fadeTo("slow", 0.60);
   
  });
});

// fade to fastly
 
$(document).ready(function(){
  $("#dbclickFadeToEffectFastly").css("color","green");
  $("#dbclickFadeToFastly").dblclick(function(){
    $("#dbclickFadeToEffectFastly").fadeTo("slow", 0.1);
   
  });
});


////////////////////// slide down //////////////////////////////

// slide down by default 

$(document).ready(function(){
  $("#dbclickSlideDownEffcet").css("display","none");
  $("#dbclickSlideDown").dblclick(function(){
    $("#dbclickSlideDownEffcet").slideDown();
  });
});


// slide down slowly 


$(document).ready(function(){
  $("#dbclickSlideDownEffcetSlowly").css("display","none");
  $("#dbclickSlideDownSlowly").dblclick(function(){
    $("#dbclickSlideDownEffcetSlowly").slideDown(3000);
  });
});


// slide down fastly 


$(document).ready(function(){
  $("#dbclickSlideDownEffcetFastly").css("display","none");
  $("#dbclickSlideDownFastly").dblclick(function(){
    $("#dbclickSlideDownEffcetFastly").slideDown(-3000);
  });
});


//////////////////// slide up ////////////////////////////////////

// slide up by default 

$(document).ready(function(){
  $("#dbSlideUp").dblclick(function(){
    $("#dbSlideUpEffect").slideUp();
  });
});


// slide up slowly 


$(document).ready(function(){
  $("#dbSlideUpSlowly").dblclick(function(){
    $("#dbSlideUpEffectSlowly").slideUp(3000);
  });
});



// slide up fastly 


$(document).ready(function(){
  $("#dbSlideUpFastly").dblclick(function(){
    $("#dbSlideUpEffectFastly").slideUp(-3000);
  });
});

//////////////////// slideToggle //////////////////////////////

// slide toggole by default 


$(document).ready(function(){
  $("#dbclickSlideToggole").dblclick(function(){
    $("#dbclickSlideToggoleEffect").slideToggle();
  });
});


// slide toggole slowly 


$(document).ready(function(){
  $("#dbclickSlideToggoleSlowly").dblclick(function(){
    $("#dbclickSlideToggoleEffectSlowly").slideToggle(3000);
  });
});


// slide toggole fastly 



$(document).ready(function(){
  $("#dbclickSlideToggoleFastly").dblclick(function(){
    $("#dbclickSlideToggoleEffectFastly").slideToggle(-3000);
  });
});



//////////////////// animation /////////////////////////////////////


// animate by default 


$(document).ready(function(){
  $("#dbclickAnimate").dblclick(function(){
    $("#dbclickAnimateEffect").animate({left: '250px'});
  });
});