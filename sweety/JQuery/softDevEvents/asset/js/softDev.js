
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
// Stop Slide Down for 5000

$(document).ready(function(){
  $("#stopSlideDownEffect5000").css("display","none");
  $("#startSlideDown5000").mouseenter(function(){
    $("#stopSlideDownEffect5000").slideDown(5000);
  });
  $("#stopSlideDown5000").mouseenter(function(){
    $("#stopSlideDownEffect5000").stop();
  });
});

// Stop Slide Down For 3000


$(document).ready(function(){
  $("#stopSlideDownEffect3000").css("display","none");
  $("#startSlideDown3000").mouseenter(function(){
    $("#stopSlideDownEffect3000").slideDown(3000);
  });
  $("#stopSlideDown3000").mouseenter(function(){
    $("#stopSlideDownEffect3000").stop();
  });
});

// Slide down for 2000


$(document).ready(function(){
  $("#stopSlideDownEffect2000").css("display","none");
  $("#startSlideDown2000").mouseenter(function(){
    $("#stopSlideDownEffect2000").slideDown(2000);
  });
  $("#stopSlideDown2000").mouseenter(function(){
    $("#stopSlideDownEffect2000").stop();
  });
});

// Stop Slide Down For 1500


$(document).ready(function(){
  $("#stopSlideDownEffect1500").css("display","none");
  $("#startSlideDown1500").mouseenter(function(){
    $("#stopSlideDownEffect1500").slideDown(1500);
  });
  $("#stopSlideDown1500").mouseenter(function(){
    $("#stopSlideDownEffect1500").stop();
  });
});

// Stop Slide Down for 700


$(document).ready(function(){
  $("#stopSlideDownEffect700").css("display","none");
  $("#startSlideDown700").mouseenter(function(){
    $("#stopSlideDownEffect700").slideDown(700);
  });
  $("#stopSlideDown700").mouseenter(function(){
    $("#stopSlideDownEffect700").stop();
  });
});

// Stop Slide down for 1000


$(document).ready(function(){
  $("#stopSlideDownEffect1000").css("display","none");
  $("#startSlideDown1000").mouseenter(function(){
    $("#stopSlideDownEffect1000").slideDown(1000);
  });
  $("#stopSlideDown1000").mouseenter(function(){
    $("#stopSlideDownEffect1000").stop();
  });
});

// Stop Slide down for 1200 


$(document).ready(function(){
  $("#stopSlideDownEffect1200").css("display","none");
  $("#startSlideDown1200").mouseenter(function(){
    $("#stopSlideDownEffect1200").slideDown(1200);
  });
  $("#stopSlideDown1200").mouseenter(function(){
    $("#stopSlideDownEffect1200").stop();
  });
});

// For Stop SlideDown All 


$(document).ready(function(){

  $("#stopSlideDownEffect5000").css("display","none");
  $("#stopSlideDownEffect3000").css("display","none");
  $("#stopSlideDownEffect2000").css("display","none");
  $("#stopSlideDownEffect1500").css("display","none");
  $("#stopSlideDownEffect1200").css("display","none");
  $("#stopSlideDownEffect1000").css("display","none");
  $("#stopSlideDownEffect700").css("display","none");

  $("#startSlideDownAll").mouseenter(function(){
    $("#stopSlideDownEffect5000").slideDown(5000);
    $("#stopSlideDownEffect3000").slideDown(3000);
    $("#stopSlideDownEffect2000").slideDown(2000);
    $("#stopSlideDownEffect1500").slideDown(1500);
    $("#stopSlideDownEffect1200").slideDown(1200);
    $("#stopSlideDownEffect1000").slideDown(1000);
    $("#stopSlideDownEffect700").slideDown(700);
  });
  $("#stopSlideDownAll").mouseenter(function(){
    $("#stopSlideDownEffect5000").stop();
    $("#stopSlideDownEffect3000").stop();
    $("#stopSlideDownEffect2000").stop();
    $("#stopSlideDownEffect1500").stop();
    $("#stopSlideDownEffect1200").stop();
    $("#stopSlideDownEffect1000").stop();
    $("#stopSlideDownEffect700").stop();
  });
});

