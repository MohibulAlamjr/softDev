const express= require("express");
const router = express.Router();
var Users = require("../models/UserRegistration");


var login =(req,res)=>{
    res.header({
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"*",

    })
    res.send({response:"I am Alive"}).status(200);
   

};
var signupWithEmail= (req,res) =>{
    console.log("check data", req.body);
    Users.create(
        {
        email:req.body.email,
        password:req.body.password,
        first_name:req.body.fname,
        last_name:req.body.lname,

    },
    (user_create_err, user_create_result)=>{
        console.log("check user_create_err", user_create_err);

        if(user_create_err){
            return res.status(400).json({
                message:"something Wrong",
                data: user_create_err,

            });

        }else{
            console.log("User successfully created");
            return res.status(200).json({
                message:"User successfully created",
                data: user_create_result,

        });
    }
    
    
}
    )
};




router.post("/login",login);
router.post("/signupWithEmail",signupWithEmail);
module.exports=router;