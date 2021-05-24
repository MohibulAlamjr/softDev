var express = require ('express');
var app = express ();


// app.use(function (req,res,next){
//     console.log("Application level middleware")
//     next();
// })


app.get('/', function(req,res){
    res.send("this is home page");
})


app.use('/contact',function (req,res,next){
    console.log("Contact middleware")
    next();
})

app.get('/contact', function(req,res){
    res.send("this is contact page");
})


app.use('/about',function (req,res,next){
    console.log("About middleware")
    next();
})

app.get('/about', function(req,res){
    res.send("this is about page");
})



app.listen(8080, function(){
    console.log("Successfully Done!");
})
