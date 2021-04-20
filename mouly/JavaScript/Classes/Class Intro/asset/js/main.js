// classes

class flower {
    constructor (FlowerN,FlowerC,FlowerP){
        this.name = FlowerN;
        this.color = FlowerC;
        this.price = FlowerP;

    }
}

myGarden = new flower ("rose","black",100);
mygarden = new flower ("beli","white",10);

console.log("His favourite flower is "+myGarden.color+ " "+myGarden.name+ ".My favourite flower is  "+ mygarden.name + " and it's price is "+mygarden.price + "TK");

// calculating age without perameter

class person {
    constructor(datte, year){
        this.datee = datte;
        this.year = year;
    }

 age (){
     let date = new Date ();
     return date.getFullYear() - this.year;
 }

}

Mouly = new person ("5 May",1997);
Era = new person ("16 july",2005);

console.log(Mouly.age());
console.log(Era.age());

// calculating age with perameter

class person1 {
    constructor(name1, year){
        this.name = name1;
        this.year = year;
    }

 ages (y){
     return y -this.year;
     

}
 }

 let date = new Date ();
 let z = date.getFullYear();
Mouly1 = new person1 ("Munira",1995);
Era1 = new person1 ("shanjida",2003);

console.log(Mouly1.ages(z));
console.log(Era1.ages(z));