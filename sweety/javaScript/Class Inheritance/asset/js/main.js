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

 brute = new Produced ("cow","Domesticated Animal");
console.log(brute.Hi());



// INHERITANCE 

class women {
    constructor (a,b,c,d){
        this.fName = a;
        this.lName = b;
        this.color = c;
        this.height = d;
    }

    fullName() {
        return this.fName + " " + this.lName + "My color is  " + this.color + 'My height is '+ this.height;
    }
};

class Identity extends women {
    constructor (a,b,c,d,e,f){
        super(a,b,c,d);

        this.Education = e;
        this.Religion = f;
    }

    fullID(){

        return ' My name is ' + this.fullName() + "\n"  + this.Education + "\n"  + this.Religion;
    }
}

Women1 = new Identity ("Shayra","Chowdhury","Brown",5,"Engineer","Islam");
console.log(Women1.fullID());

