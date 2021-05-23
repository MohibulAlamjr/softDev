const express = require('express');
const app = express();
 const port =8080;




 app.get('/',function(req,res){
     res.send("hello World! from home");
 })

 app.use('/about',function(req,res,next){
    console.log("I am application level middleware from about")
    next();
})
 app.get('/about',function(req,res){
    // res.send("hello World! from about");
    res.send("hello World! from about");
})

app.use('/contact',function(req,res,next){
    console.log("I am application level middleware from contact")
    next();
})
app.get('/contact',function(req,res){
    res.send("hello World! from contact");
})


app.listen(port,function(){
    console.log("Example app listening at http://localhost:"+ port)
})