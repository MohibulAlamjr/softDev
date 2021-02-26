var fname,lname,fullname,gender;

fname='Shovhana';
lname='Islam';
gender='Female';

if(gender=='Female'){

    fullname= 'Miss. '+fname+' '+ lname;
}
else{
    fullname= 'Mr. '+fname+' '+ lname;
}
console.log(gender);


//for js syntex
var x,y,z;
x=10;
y=20;
z=x+y;
console.log(z);

var a=15,b='sweety',c=5,d=20;
e=a+c+d+b;
f=a+b+c+d;
console.log(e);
console.log(f);

//for undefined

var ud;
typeof(ud);
var ud=13;
console.log(ud);

{
let n=00;
n=3;
console.log(n);
}

//difference of let and const

const rd=25;
console.log(rd);

const s=5;
const w=6;
const t=s+w;
console.log(t);

{
    let i=9;
    i=19;
    i=i+i;
    console.log(i);
}

//Operator

var a=3,b=2,c=10,g=21;
d=a*b;
m=c/b;
i=g%b;
console.log(d);
console.log(m);
console.log(i);


//For test

var a=3,b=2,c=5,d=6,e='jery',u=63,f=88;
g=a+b+c+d+e+u+f;

console.log(g);


var lname='tom',lName='jery';
q=lname+' ' +'&'+' '+ lName;
console.log(q);

var fname='mohibul',lname='alam',age=24;
if(fullname=='mohibul alam'){

    gender= 'Mr. '+fname+' '+lname; 
}
else{
    gender='Miss.'+fname+' '+lname;
}
console.log(fullname);




{
    let a;
   let b=a;
   a=90;
   console.log(b);
}

var str="Please locate 'locate' occurs!";
var pos=str.lastIndexOf("locate");
console.log(pos);

var str="Please locate 'locate' occurs!";
var pos=str.search("locate");
console.log(pos);

var str="Apple,Banana";
var res=str.substr(-4);
console.log(res);

var fruits=["Banana","Orange","Apple"];
document.getElementById("demo").innerHTML =fruits.join(",");
console.log('fruits');








