class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  mycar = new Car1("Ford",2014);
  console.log(mycar.name+ " " + mycar.year);


  class homo{
    constructor(a, b, c, d, e, f){
      this.color =a;
      this.FName = b;
      this.LName = c;
      this.Age = d;
      this.Location = e;
      this.Current_lcation =f;
    }
      
  }
 myData = new homo("Red","MD AL","Kaium",25,"Barguna","Dhaka"); 
 console.log(myData.color+ " " +myData.FName);

 class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;

    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");
 