var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority"



var config =  { useUnifiedTopology: true } 
MongoClient.connect(URL,config,function(error){


    if(error){
        console.log('failed');
    }
    else{
        console.log('success');
    }
})
