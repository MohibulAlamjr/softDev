const { request } = require('express');
const express = require ('express');


const app = express ();
const port = 8080;


app.get ('/',function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
})


// Header Call 


app.get ('/one',function(req,res){

    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " + lastName);
})


// Post request

app.post ('/two',function(req,res){
    res.end("This is post request");
})

// Url Post 

app.post('/three',function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
})

// Post header call 


app.post ('/four',function(req,res){

    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " + lastName);
})


app.listen(8080,function(){
    console.log("success")
})