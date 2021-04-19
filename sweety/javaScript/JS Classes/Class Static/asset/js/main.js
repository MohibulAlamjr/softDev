class Body{
    constructor (human){
        this.body = human;
    }

    static child(){
        return "Nobody.";
    }
}

let myBody = new Body ("Child1");
console.log(Body.child());


// ACCESS STATIC METHOD 

class Body1{
    constructor (human){
        this.body = human;
    }

    static child(a){
        return "Hi " + a.body;
    }
}

let myBody1 = new Body ("Childrens");
console.log(Body1.child(myBody1));




