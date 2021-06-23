var mongoose = require ("mongoose");
 mongoose.Promise= require("bluebird");
 var Schema = mongoose.Schema;
 var userRegistrationsSchema = new Schema(
     

{
    first_name:{
        type:String,
        default:""
    },
    last_name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:"",
        
    },
    username:{
        type:String,
        lowercase:true, 
    }
    
}


 );

 module.exports=mongoose.model("mylogin",userRegistrationsSchema);