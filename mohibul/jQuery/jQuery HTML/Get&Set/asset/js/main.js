// text 
$(document).ready(function(){
  $("#btn1").click(function(){
      var x= $("#p01").text();
      $("#h01").text(x);
   })

})
// html 
$(document).ready(function(){
    $("#btn2").click(function(){
        var y= $("#p01").html();
        $("#h02").html(y);
        
     })
  
  })
// val 
  $(document).ready(function(){
    $("#btn3").click(function(){
        var z= $("#in01").val();
        $("#h03").text(z);
        
     })
  
  })

//   src 
  $(document).ready(function(){
    $("#btn4").click(function(){
        var m= $("#image").attr("src");
        $("#img2").attr("src",m);
        
     })
  
  })

// href 
  $(document).ready(function(){
    $("#btn5").click(function(){
        var n= $("#ancer").attr("href");
        $("#ancer2").attr("href",n);
        
     })
  
  })
