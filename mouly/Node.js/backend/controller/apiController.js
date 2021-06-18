const express = require ("express");
const router = express.Router();
var Users = require("../models/UserRegistration")


var login = (req, res) =>{
//   console.log("entered");

    res.header ({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Header": "*",
    });

    res.send ({response : "I am alive"}).status(200);

};

var signUpWithEmail = (req, res) => {
    console.log("check data", req.body);
    Users.create (
        {
            email : req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        },
        (user_create_err, user_create_result)=>{
            console.log("check user_create_err", user_create_err);
            if(user_create_err){
                return res.status(400).json({
                    message:"Something Is Wrong",
                    err: user_create_err,
                });
             } else{
                    return res.status (200).json({
                        message : "User successfully created",
                        data: user_create_result,
                    });
                }
            }
        
    );

        }
    //  res.send({ response: "signUpWithEmail", status: 200}).status(200);
 

router.post("/login", login);
router.post("/signUpWithEmail", signUpWithEmail);
module.exports = router;