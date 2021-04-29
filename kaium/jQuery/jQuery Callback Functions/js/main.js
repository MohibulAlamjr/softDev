$(document).ready(function(){
  $("#btn").click(function(){
    $("#p1").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});