class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());

//   my inharitence

class homo{
      constructor(fastn,lastn,ag){
        this.firstName = fastn;
        this.lastName = lastn;
        this.age=ag;
      }
      
    

     fullName  () {
        return this.firstName+" " + this.lastName;
    }
};

class bio extends homo {
    constructor(fastn,lastn,mn,fn,age){
        super(fastn,lastn,age);
        
        this.motherName = mn;
        this.fatherName = fn;
    }
    fullBio(){
        return 'your name is ' + this.fullName()+ " Your Father Name is " + this.fatherName+" You Mother Name is " + this.motherName+'. your age is '+this.age;
    }
}

mohibul = new bio("Mohibul","alam","Mahmuda Sultana","Rafiqul Islam",24);
console.log(mohibul.fullBio());

