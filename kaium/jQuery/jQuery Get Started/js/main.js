// click() , hide().

// $(document).ready(
//     function () {
//         $("p").click(
//             function () {
//                 $(this).hide();
//             });
//     });

// The element Selector

$(document).ready(
    function () {
        $("button").click(
            function () {
                $("p").hide();
            });
    });


// The #id Selector
$(document).ready(function () {
    $("#tbn").click(function () {
        $("#test").hide();
    });
});


// The .class Selector


$(document).ready(function () {
    $("#btn").click(function () {
        $(".test").hide();
    });
});