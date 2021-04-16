// classes

class human {
      constructor(color,height,weight,eyeColor,haircolor,bloodGroup){
          this.color = color;
          this.height = height;
          this.weight = weight;
          this.eyeColor = eyeColor;
          this.haircolor = haircolor;
          this.bloodGroup = bloodGroup;


      }


}

Era = new human ("pink", 5.3, 50, "black", "wine", 'O+');
Mouly = new human ("blue", 5.3, 45, "black", "black", "O+");

console.log("Era's favourite color is "+Era.color +".Her height is "+Era.height +".Her weight is "+Era.weight +".Her eyecolor is "+Era.eyeColor+".Her haircolor is "+Era.haircolor+".Her bloodgroup is "+Era.bloodGroup);
console.log("Mouly's favourite color is "+Mouly.color +".Her height is "+Mouly.height +".Her weight is "+Mouly.weight +".Her eyecolor is "+Mouly.eyeColor+".Her haircolor is "+Mouly.haircolor+".Her bloodgroup is "+Mouly.bloodGroup);





class favourite{

    constructor(fullName, food, flower, hobby)
{
    this.fullname = fullName;
    this.food = food;
    this.flower = flower;
    this.hobby = hobby;


   }

}

shanjida = new favourite ("shanjida sharmin era", "nuddles", "rose", "crafting");
munira = new favourite ("serajum munira mouly","ice-cream","beli","crafting");

console.log("shanjida's full name is "+shanjida.fullname +".Her favourite food is "+shanjida.food +".Her favourite flower is "+shanjida.flower +".Her hobby is "+shanjida.hobby);

console.log("munira's fullname is "+munira.fullname +".Her favourite food is "+munira.food +".Her favourite flower is "+munira.flower +".Her hobby is "+munira.hobby);


// using function in class

class human1 {
    constructor(color,height,weight,eyeColor,haircolor,bloodGroup,year){
        this.color = color;
        this.height = height;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.haircolor = haircolor;
        this.bloodGroup = bloodGroup;
        this.year = year;


    }

   age(x){
       return x - this.year;
   }
}

let date = new Date();
  let newYear = date.getFullYear();

Era1 = new human1 ("pink", 5.3, 50, "black", "wine", 'O+',2005);
Mouly1 = new human1 ("blue", 5.3, 45, "black", "black", "O+",1997);

console.log("Era's favourite color is "+Era1.color +".Her height is "+Era1.height +".Her weight is "+Era1.weight +".Her eyecolor is "+Era1.eyeColor+".Her haircolor is "+Era1.haircolor+".Her bloodgroup is "+Era.bloodGroup+ ".Her age is "+Era1.age(newYear));

console.log("Mouly's favourite color is "+Mouly1.color +".Her height is "+Mouly1.height +".Her weight is "+Mouly1.weight +".Her eyecolor is "+Mouly1.eyeColor+".Her haircolor is "+Mouly1.haircolor+".Her bloodgroup is "+Mouly1.bloodGroup+".Her age is "+Mouly1.age(newYear));





class favourite1{

    constructor(fullName, food, flower, hobby, year)
{
    this.fullname = fullName;
    this.food = food;
    this.flower = flower;
    this.hobby = hobby;
    this.year = year;


   }
   age(x){
    return x - this.year;
   }

}
let date1 = new Date();
  let newYear1 = date.getFullYear(2020);

shanjida1 = new favourite1 ("shanjida sharmin era", "nuddles", "rose", "crafting", 2005);
munira1 = new favourite1 ("serajum munira mouly","ice-cream","beli","crafting", 1997);

console.log("shanjida's full name is "+shanjida1.fullname +".Her favourite food is "+shanjida1.food +".Her favourite flower is "+shanjida1.flower +".Her hobby is "+shanjida1.hobby+ ".Her age is "+shanjida1.age(2020));

console.log("munira's fullname is "+munira1.fullname +".Her favourite food is "+munira1.food +".Her favourite flower is "+munira1.flower +".Her hobby is "+munira1.hobby+ ".Her age is "+munira1.age(2020));
