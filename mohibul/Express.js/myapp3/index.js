const express = require('express');
const bodyParser =require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 8080;
app.post('/',function(req,res){
    let JSONData =req.body;
    let JSONString = JSON.stringify(JSONData);
    res.send(JSONString)
})

app.post('/full',function(req,res){
    let JSONData =req.body;
    let name = JSONData['name'];
    let city = JSONData['city'];
    res.send("My name is " + name +" My City is " + city)
})



app.listen(port,function(){
    console.log("Example app listening at http://localhost:"+ port)
})