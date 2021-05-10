
$(document).ready(function(){
    for (i = new Date().getFullYear(); i > 1904; i--)
{
    $('#year').append($('<option />').html(i));
}

for (i = 1; i < 32; i++)
{
    $('#days').append($('<option />').html(i));
}

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (i = 0 ; i < 13 ; i++)
{
    $('#months').append($('<option />').html(monthNames[i]));
}

})