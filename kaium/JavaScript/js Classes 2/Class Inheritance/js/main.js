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
  console.log( myCar.show());





  
// MY Class Inheritance
class homo {
    constructor(k,S){
        this.firstname = k;
        this.lastname = S;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
}
class bio extends homo {
    constructor(K,S,mn,fn){
        super( K ,S);
        this.Student_Father_Name = mn;
        this.Student_Age = fn;

    }
    Student_bio(){
        return '\n Student name is : ' + this.fullname()+",\n Student Father name is : "+ this.Student_Father_Name+",\n Studen Age : " +this.Student_Age;
    }
}
 let st_Student = new bio("Kaium","Sorif","Siddik sorif",40);
console.log(st_Student.Student_bio());










// Getters and Setters
class  Student1{
    constructor(Fn,Ln){
        this.firstname = Fn;
        this.lastname = Ln;
    }
    get fullname(){
        return this.firstname + " "+ this.lastname;
    }
    set Age1(x){
        this.Age = x; 
    }
}
 st_Student = new Student1("Kaium","Sorif");
 console.log(st_Student.fullname);
st_Student.Age = 20;
 console.log(st_Student.Age);





 class Animals{
  constructor (cattle){
      this.animalNee = cattle;
  }
  AB() {
      return 'I have a ' + this.animalNee;
  }
};

class Produced extends Animals {
  constructor (cattle,Battle){
      super(cattle);
      this.beast = Battle;
  }
  Hi() {
      return this.AB() + ' This is a ' + this.beast;
  } 
}

let brute = new Produced ("cow","Domesticated Animal");
console.log(brute.Hi());

