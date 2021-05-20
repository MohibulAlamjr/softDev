
// for Hide Show

$(document).ready(function(){
    $("#mouseEnterHide").mouseenter(function(){
      $("#mouseEnterHideEffect").hide();

    });

    });

    // for Show 

$(document).ready(function(){
    $("#mouseEnterShow").mouseenter(function(){
      $("#mouseEnterShowEffect").show();

    });

    });

    // For Hide and Show 

    $(document).ready(function(){
        $("#mouseEnterHide").mouseenter(function(){
          $("#HideShowEffect").hide();
        });
        $("#mouseEnterShow").mouseenter(function(){
          $("#HideShowEffect").show();
        });
      });

    //   For toggle 

$(document).ready(function(){
    $("#mouseEnterToggle").mouseenter(function(){
      $("#mouseEnterToggleEffect").toggle();

    });

    });


// For Fade In 


$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
    $("#mouseEnterFadeIn").mouseenter(function(){
      $("#mouseEnterFadeInEffect").fadeIn();
    });
});


// for fade in slow 



$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
    $("#mouseEnterFadeInSlow").mouseenter(function(){
      $("#mouseEnterFadeInEffect").fadeIn("slow");
    });
});

// for fade in medium 


$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
    $("#mouseEnterFadeInMedium").mouseenter(function(){
      $("#mouseEnterFadeInEffect").fadeIn(1500);
    });
});


// for fade in so slow


$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
    $("#mouseEnterFadeInSoSlow").mouseenter(function(){
      $("#mouseEnterFadeInEffect").fadeIn(3000);
    });
});


// For fade in ,fade in slow,fade in MediaKeyStatusMap,fade in so slow 


$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
  $("#mouseEnterFadeInSlow").css("display","none");
  $("#mouseEnterFadeInSoSlow").css("display","none");
  $("#mouseEnterFadeInMedium").css("display","none");
  $("#mouseEnterFadeIn").mouseenter(function(){
    $("#mouseEnterFadeInEffect").fadeIn();
    $("#mouseEnterFadeInSlow").fadeIn("slow");
    $("#mouseEnterFadeInMedium").fadeIn(1500);
    $("#mouseEnterFadeInSoSlow").fadeIn(3000);
  });
});

// For Fade Out 



$(document).ready(function(){
    $("#mouseEnterFadeOut").mouseenter(function(){
      $("#mouseEnterFadeOutEffect").fadeOut();
    });
});


// For fade out slow


$(document).ready(function(){
  $("#mouseEnterFadeOutSlow").mouseenter(function(){
    $("#mouseEnterFadeOutEffect").fadeOut("slow");
  });
});


// For Fade Out Medium

$(document).ready(function(){
  $("#mouseEnterFadeOutMedium").mouseenter(function(){
    $("#mouseEnterFadeOutEffect").fadeOut(1500);
  });
});

// For Fade in so slow 


$(document).ready(function(){
  $("#mouseEnterFadeOutSoSlow").mouseenter(function(){
    $("#mouseEnterFadeOutEffect").fadeOut(3000);
  });
});


// For Fade Out All 


$(document).ready(function(){
  $("#mouseEnterFadeOut").mouseenter(function(){
    $("#mouseEnterFadeOutEffect").fadeOut();
    $("#mouseEnterFadeOutSlow").fadeOut("slow");
    $("#mouseEnterFadeOutMedium").fadeOut(1500);
    $("#mouseEnterFadeOutSoSlow").fadeOut(3000);
  });
});


// For Toggle Show


$(document).ready(function(){
  $("#mouseEnterFadeOutToggle").mouseenter(function(){
    $("#mouseEnterFadeOutToggleEffect").fadeToggle();
    $("#mouseEnterFadeOutSlowToggle").fadeToggle("slow");
    $("#mouseEnterFadeOutMediumToggle").fadeToggle(1500);
    $("#mouseEnterFadeOutSoSlowToggle").fadeToggle(3000);
  });
});


// For Toggle Hide 


$(document).ready(function(){
  $("#mouseEnterFadeOutToggleEffect").css("display","none");
  $("#mouseEnterFadeOutSlowToggle").css("display","none");
  $("#mouseEnterFadeOutMediumToggle").css("display","none");
  $("#mouseEnterFadeOutSoSlowToggle").css("display","none");

  $("#mouseEnterFadeOutToggle").mouseenter(function(){
    $("#mouseEnterFadeOutToggleEffect").fadeToggle();
    $("#mouseEnterFadeOutSlowToggle").fadeToggle("slow");
    $("#mouseEnterFadeOutMediumToggle").fadeToggle(1500);
    $("#mouseEnterFadeOutSoSlowToggle").fadeToggle(3000);
  });
});


// For Fade To 

$(document).ready(function(){
  $("#mousseEnterFadeTo").mouseenter(function(){
    $("#mouseEnterFadeTo1").fadeTo("slow", 0.15);
  });
});


$(document).ready(function(){
  $("#mousseEnterFadeTo").mouseenter(function(){
    $("#mouseEnterFadeTo2").fadeTo("slow", 0.4);
  });
});


$(document).ready(function(){
  $("#mousseEnterFadeTo").mouseenter(function(){
    $("#mouseEnterFadeTo3").fadeTo("slow", 0.7);
  });
});


// For All fade to

$(document).ready(function(){
  $("#mousseEnterFadeTo").click(function(){
    $("#mouseEnterFadeTo1").fadeTo("slow", 0.15);
    $("#mouseEnterFadeTo2").fadeTo("slow", 0.4);
    $("#mouseEnterFadeTo3").fadeTo("slow", 0.7);
  });
});


// For Slides

// slide down 

$(document).ready(function(){
  $("#mouseEnterSlideEffect").css("display","none");
  $("#mouseEnterSlideDown").mouseenter(function(){
    $("#mouseEnterSlideEffect").slideDown();
  });
});

// Slide Down Slow


$(document).ready(function(){
  $("#mouseEnterSlideEffect").css("display","none");
  $("#mouseEnterSlideDownSlow").mouseenter(function(){
    $("#mouseEnterSlideEffect").slideDown("slow");
  });
});
















