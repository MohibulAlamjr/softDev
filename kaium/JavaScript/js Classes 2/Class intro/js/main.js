// Classes
class car {
    constructor(Name,Year){
        this.name = Name;
        this.year = Year;
    }

}
KaiumCar = new car("BMW",2021);
Sweettea = new car("pelsur", 2020)
console.log(KaiumCar.name + " " + KaiumCar.year);
console.log(Sweettea.name + " " + Sweettea.year);

// The Constructor Method
class Car {
    constructor(n, yr) {
      this.name = n;
      this.year = yr;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
    age2(x){
        return x - this.year;
    }
  }
  
   myCar = new Car("Ford", 2014);
//   let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");
  let date = new Date();
   y = date.getFullYear();
  console.log(myCar.age2(y));

