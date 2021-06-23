const express = require("express");
const http = require("http");
var bodyparser = require("body-parser");
var cors =require("cors");
const port = process.env.PORT || 4003;

const app = express();
//parse Body with json or urlencoded format
app.use(bodyparser.json());
app.use(    
            bodyparser.urlencoded({
            extended:true,
        })   
);
// var apicontroller=require("./routes/index");
// app.use("/api/",apicontroller);

app.all("/api/*",function(req,res,next){
    return res.status(400).json({
        success:206,
        message:"invald request",
    });
});

// app.use(index);
app.use(cors);

const server = http.createServer(app);
server.listen(port,()=>console.log(`Listening on port ${port}`));
