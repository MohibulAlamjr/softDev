const express = require('express');
var multer =require('multer');
var multer = multer();
const app = express();
app.use(multer.array());
app.use(express.static('public'));
const port = 8080;

app.post('/',function(req,res){
    let JSONData =req.body;
    let JSONString = JSON.stringify(JSONData);
    res.send(JSONString)
})



app.listen(port,function(){
    console.log("Example app listening at http://localhost:"+ port)
})