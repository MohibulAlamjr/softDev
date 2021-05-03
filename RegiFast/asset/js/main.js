

// $(document).ready(function(){
//     var text="";
// $("#btn2").click(function(){

//     text = $("#card").html();
//     $("#main").append(text).html();
// })


// })




// $(document).ready(function(){
//     $("#btn02").click(function(){
//         var u = $("#inlineFormInput").val();
//         var v =$("#inlineFormInputGroup").val();
//         var id=$("#sid").text();
//         alert("Course Name="+ u + " and Course ID=" + v +"Successfully Included" );

//         var xhttp = new XMLHttpRequest();
      
//         xhttp.open("GET","try.php?q=" + u +'&u='+ v+'&t='+ id , true);
//         xhttp.send();
//     })
// })

$(document).ready(function(){
    $("#btn001").click(function(){
        $("#btn002").fadeIn(2000);
    })
})


function myfun(){

    alert("This Page is on Processing")
}