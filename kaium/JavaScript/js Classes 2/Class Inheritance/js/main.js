// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   console.log( myCar.show());


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