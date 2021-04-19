class string {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Assalamualaikum";
    }
  }
  
 console.log(string.hello());


 class person {
    constructor(fname, lname){
        this.name = fname;
        this.nname = lname;

     }

     static fullname (Y){
         return Y.name + " "+ Y.nname;
     }
 }
  let person1 = new person ("serajum", "munira");
  console.log(person.fullname(person1));




  class flower {
    constructor(name, color){
        this.name = name;
        this.color = color;

     }

     static about (x){
         return x.name + " "+ x.color;
     }
 }
  let flower1 = new flower ("Beli", "White");
  console.log(flower.about(flower1));