// Stop Slide Up for 5000


$(document).ready(function(){
  $("#startSlideUp5000").mouseenter(function(){
    $("#stopSlideUpEffect5000").slideUp(5000);
  });
  $("#stopSlideUp5000").mouseenter(function(){
    $("#stopSlideUpEffect5000").stop();
  });
});

// Stop slide up for 3000


$(document).ready(function(){
  $("#startSlideUp3000").mouseenter(function(){
    $("#stopSlideUpEffect3000").slideUp(3000);
  });
  $("#stopSlideUp3000").mouseenter(function(){
    $("#stopSlideUpEffect3000").stop();
  });
});


// Stop Slide up for 2000


$(document).ready(function(){
  $("#startSlideUp2000").mouseenter(function(){
    $("#stopSlideUpEffect2000").slideUp(2000);
  });
  $("#stopSlideUp2000").mouseenter(function(){
    $("#stopSlideUpEffect2000").stop();
  });
});


// Stop Slide Up for 1500


$(document).ready(function(){
  $("#startSlideUp1500").mouseenter(function(){
    $("#stopSlideUpEffect1500").slideUp(1500);
  });
  $("#stopSlideUp1500").mouseenter(function(){
    $("#stopSlideUpEffect1500").stop();
  });
});


// Stop SlideUp for 1000


$(document).ready(function(){
  $("#startSlideUp1000").mouseenter(function(){
    $("#stopSlideUpEffect1000").slideUp(1000);
  });
  $("#stopSlideUp1000").mouseenter(function(){
    $("#stopSlideUpEffect1000").stop();
  });
});

// Stop Slide up for 500


$(document).ready(function(){
  $("#startSlideUp500").mouseenter(function(){
    $("#stopSlideUpEffect500").slideUp(500);
  });
  $("#stopSlideUp500").mouseenter(function(){
    $("#stopSlideUpEffect500").stop();
  });
});

// Stop Slide Up for 1200

$(document).ready(function(){
  $("#startSlideUp1200").mouseenter(function(){
    $("#stopSlideUpEffect1200").slideUp(1200);
  });
  $("#stopSlideUp1200").mouseenter(function(){
    $("#stopSlideUpEffect1200").stop();
  });
});

// Stop Slide Up for All 


$(document).ready(function(){

  $("#startSlideUpAll").mouseenter(function(){
    $("#stopSlideUpEffect5000").slideUp(5000);
    $("#stopSlideUpEffect3000").slideUp(3000);
    $("#stopSlideUpEffect2000").slideUp(2000);
    $("#stopSlideUpEffect1500").slideUp(1500);
    $("#stopSlideUpEffect1200").slideUp(1200);
    $("#stopSlideUpEffect1000").slideUp(1000);
    $("#stopSlideUpEffect500").slideUp(500);
  });
  $("#stopSlideUpAll").mouseenter(function(){
    $("#stopSlideUpEffect5000").stop();
    $("#stopSlideUpEffect3000").stop();
    $("#stopSlideUpEffect2000").stop();
    $("#stopSlideUpEffect1500").stop();
    $("#stopSlideUpEffect1200").stop();
    $("#stopSlideUpEffect1000").stop();
    $("#stopSlideUpEffect500").stop();
  });
});


// Stop For Toggle 2000

$(document).ready(function(){
  $("#startSlideToggle2000").mouseenter(function(){
    $("#stopSlideToggleEffect2000").slideToggle(2000);
  });
  $("#stopSlideToggle2000").mouseenter(function(){
    $("#stopSlideToggleEffect2000").stop();
  });
});

//Stop Slide toggle for 3000

$(document).ready(function(){
  $("#startSlideToggle3000").mouseenter(function(){
    $("#stopSlideToggleEffect3000").slideToggle(3000);
  });
  $("#stopSlideToggle3000").mouseenter(function(){
    $("#stopSlideToggleEffect3000").stop();
  });
});

// Stop Slide Toggle for 1500

