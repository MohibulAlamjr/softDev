// function age(date,month,year){
//     var y=(2021-year)-1;
//     var m=(12-month)+3;
//     if(m>=12){
//         m= m-12;
//     }
//     var d=(30-date)+14;
//     if(d>=30){
//         d=d-30;
//     }
//     var result=" your "+y+" years "+m+" month "+d+" days ";
//     return result;
// }
// console.log(age(20,08,1996));
// console.log(age(07,10,1999));
// console.log(age(05,05,1997));
// console.log(age(01,01,1999));
// console.log(age(10,04,1998));
// console.log(age(01,03,1999));
// console.log(age(31,12,1999));


function age(date,month){
    var m=(12-month)+3;
    if(m>=12){
        m= m-12;
    }
    var d=(30-date)+14;
    if(d>=30){
        d=d-30;
    }
    var result=" your "+m+" month "+d+" days ";
    return result;
}
console.log(age(31,12));