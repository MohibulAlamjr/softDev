$(document).ready(function(){
    for (i = new Date().getFullYear(); i > 1900; i--){
        $('#Year').append($('<option />').html(i));
    }
    for (i = 31; i>0; i--){
        $('#Day').append($('<option />').html(i));
    }
    var mname = ["january","February","March","April","May","June","July","Auguest","September","October","November","December"];
    for(i = 0; i<13; i--){
        $('#month').append($('<option />').html(i));
    }
})