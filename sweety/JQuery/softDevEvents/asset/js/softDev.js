
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
      $("#mouseEnterFadeInSlowEffect").fadeIn("slow");
    });
});

// for fade in medium 


$(document).ready(function(){
  $("#mouseEnterFadeInMediumEffect").css("display","none");
    $("#mouseEnterFadeInMedium").mouseenter(function(){
      $("#mouseEnterFadeInMediumEffect").fadeIn(1500);
    });
});


// for fade in so slow


$(document).ready(function(){
  $("#mouseEnterFadeInSoSlowEffect").css("display","none");
    $("#mouseEnterFadeInSoSlow").mouseenter(function(){
      $("#mouseEnterFadeInSoSlowEffect").fadeIn(3000);
    });
});


// For fade in ,fade in slow,fade in MediaKeyStatusMap,fade in so slow 


$(document).ready(function(){
  $("#mouseEnterFadeInEffect").css("display","none");
  $("#mouseEnterFadeInSlowEffect").css("display","none");
  $("#mouseEnterFadeInSoSlowEffect").css("display","none");
  $("#mouseEnterFadeInMediumEffect").css("display","none");
  $("#mouseEnterFadeInAll").mouseenter(function(){
    $("#mouseEnterFadeInEffect").fadeIn();
    $("#mouseEnterFadeInSlowEffect").fadeIn("slow");
    $("#mouseEnterFadeInMediumEffect").fadeIn(1500);
    $("#mouseEnterFadeInSoSlowEffect").fadeIn(3000);
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
    $("#mouseEnterFadeOutSlowEffect").fadeOut("slow");
  });
});


// For Fade Out Medium

$(document).ready(function(){
  $("#mouseEnterFadeOutMedium").mouseenter(function(){
    $("#mouseEnterFadeOutMediumEffect").fadeOut(1500);
  });
});

// For Fade in so slow 


$(document).ready(function(){
  $("#mouseEnterFadeOutSoSlow").mouseenter(function(){
    $("#mouseEnterFadeOutSoSlowEffect").fadeOut(3000);
  });
});


// For Fade Out All 


