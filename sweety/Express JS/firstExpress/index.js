const express = require ('express');


const app = express ();
const port = 8080;

app.get ('/',function(req,res){
    res.send('Hello softDevians')
})

app.post ('/about',function(req,res){
    res.send('My About')
})

app.put ('/contact',function(req,res){
    res.send('My Contact')
})

app.delete ('/softDev',function(req,res){
    res.send('Hello softDevianssssssssss')
})

app.listen(port,function(){
    console.log('Example app listening at http://localhost:' + port)
})