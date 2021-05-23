var express = require ('express');
var bodyParser = require ('body-parser');

var app = express ();
app.use(bodyParser.json());

app.post('/', function (req,res){
    let JSONData = req.body;
    let name = JSONData ['name'];
    let city = JSONData ['city'];

    res.send("My name is " + name + " "+ "My city is "+ city);
})

app.listen(8080, function(){
    console.log("Successfully Done!");
})





