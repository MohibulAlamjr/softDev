var express = require('express');


 app = express();



app.get('/',function(req,res){

let firstName = req.query.firstName;
let lastName = req.query.lastName;

res.end(firstName +" "+ lastName);


})

app.get('/header',function(req,res){

let firstName = req.header('firstName');
let lastName = req.header('lastName');

res.end(firstName +" "+ lastName);


})
app.post('/header',function(req,res){

res.end("This is kaium");

})



app.post('/',function(req,res){

let firstName = req.query.firstName;
let lastName = req.query.lastName;

res.end(firstName +" "+ lastName);


})

app.post('/header1',function(req,res){

let UserName = req.header('UserName');
let Password = req.header('Password');

res.end("UserName:"+UserName +" "+ "Password:" +Password);


})

 app.listen(3032, function () {
            console.log("Server Run Success");
        })