$(document).ready(function(){
  $("#mouseEnterFadeOutAll").mouseenter(function(){
    $("#mouseEnterFadeOutEffect").fadeOut();
    $("#mouseEnterFadeOutSlowEffect").fadeOut("slow");
    $("#mouseEnterFadeOutMediumEffect").fadeOut(1500);
    $("#mouseEnterFadeOutSoSlowEffect").fadeOut(3000);
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
  $("#mouseEnterFadeOutToggleHideEffect").css("display","none");
  $("#mouseEnterFadeOutSlowToggleHideEffect").css("display","none");
  $("#mouseEnterFadeOutMediumToggleHideEffect").css("display","none");
  $("#mouseEnterFadeOutSoSlowToggleHideEffect").css("display","none");

  $("#mouseEnterFadeOutToggleHideAll").mouseenter(function(){
    $("#mouseEnterFadeOutToggleHideEffect").fadeToggle();
    $("#mouseEnterFadeOutSlowToggleHideEffect").fadeToggle("slow");
    $("#mouseEnterFadeOutMediumToggleHideEffect").fadeToggle(1500);
    $("#mouseEnterFadeOutSoSlowToggleHideEffect").fadeToggle(3000);
  });
});


// For Fade To 

$(document).ready(function(){
  $("#mousseEnterFadeTo01").mouseenter(function(){
    $("#mouseEnterFadeTo1").fadeTo("slow", 0.15);
  });
});


$(document).ready(function(){
  $("#mousseEnterFadeTo02").mouseenter(function(){
    $("#mouseEnterFadeTo2").fadeTo("slow", 0.4);
  });
});


$(document).ready(function(){
  $("#mousseEnterFadeTo03").mouseenter(function(){
    $("#mouseEnterFadeTo3").fadeTo("slow", 0.7);
  });
});


// For All fade to

$(document).ready(function(){
  $("#mousseEnterFadeToAll").mouseenter(function(){
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
    $("#mouseEnterSlideDownEffect").slideDown();
  });
});

// Slide Down Slow


$(document).ready(function(){
  $("#mouseEnterSlideDownSlowEffect").css("display","none");
  $("#mouseEnterSlideDownSlow").mouseenter(function(){
    $("#mouseEnterSlideDownSlowEffect").slideDown("slow");
  });
});

// Slide Down so Slow 


$(document).ready(function(){
  $("#mouseEnterSlideDownSoSlowEffect").css("display","none");
  $("#mouseEnterSlideDownSoSlow").mouseenter(function(){
    $("#mouseEnterSlideDownSoSlowEffect").slideDown(3000);
  });
});

// Slide Down Medium 


$(document).ready(function(){
  $("#mouseEnterSlideDownMediumEffect").css("display","none");
  $("#mouseEnterSlideDownMedium").mouseenter(function(){
    $("#mouseEnterSlideDownMediumEffect").slideDown(1500);
  });
});

// Slide Down Fast 


$(document).ready(function(){
  $("#mouseEnterSlideDownFastEffect").css("display","none");
  $("#mouseEnterSlideDownFast").mouseenter(function(){
    $("#mouseEnterSlideDownFastEffect").slideDown(100);
  });
});


// All Within One 

$(document).ready(function(){
  $("#mouseEnterSlideDownFastEffect").css("display","none");
  $("#mouseEnterSlideDownEffect").css("display","none");
  $("#mouseEnterSlideDownMediumEffect").css("display","none");
  $("#mouseEnterSlideDownSoSlowEffect").css("display","none");
  $("#mouseEnterSlideDownSlowEffect").css("display","none")

  $("#mouseEnterSlideDownEffectAll").mouseenter(function(){
    $("#mouseEnterSlideDownFastEffect").slideDown(100);
    $("#mouseEnterSlideDownEffect").slideDown();
    $("#mouseEnterSlideDownSlowEffect").slideDown("slow");
    $("#mouseEnterSlideDownMediumEffect").slideDown(1500);
    $("#mouseEnterSlideDownSoSlowEffect").slideDown(3000);
  });
});


// Slide Up 

$(document).ready(function(){
  $("#mousEnterSlideUp").mouseenter(function(){
    $("#mouseEnterSlideUpEffect").slideUp();
  });
});

// Slide Up So Slow 


$(document).ready(function(){
  $("#mousEnterSlideUpSoSlow").mouseenter(function(){
    $("#mouseEnterSlideUpSoSlowEffect").slideUp(3000);
  });
});

// Slide Up Medium 

$(document).ready(function(){
  $("#mousEnterSlideUpMedium").mouseenter(function(){
    $("#mouseEnterSlideUpMediumEffect").slideUp(1500);
  });
});

// Slide Up Slow 

$(document).ready(function(){
  $("#mousEnterSlideUpSlow").mouseenter(function(){
    $("#mouseEnterSlideUpSlowEffect").slideUp("slow");
  });
});

// Slide Up Fast 

$(document).ready(function(){
  $("#mousEnterSlideUpFast").mouseenter(function(){
    $("#mouseEnterSlideUpFastEffect").slideUp(100);
  });
});

// Slide Up All 


$(document).ready(function(){

  $("#mouseEnterSlideUpEffectAll").mouseenter(function(){
    $("#mouseEnterSlideUpFastEffect").slideUp(100);
    $("#mouseEnterSlideUpEffect").slideUp();
    $("#mouseEnterSlideUpSlowEffect").slideUp("slow");
    $("#mouseEnterSlideUpMediumEffect").slideUp(1500);
    $("#mouseEnterSlideUpSoSlowEffect").slideUp(3000);
  });
});


// Slide Toggle 

$(document).ready(function(){
  $("#SlideSlowToggle").mouseenter(function(){
    $("#SlideSlowToggleEffect").slideToggle("slow");
  });
});

// Slide Toggle Fast 

$(document).ready(function(){
  $("#SlideFastToggle").mouseenter(function(){
    $("#SlideFastToggleEffect").slideToggle(100);
  });
});

// Slide Toggle So Slow 

$(document).ready(function(){
  $("#SlideSoSlowToggle").mouseenter(function(){
    $("#SlideSoSlowToggleEffect").slideToggle(3000);
  });
});

// Slide Toggle Medium 

$(document).ready(function(){
  $("#SlideMediumToggle").mouseenter(function(){
    $("#SlideMediumToggleEffect").slideToggle(1500);
  });
});

// Slide Toggle All 

$(document).ready(function(){
  $("#SlideToggleAll").mouseenter(function(){
    $("#SlideFastToggleEffect").slideToggle(100);
    $("#SlideSlowToggleEffect").slideToggle("slow");
    $("#SlideMediumToggleEffect").slideToggle(1500);
    $("#SlideSoSlowToggleEffect").slideToggle(3000);
  });
});


// For Stop Method 
































