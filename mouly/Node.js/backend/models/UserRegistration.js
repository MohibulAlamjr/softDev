var mongoose = require ("mongoose");
mongoose.Promise = require ("bluebird");
var Schema = mongoose.Schema;
var userRegistrationSchema = new Schema (

    {
      first_name:{

        type: String,
        default: "",
      },
      last_name:{
          type:String,
          default: "",

      },
      email:{
        type:String,
        
        default: "",
      

      },
    

gender :{
    type:String,
    enum:["Male", "Female", "not-updated"],
    default: "not-updated"
},

  email_verified:{
      type:String,
      default: "N",
  },

  password:{
    type:String,
    default: "",
  },

  authorization:{
    type:String,
    default: "",

  },
  login_type:{
    type:String,
    default: "email",
  },

  profile_image:{
    type:String,
    default: "",
  },

  device_token:{
    type:String,
    default: "",
  },

  
  device_type:{
    type:String,
    default: "",
  },

  is_profile_completed:{
      type: String,
      enum:["Y", "N"],
      default:"N",
  },

  lat: {
    type:String,
    default: "",
  },
  lng:{
    type:String,
    default: "",
  },
  loc:{
      type: [Number],
      index: "2dsphere",
  },

  address:{
      type:String,
      default: "",
  },
city :{
    type:String,
    default: "",
},

state : {
    type:String,
    default: "",
},

country :{
    type:String,
    default: "",
},


zip_code :{
    type:String,
    default: "",
},

deleted:{
    type:Number,
    default: 0,
},

status:{
    type:Number,
    default: 1,
},

updated:{
    type:String,
    default: "",
},

created:{
    type:String,
    default: "",
},
 
    },

    {
 timestamps : true,
    }

)

module.exports = mongoose.model ("UserRegistration",userRegistrationSchema);