$(document).ready(function(){
  $("#startSlideToggle1500").mouseenter(function(){
    $("#stopSlideToggleEffect1500").slideToggle(1500);
  });
  $("#stopSlideToggle1500").mouseenter(function(){
    $("#stopSlideToggleEffect1500").stop();
  });
});

//Stop Slide toggle for 1000

$(document).ready(function(){
  $("#startSlideToggle1000").mouseenter(function(){
    $("#stopSlideToggleEffect1000").slideToggle(1000);
  });
  $("#stopSlideToggle1000").mouseenter(function(){
    $("#stopSlideToggleEffect1000").stop();
  });
});

//Stop Slide Toggle for 500

$(document).ready(function(){
  $("#startSlideToggle500").mouseenter(function(){
    $("#stopSlideToggleEffect500").slideToggle(500);
  });
  $("#stopSlideToggle500").mouseenter(function(){
    $("#stopSlideToggleEffect500").stop();
  });
});


// Stop Slide Toggle for All 


$(document).ready(function(){

  $("#startSlideToggleAll").mouseenter(function(){
    $("#stopSlideToggleEffect3000").slideToggle(3000);
    $("#stopSlideToggleEffect2000").slideToggle(2000);
    $("#stopSlideToggleEffect1500").slideToggle(1500);
    $("#stopSlideToggleEffect1000").slideToggle(1000);
    $("#stopSlideToggleEffect500").slideToggle(500);
  });
  $("#stopSlideToggleAll").mouseenter(function(){
    $("#stopSlideToggleEffect3000").stop();
    $("#stopSlideToggleEffect2000").stop();
    $("#stopSlideToggleEffect1500").stop();
    $("#stopSlideToggleEffect1000").stop();
    $("#stopSlideToggleEffect500").stop();
  });
});


// CallBack Function

// CallBack For Slow Hide 

$(document).ready(function(){
  $("#mouseEnterCallbackSlowHide").mouseenter(function(){
    $("#mouseEnterCallbackSlowHideEffect").hide("slow", function(){
     let a = $("#mouseEnterCallbackSlowHideEffect").text();
     alert(a);
    });
  });
});

// CallBack for so slow hide 


$(document).ready(function(){
  $("#mouseEnterCallbackSoSlowHide").mouseenter(function(){
    $("#mouseEnterCallbackSoSlowHideEffect").hide(5000, function(){
     let a = $("#mouseEnterCallbackSoSlowHideEffect").text();
     alert(a);
    });
  });
});

// CllBack for Slowly Hide 

$(document).ready(function(){
  $("#mouseEnterCallbackSlowlyHide").mouseenter(function(){
    $("#mouseEnterCallbackSlowlyHideEffect").hide(3000, function(){
     let a = $("#mouseEnterCallbackSlowlyHideEffect").text();
     alert(a);
    });
  });
});


// Call Back for Medium Slow Hide 


$(document).ready(function(){
  $("#mouseEnterCallbackMediumHide").mouseenter(function(){
    $("#mouseEnterCallbackMediumHideEffect").hide(1500, function(){
     let a = $("#mouseEnterCallbackMediumHideEffect").text();
     alert(a);
    });
  });
});

// CallBack for Fast Hide 

$(document).ready(function(){
  $("#mouseEnterCallbackFastHide").mouseenter(function(){
    $("#mouseEnterCallbackFastHideEffect").hide(500, function(){
     let a = $("#mouseEnterCallbackFastHideEffect").text();
     alert(a);
    });
  });
});

// For CallBack First Then Alert
// CallBack for so slow 

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeHideSoSlow").mouseenter(function(){
    $("#mouseEnterCallbackBeforeHideSoSlowEffect").hide(5000);
    let a = $("#mouseEnterCallbackBeforeHideSoSlowEffect").text();
    alert(a);
  });
});

// Call Back for slowly Hide

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeHideSlowly").mouseenter(function(){
    $("#mouseEnterCallbackBeforeHideSlowlyEffect").hide(3000);
    let a = $("#mouseEnterCallbackBeforeHideSlowlyEffect").text();
    alert(a);
  });
});

