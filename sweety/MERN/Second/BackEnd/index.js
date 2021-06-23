const express = require("express");
const http = require("http");
var bodyparser = require('body-parser') ;
const cors= require("cors");
const port=process.env.PORT || 4002;
var db = require("./db");


const app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true,
})
);

var apiController = require("./controller/apiController");
app.use("/api/",apiController);

app.all("/api/*",function(req,res,next){
    return res.status(400).json({
        success:206,
        message: "invalid_request"
    })
})


app.use(cors);
const server=http.createServer(app)
server.listen(port,()=> console.log(`Listening on port ${port}`));