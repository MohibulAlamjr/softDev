// arrow function


const x = (x, y) => x * y;
console.log(x(5,5));

// general function 

function myFun(x,y){
    return x*y;
}

console.log(myFun(4,5));

// another way

var hello = val1 => val1 ;
console.log(hello(5));



//////////////////// javascript classes/////////////

  class homo{
      constructor(a,b,c,d,e,f,g){
          this.color = a;
          this.height = b;
          this.weight = c;
          this.eyeColor = d;
          this.hairColor = e;
          this.bloodgroup = f;
          this.year = g;



      }
      age(x){
          return x - this.year;
      }
  }

//  get year dynamcicaly 
  let date = new Date();
  let nowYear = date.getFullYear();
  


  sweety= new homo("Gray",2.8,96,"Black","red","A+",1975);

  mouly= new homo("Kala",5.3,33,"Black","Black","O+",1973);

  console.log("Sweet's color is "+sweety.color +". your eye color is "+sweety.eyeColor+" your age is "+ sweety.age(nowYear));

  console.log(mouly.age(nowYear));

// using function in class 

  