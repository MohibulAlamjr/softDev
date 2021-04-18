function human (first, last, bloodgroup, haircolor){
    this.firstName = first;
    this.lastName = last;
    this.blood = bloodgroup;
    this.hair = haircolor;
}

var myBrother = new human ("Easir", "Arafat", "O+", "black");
var mySister = new human ("shanjida", "Era", "O+", "Wine");

console.log(" My beother's bloodgroup is " +myBrother.blood
+ ". My sister's haircolor is "+ mySister.hair);


// adding property in the constructor


function human (first, last, bloodgroup, haircolor,nation){
    this.firstName = first;
    this.lastName = last;
    this.blood = bloodgroup;
    this.hair = haircolor;
    this.nationality = "Bengali";

}

var myBrother = new human ("Easir", "Arafat", "O+", "black");
var mySister = new human ("shanjida", "Era", "O+", "Wine");

console.log(" My beother's bloodgroup is " +myBrother.blood
+ ". My sister's haircolor is "+ mySister.hair+ ". My brother's nationality is "+ myBrother.nationality);


// prototype inheritence



function human1 (first, last, bloodgroup, haircolor,nation){
    this.firstName = first;
    this.lastName = last;
    this.blood = bloodgroup;
    this.hair = haircolor;
    this.nationality = "Bengali";

}

human1.prototype.country = "Bangladesh";
human1.prototype.district = "Jhenidah";

var myBrother = new human1 ("Easir", "Arafat", "O+", "black");
var mySister = new human1 ("shanjida", "Era", "O+", "Wine");


 console.log(myBrother.district);
 console.log(mySister.country);
 console.log(mySister.district);
 console.log(myBrother.country);