// call Back for Fast Hide

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeHideFast").mouseenter(function(){
    $("#mouseEnterCallbackBeforeHideFastEffect").hide(1000);
    let a = $("#mouseEnterCallbackBeforeHideFastEffect").text();
    alert(a);
  });
});

// CallBack for Show 

// Call Back for Slow Show 

$(document).ready(function(){
  $("#mouseEnterCallbackSlowShowEffect").css("display","none");
    $("#mouseEnterCallbackSlowShow").mouseenter(function(){
      $("#mouseEnterCallbackSlowShowEffect").show("slow", function(){
        let a = $("#mouseEnterCallbackSlowShowEffect").text();
        alert(a);
      });
    });
  });

// CallBack for Slow Show 

$(document).ready(function(){
  $("#mouseEnterCallbackSoSlowShowEffect").css("display","none");
    $("#mouseEnterCallbackSoSlowShow").mouseenter(function(){
      $("#mouseEnterCallbackSoSlowShowEffect").show(5000, function(){
        let a = $("#mouseEnterCallbackSoSlowShowEffect").text();
        alert(a);
      });
    });
  });


// CallBack for Medium Slow Show 

$(document).ready(function(){
  $("#mouseEnterCallbackMediumSlowShowEffect").css("display","none");
    $("#mouseEnterCallbackMediumSlowShow").mouseenter(function(){
      $("#mouseEnterCallbackMediumSlowShowEffect").show(1500, function(){
        let a = $("#mouseEnterCallbackMediumSlowShowEffect").text();
        alert(a);
      });
    });
  });


// For Callback Slowly Show 

$(document).ready(function(){
  $("#mouseEnterCallbackSlowlyShowEffect").css("display","none");
    $("#mouseEnterCallbackSlowlyShow").mouseenter(function(){
      $("#mouseEnterCallbackSlowlyShowEffect").show(3000, function(){
        let a = $("#mouseEnterCallbackSlowlyShowEffect").text();
        alert(a);
      });
    });
  });

// For CallBack Fast Show 

$(document).ready(function(){
  $("#mouseEnterCallbackFastShowEffect").css("display","none");
    $("#mouseEnterCallbackFastShow").mouseenter(function(){
      $("#mouseEnterCallbackFastShowEffect").show(500, function(){
        let a = $("#mouseEnterCallbackFastShowEffect").text();
        alert(a);
      });
    });
  });

// CallBack First Then Show 

// CallBack for so slow 

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeShowSoSlowEffect").css("display","none");
  $("#mouseEnterCallbackBeforeShowSoSlow").mouseenter(function(){
    $("#mouseEnterCallbackBeforeShowSoSlowEffect").show(5000);
    let a = $("#mouseEnterCallbackBeforeShowSoSlowEffect").text();
    alert(a);
  });
});

// CallBack For Slow 

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeShowSlowEffect").css("display","none");
  $("#mouseEnterCallbackBeforeShowSlow").mouseenter(function(){
    $("#mouseEnterCallbackBeforeShowSlowEffect").show(3000);
    let a = $("#mouseEnterCallbackBeforeShowSlowEffect").text();
    alert(a);
  });
});

// CallBack For Fast 

$(document).ready(function(){
  $("#mouseEnterCallbackBeforeShowFastEffect").css("display","none");
  $("#mouseEnterCallbackBeforeShowFast").mouseenter(function(){
    $("#mouseEnterCallbackBeforeShowFastEffect").show(1000);
    let a = $("#mouseEnterCallbackBeforeShowFastEffect").text();
    alert(a);
  });
});

// Chaining Function 

// Chaining for more slow

$(document).ready(function(){
  $("#mouseEnterChainingMoreSlow").mouseenter(function(){
    $("#mouseEnterChainingEffectMoreSlow")
      .slideUp(2000)
      .slideDown(2000);
  });
});

// Chaining for so slow

$(document).ready(function(){
  $("#mouseEnterChainingSoSlow").mouseenter(function(){
    $("#mouseEnterChainingEffectSoSlow")
      .slideUp(3000)
      .slideDown(3000);
  });
});

