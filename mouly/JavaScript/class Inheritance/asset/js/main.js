// class inheritance

class flower{
    constructor(fname, color, pri){
        this.name = fname;
        this.color = color;
        this.price = pri;
    }


flowerName (){
    return this.name+ " "+ this.color;
}
 };

 class food extends flower{
     constructor(fname,color,pri,Foodname,Foodprice){
     super (fname, color, pri);
     this.FdName = Foodname;
     this.Fdprice = Foodprice;
 }
 myFavourite (){
     return "My fovourite flower name is "+this.name+" and its color is "+ this.color+ ". My favourite food is "+this.FdName+ " and its price is "+ this.Fdprice;
 }
   }

   favourite = new food ("Rose", "Blue", 100, "Ice-cream",100);
   console.log(favourite.myFavourite());



   class human {
       constructor(first, mid, last){
           this.fname = first;
           this.mname = mid;
           this.lname = last;
       }
       fullname (){
           return this.fname+ " "+ this.mname+ " "+ this.lname;
       }
   };

   class address extends human {
       constructor(first, mid, last, nation, country){
           super (first, mid, last);
           this.nationality = nation;
           this.country = country;
       }
       myAddress (){
           return " My name is "+ this.fullname ()+ ". My nationality is  "+ this.nationality+". My country is  "+ this.country;
       }
   }

   mouly = new address ("Serajum", "munira", "Mouly","Begali", "Bangladesh");
   console.log(mouly.myAddress());