// mouseleavealert
$(document).ready(function () {
    $("#alertText").css("display", "none");
    $("#alert").mouseleave(function () {
        let a = $("#alertText").text();
        alert(a);
    })
})
// mouseleavehide
$(document).ready(function () {

    $("#mouseLeaveHide").mouseleave(function () {
        $("#mouseLeaveHideEffect").hide();

    })
})
// mouseleavehideSlow
$(document).ready(function () {

    $("#mouseLeaveHideSlow").mouseleave(function () {
        $("#mouseLeaveHideEffectSlow").hide();

    })
})
// mouseleaveshow
$(document).ready(function () {

    $("#mouseLeaveShow").mouseleave(function () {
        $("#mouseLeaveShowEffect").show();

    })
})
// mouseleaveshowSlow
$(document).ready(function () {

    $("#mouseLeaveShowSlow").mouseleave(function () {
        $("#mouseLeaveShowEffectSlow").show(1000);

    })
})

// mouseleavetoggle
$(document).ready(function () {

    $("#mouseLeaveToggle").mouseleave(function () {
        $("#mouseLeaveToggleEffect").toggle();

    })
})
// mouseleavetoggleSlow
$(document).ready(function () {

    $("#mouseLeaveToggleSlow").mouseleave(function () {
        $("#mouseLeaveToggleEffectSlow").toggle(1000);

    })
})

// mouseleavefadein
$(document).ready(function () {
    $("#mouseLeaveFadeInEffect").css("display", "none");
    $("#mouseLeaveFadeIn").mouseleave(function () {
        $("#mouseLeaveFadeInEffect").fadeIn();

    })
})
// mouseleavefadeinSlow
$(document).ready(function () {
    $("#mouseLeaveFadeInEffectSlow").css("display", "none");
    $("#mouseLeaveFadeInSlow").mouseleave(function () {
        $("#mouseLeaveFadeInEffectSlow").fadeIn("slow");

    })
})

// mouseleavefadeOut
$(document).ready(function () {

    $("#mouseLeaveFadeOut").mouseleave(function () {
        $("#mouseLeaveFadeOutEffect").fadeOut();

    })
})
// mouseleavefadeOutSlow
$(document).ready(function () {

    $("#mouseLeaveFadeOutSlow").mouseleave(function () {
        $("#mouseLeaveFadeOutEffectSlow").fadeOut("slow");

    })
})

// mouseleavefadeToggle
$(document).ready(function () {

    $("#mouseLeaveFadeToggle").mouseleave(function () {
        $("#mouseLeaveFadeToggleEffect").fadeToggle();

    })
})
// mouseleavefadeOutSlow
$(document).ready(function () {

    $("#mouseLeaveFadeToggleSlow").mouseleave(function () {
        $("#mouseLeaveFadeToggleEffectSlow").fadeToggle("slow");

    })
})
// mouseleavefadeToggle
$(document).ready(function () {

    $("#mouseLeaveFadeToggle").mouseleave(function () {
        $("#mouseLeaveFadeToggleEffect").fadeToggle();

    })
})
// mouseleavefadeOutToggleSlow
$(document).ready(function () {

    $("#mouseLeaveFadeToggleSlow").mouseleave(function () {
        $("#mouseLeaveFadeToggleEffectSlow").fadeToggle("slow");

    })
})

// mouseleavefadeTo
$(document).ready(function () {

    $("#mouseLeaveFadeTo").mouseleave(function () {
        $("#mouseLeaveFadeToEffect").fadeTo("slow", 0.7);

    })
})
// mouseleavefadeToSlow
$(document).ready(function () {

    $("#mouseLeaveFadeToSlow").mouseleave(function () {
        $("#mouseLeaveFadeToEffectSlow").fadeTo("slow", 0.15);

    })
})

// mouseleaveslideDown
$(document).ready(function () {

    $("#mouseLeaveSlideDown").mouseleave(function () {
        $("#mouseLeaveSlideDownEffect").slideDown();

    })
})

// mouseleaveslideDownSlow
$(document).ready(function () {

    $("#mouseLeaveSlideDownSlow").mouseleave(function () {
        $("#mouseLeaveSlideDownEffectSlow").fadeTo("slow");

    })
})
// mouseleaveslideDown
$(document).ready(function () {

    $("#mouseLeaveSlideDown").mouseleave(function () {
        $("#mouseLeaveSlideDownEffect").slideDown();

    })
})

// mouseleaveslideDownSlow
$(document).ready(function () {

    $("#mouseLeaveSlideDownSlow").mouseleave(function () {
        $("#mouseLeaveSlideDownEffectSlow").fadeTo("slow");

    })
})
// mouseleaveslideUp
$(document).ready(function () {

    $("#mouseLeaveSlideUp").mouseleave(function () {
        $("#mouseLeaveSlideUpEffect").slideUp();

    })
})

// mouseleaveslideUpSlow
$(document).ready(function () {

    $("#mouseLeaveSlideUpSlow").mouseleave(function () {
        $("#mouseLeaveSlideUpEffectSlow").slideUp("slow");

    })
})
// mouseleaveslideToggle
$(document).ready(function () {

    $("#mouseLeaveSlideToggle").mouseleave(function () {
        $("#mouseLeaveSlideToggleEffect").slideToggle();

    })
})

// mouseleaveslideToggleSlow
$(document).ready(function () {

    $("#mouseLeaveSlideToggleSlow").mouseleave(function () {
        $("#mouseLeaveSlideToggleEffectSlow").slideToggle(1000);

    })
})