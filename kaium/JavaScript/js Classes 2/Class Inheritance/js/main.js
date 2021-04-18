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
    constructor(mn,fn){
        super( k ,S);
        this.Mothername = mn;
        this.fathername = fn;

    }
    fullbio(){
        return 'your name is ' + this.fullname()+" Your Father name is "+ this.fathername+" Your Mother Name " +this.Mothername ;
    }
}
kaium = new bio("Kaium""Sorif""Shahinur begum","Siddik sorif");
console.log(kaium.fullbio("Shahinur begum","Siddik sorif"))