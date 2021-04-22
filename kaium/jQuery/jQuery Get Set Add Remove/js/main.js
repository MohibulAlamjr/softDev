// Get Content - text(), html(), and val()

$(document).ready(function(){
    $("#btn1").click(function(){
        var z = $("#test").html();
        $("#btn1").text(z);
    })
})

// $(document).ready(function () {
//     $("#btn1").click(function () {
//         alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function () {
//         alert("HTML: " + $("#test").html());
//     });
// })


// $(document).ready(function(){
//     $("").click(function(){
//         var z = $("").html();
//         $("").text(z);
//     })
// })

