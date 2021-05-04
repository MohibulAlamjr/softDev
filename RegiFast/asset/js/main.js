

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

// password validation 
$(document).ready(function(){
    $("#fpass").blur(function(){
       var pass= $(this).val();
        $("#cpass").blur(function(){
       var pass2=$("#cpass").val();
       if(pass==pass2){
           $("#show1").text("Password is matched").css("color","green");
           $("#btns01").fadeIn(1000);
       }else{
        $("#show1").text("Password doesn't match").css("color","red");
        $("#btns01").hide();
       }
        });

    })
})

// email validation 

$(document).ready(function(){
    $("#email").blur(function(){
      var mail=$(this).val()
      var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(mail.match(mailformat)){
        $("#show2").text("Email Formate is matched").css("color","green");
        $("#btns01").fadeIn(1000);
      }else{
        $("#show2").text("Email Formate doesn't match").css("color","red");
        $("#btns01").hide();
      }
    })
})

//phone number validation

$(document).ready(function(){
    $("#phone").blur(function(){
      var mail=$(this).val()
      var mailformat =/^\d{11}$/;

      if(mail.match(mailformat)){
        $("#show3").text("Phone Number Formate is matched").css("color","green");
        $("#btns01").fadeIn(1000);
      }else{
        $("#show3").text("Phone Number Formate doesn't match").css("color","red");
        $("#btns01").hide();
      }
    })
})


