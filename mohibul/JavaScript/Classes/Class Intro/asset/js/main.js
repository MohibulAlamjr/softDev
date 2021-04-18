// classes

class car{
constructor(n,y){
    this.name = n;
    this.year = y;

}

}

MohibulBike = new car("SUJUKI-GSXR-150",2022);
moulyCar  = new car ("BMW",2025);

console.log("Mohibul's bike is "+ MohibulBike.name + ". He will buy his bike in "+ MohibulBike.year);
console.log("Mouly's bike is "+ moulyCar.name + ". she will buy her car in "+ moulyCar.year);

// method 

class person{
    constructor(a,b){
        this.name = a;
        this.year = b;
    }
//    without perameter
    age(){
        let date= new Date();
        return date.getFullYear() - this.year;
    }
    //    with perameter
    age2(x){
      return x- this.year;
    }

    }
mouly = new person('mouly',1997);
sweety = new person('sweety',1914);

console.log(mouly.age());
console.log(sweety.age());

let date= new Date();
let y = date.getFullYear();
console.log(sweety.age2(y));