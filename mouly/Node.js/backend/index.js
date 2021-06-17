const bodyparser = require("body-parser");
const express = require ("express");
const http = require("http");
const cors = require("cors");
const port = process.env.PORT || 4002;



var connect = require('connect');

var app = connect();

app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);

// var apiController = require ("./routes/index");
// app.use ("/api/", apiController);

// app.all("/api/*", function (req,res,next){
//     return res.status(400).json({
//         success: 204,
//         message: "Invalid_request"
//     });
// });

app.use(cors);


const server = http.createServer (app);
server.listen(port, () => console.log(`listening on port $(port)`));
