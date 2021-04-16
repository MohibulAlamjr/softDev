// function x(a,b){
//     var c=a+b;console.log(c)}
//     x(9,4)
//     var x=function(a,b){var c=a+b;console.log(c)}
//      x(4,2);

    


// var sum=function(a,b){var c=a+b;return c;}
// var d= sum(54,46);
// if (sum(50,50)==100){
//     console.log('yes');
// }
//  else{console.log('no');}


function age(date,month,year){
    var y=(2021-year)-1;
    var m=(12-month)+3;
    if(m>=12){
        m= m-12;
    }
    var d=(30-date)+14;
    if(d>=30){
        d=d-30;
    }
    var result=" your "+y+" years "+m+" month "+d+" days ";
    return result;
}
console.log(age(20,08,1996));
console.log(age(07,10,1999));
console.log(age(05,05,1997));
console.log(age(01,01,1999));
console.log(age(10,04,1998));
console.log(age(01,03,1999));
console.log(age(31,12,1999));
