
// CLASS 

class ABC {
    constructor (m,n,o,p){
        this.A = m;
        this.B = n;
        this.C = o;
        this.D = p;
    }
}

ABC1 = new ABC ("Flower","Fruits","Foods","Animals");
ABC2 = new ABC ("Flower","Foods","Animals");

console.log("ABC1's fovourite is " + ABC1.A + "\n" + " Second fovourite is " + ABC1.B + " \n" + "Third Fovourite " + ABC1.C);

console.log("ABC2's Dislike " + ABC2.B + "\n" + "It's like " + ABC2.C);


// Class Method 

class Hi {
    constructor (a,b,c,d){
        this.flowers = a;
        this.animals = b;
        this.foods = c;
        this.year = d;
    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    age1(x){
        return x - this.year;
    }
}

Mine = new Hi("Rose","Cat","Chicken",1999);
Your = new Hi("Padma","Dog","Beef",1998);

console.log("Mine's Favourite is : " + Mine.foods);
console.log("Your's Fovourite is : " + Your.flowers);


console.log(Mine.age());
console.log(Your.age());


let date= new Date();
let w = date.getFullYear();
console.log(Mine.age1(w));








































