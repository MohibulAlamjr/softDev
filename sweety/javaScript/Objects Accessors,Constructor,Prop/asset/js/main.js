// JS Accessors (Getter & Setter)

// For Getter 

var man = {
    Fname : "Lamim",
    Lname : "Sadib",
    Nationality : "Emglish",
    get lang (){
        return this.Fname;
    }
};

console.log(man.lang);


var women = {
    Fname : "Lamim",
    Lname : "Sinha",
    color : "Light",
    age   : 11,
    Nationality : "Bangladeshi",
    get lang (){
        return this.Nationality;
    }
};
console.log(women.lang);

// For Setter 


var man1 = {
    Fname : "Lamim",
    Lname : "Sadib",
    Nationality : "Emglish",
    set lang (lang){
        this.Lname = lang;
    }
};

console.log(man1.Lname);


var women1 = {
    Fname : "Lamim",
    Lname : "Sinha",
    color : "Light",
    age   : 11,
    Nationality : "Bangladeshi",
    set onnokicu (kuchbhi){
         this.Nationality = kuchbhi;
    }
};
console.log(women1.Nationality);


// Differece Between Getter & Setter 


var XYZ = {

    firstName : "",
    lastName  : "",
    year      : "",
    noeYear   : "",

    set Fname(Fn){
        this.firstName = Fn;
    },


    set Lname(Ln){
        this.lastName = Ln;
    },


    set Year(Ye){
        this.lastName = Ye;
    },

    get fullName (){
        var x = this.firstName + " " + this.lastName;
        return x.toUpperCase();
    },

    get age(){
        return this.nowYear - this.year;
    }
}

var date = new Date();
var i = date.getFullYear();

XYZ.firstName = "Shovhana";
XYZ.lastName = "Sweety";
XYZ.year = 1999;
XYZ.nowYear = i;

console.log(XYZ.fullName);
console.log(XYZ.firstName);
console.log(XYZ.lastName);
console.log(XYZ.age);

// Define Property

var o = {
    counter : 10,
};


Object.defineProperty(o,"r",{
    get : function (){
        this.counter = 10;
    }
});

Object.defineProperty(o,"Increment",{
    get : function () {this.counter++}
});

Object.defineProperty(o,"Decrement",{
    get : function () {this.counter--}
});

Object.defineProperty(o,"Adding",{
    set : function (value) {this.counter += value;}
});

Object.defineProperty(o,"Subtract",{
    set : function (value) {this.counter -= value;}
});

Object.defineProperty(o,"Multiple",{
    set : function (value) {this.counter = this.counter*value;}
});


Object.defineProperty(o,"Div",{
    set : function (value) {this.counter = this.counter/value;}
});

o.Increment;
console.log(o.counter);

o.Decrement;
console.log(o.counter);

o.r;
console.log(o.counter);

o.Adding = 10;
console.log(o.counter);

o.Subtract = 5;
console.log(o.counter);

o.Multiple = 10;
console.log(o.counter);

o.Div = 150;
console.log(o.counter);


// JS Obj Constructor

function AA (a,b,c,d,e){
    this.firstName = a;
    this.lastName = b;
    this.color = c;
    this.height = d;
    this.age = e;
}

var A = new AA("Shovhana","Sweety","Black",5,21);
var B = new AA("Serajum","Munira","Light",5.3,44);
console.log(A.lastName);
console.log(B.height);

AA.Religion = "Islam";
console.log(B.Religion);


// For Class 

class BB {
    constructor (x,y,z){
        this.color = x;
        this.eyeColor = y;
        this.age = z;
    }
}
var S = new BB ("Black","Brown",20);
console.log(S.color);

// Adding 

S.Religion = "Islam";

S.Bgroup = function (){
    return this.color + "\n" +this.age;
}

console.log(S.Religion);
console.log(S.Bgroup());


// WE can't add a new property in constructor 

// Adding a Method to a Constructor


// Change 

function car (Volvo,BMW,TOYOTA){
    this.fName = Volvo;
    this.Lname = BMW;
    this.Brand = TOYOTA;

    this.changeName = function (n){
        this.Brand = n;
    }
}
var AB = new car ("Hunda","Marc","BMN","ACI");
console.log(AB.fName);

AB.changeName("ABC");
console.log(AB.Brand);





















































































