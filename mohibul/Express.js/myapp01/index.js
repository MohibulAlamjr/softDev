const express = require('express');
const app = express();
 const port =8080;

 app.get('/',function(req,res){
     res.send("hello World! from home");
 })
 app.post('/about',function(req,res){
    res.send("hello World! from about");
})

app.put('/contact',function(req,res){
    res.send("hello World! from contact");
})
app.delete('/photo',function(req,res){
    res.send("hello World! from contact");
})

 app.listen(port,function(){
     console.log("Example app listening at http://localhost:"+ port)
 })