class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  mycar = new Car1("Ford",2014);
  console.log(mycar.name+ " " + mycar.year);


  class MyClass{
    constructor(a, b, c, d, e, f){
      this.color =a;
      this.FName = b;
      this.LName = c;
      this.Age = d;
      this.Location = e;
      this.Current_lcation =f;
    }
      
  }
 myData = new MyClass("Red","MD AL","Kaium",25,"Barguna","Dhaka"); 
 console.log(myData.color+ " " +myData.FName);






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
 
 