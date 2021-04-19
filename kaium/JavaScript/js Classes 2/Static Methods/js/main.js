// JavaScript Static Methods
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");
console.log(Car.hello());

// access static mathod in object
class Car1 {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name ;
    }
  }
  
  let myCar1 = new Car1("Ford");
console.log(Car1.hello(myCar1));

