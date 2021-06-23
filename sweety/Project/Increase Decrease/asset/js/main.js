var data = 0;
document.getElementById("hh").innerText=data;

function increment(){
    data=data+1;
    document.getElementById("hh").innerText=data;


};

function decrement(){
    data=data-1;
    document.getElementById("hh").innerText=data;

}

$(document).ready(function(){
    $("#dec").click(function(){
         $("#hh").css('color','red');
    });
   
})

$(document).ready(function(){
    $("#inc").click(function(){
         $("#hh").css('color','green');
    });
   
})

