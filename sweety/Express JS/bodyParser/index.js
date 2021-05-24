var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.post('/',function(req,res){
    let JSONData = req.body;
    let JSONstring = JSON.stringify(JSONData);
    res.send(JSONstring)
})


app.post('/one',function(req,res){
    let JSONData = req.body;
    let name = JSONData['name']
    let city = JSONData['city']

    res.send("My name is: " + name + " " + "I live in: " + city);
})


app.listen(8080,function(){
    console.log("Success");
})