const express = require('express');
const app = express();
 const port =8080;

 app.get("/",function(req,res){
    var fname = req.query.fname;
    var lname = req.query.lname;
    res.send(fname + " "+ lname)

 })


 app.listen(port,function(){
    console.log("Example app listening at http://localhost:"+ port)
})