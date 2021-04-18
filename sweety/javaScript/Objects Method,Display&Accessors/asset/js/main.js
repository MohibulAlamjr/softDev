// Objects Method 

var Boys = {
    fName  : "Ohinul",
    lName  : "Alam",
    height : 4,
    weight : 28,
    year   : 2010,
    fullName : function(){
        return this.fName + " " + this.lName + " " + this.weight + "\n" + this.year;
    },
    age : function (){
        var date = new Date();
        let a = date.getFullYear();
        return a - this.year;
    }
};

console.log(Boys.fullName().toUpperCase());
console.log(Boys.age());


// Object Display

var Boys1 = {
    color : "Black",
    age : 20,
    city : "Dhaka",
    Location : "Joynagor",
};

console.log(Boys1);


console.log(Boys1.color);
console.log(Boys1.city);
console.log(Boys1.age);



// Another One 


var Boys2 = {
    color : "Grey",
    age : 23,
    city : "Dhaka",
    Location : "Siddheswari",
};

console.log(Boys2);

console.log(Boys2.color);
console.log(Boys2.city);
console.log(Boys2.age);


// Properties for in Loop


for ( a in Boys1){
    console.log(Boys1[a]);
}


// For Objects Values


var MyID = Object.values(Boys1);
console.log(MyID.toString());


var MyID1 = JSON.stringify(Boys1);
console.log(MyID1);


// Arrays of Stringify 

var Array = ["Sweety","Mouly","Joy","Kaium","Kutta","Bilai"];


var myString = JSON.stringify(Array);
console.log(myString);
