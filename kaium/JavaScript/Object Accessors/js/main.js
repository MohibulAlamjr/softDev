
// Create an object:

// get lang()
// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "en",
//      lang : function{
//       return this.language;
//     }
//   };
//   console.log(person.lang());

console.log("NOW");
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }
  };
  console.log(person.lang);


  var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {
      this.language = value;
    }
  };
  console.log(person.language);


//   var person2 ={
//     firstName: "",
//     lastName : "",
//     age : 0,
//     Set fname(fn){
//         this.firstName = fn;
//     },
//     Set lname(ln){
//         this.lastName = ln;
//     },
//     get  fullname (){
//         return this.firstName + " " +this.lastName; 
//     }
//   }
//   person2.fname="kaium";
//   person2.lname ="Sad";
//   console.log(person2.fullname());