// Chaining for medium slow

$(document).ready(function(){
  $("#mouseEnterChainingMediumSlow").mouseenter(function(){
    $("#mouseEnterChainingEffectMediumSlow")
      .slideUp(1500)
      .slideDown(1500);
  });
});

// Chaining for slow 

$(document).ready(function(){
  $("#mouseEnterChainingSlow").mouseenter(function(){
    $("#mouseEnterChainingEffectSlow")
      .slideUp("slow")
      .slideDown("slow");
  });
});

// Chaining for Fast 

$(document).ready(function(){
  $("#mouseEnterChainingFast").mouseenter(function(){
    $("#mouseEnterChainingEffectFast")
      .slideUp(300)
      .slideDown(300);
  });
});

// Chaining for fast and slow 

$(document).ready(function(){
  $("#mouseEnterChainingFastSlow").mouseenter(function(){
    $("#mouseEnterChainingEffectFastSlow")
      .slideUp(300)
      .slideDown(3000);
  });
});


// For Animation 

// Animate for Left 250px

$(document).ready(function(){
  $("#mouseEnterAnimateLeft250px").mouseenter(function(){
    $("#mouseEnterAnimateLeft250pxEffect").animate({left: '250px'});
  });
});


// Animate for Left 150px

$(document).ready(function(){
  $("#mouseEnterAnimateLeft150px").mouseenter(function(){
    $("#mouseEnterAnimateLeft150pxEffect").animate({left: '150px'});
  });
});


// Animate for Left 100px

$(document).ready(function(){
  $("#mouseEnterAnimateLeft100px").mouseenter(function(){
    $("#mouseEnterAnimateLeft100pxEffect").animate({left: '100px'});
  });
});


// Animate for Left 50px

$(document).ready(function(){
  $("#mouseEnterAnimateLeft50px").mouseenter(function(){
    $("#mouseEnterAnimateLeft50pxEffect").animate({left: '50px'});
  });
});

// Animate for Right 250px 

$(document).ready(function(){
  $("#mouseEnterAnimateRight250px").mouseenter(function(){
    $("#mouseEnterAnimateRight250pxEffect").animate({right: '250px'});
  });
});


// Animate for Right 150px 

$(document).ready(function(){
  $("#mouseEnterAnimateRight150px").mouseenter(function(){
    $("#mouseEnterAnimateRight150pxEffect").animate({right: '150px'});
  });
});


// Animate for Right 100px 

$(document).ready(function(){
  $("#mouseEnterAnimateRight100px").mouseenter(function(){
    $("#mouseEnterAnimateRight100pxEffect").animate({right: '100px'});
  });
});


// Animate for Right 50px 

$(document).ready(function(){
  $("#mouseEnterAnimateRight50px").mouseenter(function(){
    $("#mouseEnterAnimateRight50pxEffect").animate({right: '50px'});
  });
});

// Animate for left 250px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateLeft250HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateLeft250HeightWidthOpacityEffect").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

// Animate for left 150px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateLeft150HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateLeft150HeightWidthOpacityEffect").animate({
      left: '150px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


// Animate for left 100px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateLeft100HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateLeft100HeightWidthOpacityEffect").animate({
      left: '100px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


// Animate for left 50px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateLeft50HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateLeft50HeightWidthOpacityEffect").animate({
      left: '50px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

// Animate for Right 250px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateRight250HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateRight250HeightWidthOpacityEffect").animate({
      right: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


// Animate for Right 150px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateRight150HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateRight150HeightWidthOpacityEffect").animate({
      right: '150px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

// Animate for Right 100px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateRight100HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateRight100HeightWidthOpacityEffect").animate({
      right: '100px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

// Animate for Right 50px with innerHeight,width and opacity 

$(document).ready(function(){
  $("#mouseEnterAnimateRight50HeightWidthOpacity").mouseenter(function(){
    $("#mouseEnterAnimateRight50HeightWidthOpacityEffect").animate({
      right: '50px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

