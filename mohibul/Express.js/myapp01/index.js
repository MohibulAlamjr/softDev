const express = require('express');
const app = express();
 const port =8080;

 app.get('/',function(req,res){
     res.send("hello World! from home");
 })
 app.post('/about',function(req,res){
    // res.send("hello World! from about");
    res.status(401).end("unothorise");
})

app.put('/contact',function(req,res){
    res.send("hello World! from contact");
})
app.delete('/photo',function(req,res){
    res.send("hello World! from contact");
})
app.post('/array',function(req,res){
    
    let myarray=[
        {
            name:"mohibul",
            city:"Dhaka",
            Ocup:"engineer"
        },
        {
            name:"alam",
            city:"rajshahi",
            Ocup:"engineer"
        }
    ]
  res.json(myarray)
})
app.get('/pic',function(req,res){
    res.download("./upload/logo.jpg")
   
})

app.get('/bangladesh',function(req,res){
    res.redirect("http://localhost:" + port + "/palastine")
   
})
app.get('/palastine',function(req,res){
    res.send("I stand for palastine from Bangladesh")
   
})

app.get('/head',function(req,res){
    res.append("name","Mohibul");
    res.append("city","Dhaka");
    res.append("phone","01774276336");
    res.status(401).end("header test");
    
   
})
app.get('/cooki',function(req,res){
    res.cookie("name","Mohibul");
    res.cookie("city","Dhaka");
    res.cookie("phone","01774276336");
    res.end("cookie done");
    
   
})

app.get('/clcooki',function(req,res){
    res.clearCookie('name');

    res.end("clear cookie done");
    
   
})

 app.listen(port,function(){
     console.log("Example app listening at http://localhost:"+ port)
 })