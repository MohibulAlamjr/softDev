const express = require ('express');


const app = express ();
const port = 8080;


app.get ('/',function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
})

app.listen(8080,function(){
    console.log("success")
})