const express = require('express');
const app = express();
 const port =8080;

 app.post("/",function(req,res){
   res.send("I am from post!")

 })

 app.post("/q",function(req,res){
    var fname = req.query.fname;
    var lname = req.query.lname;
    res.send(fname + " "+ lname)

 })



 app.post("/header",function(req,res){
    var fname = req.header('fname');
    var lname = req.header('lname');
    res.send(fname + " "+ lname)
 
 })




 app.listen(port,function(){
    console.log("Example app listening at http://localhost:"+ port)
})


