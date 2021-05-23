var express = require('express');
var app = express ();

// app.use(function(req,res,next){
//     console.log("Application level middleware")
//     next();
// })

app.get ('/',function(req,res){
    res.send("This my is home page");
})

app.use('/',function(req,res,next){
    console.log("Home level middleware")
    next();
})

app.get ('/contact',function(req,res){
    res.send("This is my contact page");
})

app.use('/contact',function(req,res,next){
    console.log("contact level middleware")
    next();
})

app.get ('/about',function(req,res){
    res.send("This is my About page");
})

app.use ('/about',function(req,res){
    res.send("About MiddleWare");
})

app.listen(8089,function(req,res){
    console.log("Success");
})