var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net/softDev?retryWrites=true&w=majority"



var config =  { useUnifiedTopology: true } 
MongoClient.connect(URL,config,function(error,myclient){


    if(error){
        console.log('failed');
    }
    else{
        console.log('success');
        // findData(myclient)
        // findDatawithcon(myclient)
        // findAll(myclient)
        findDataProjection(myclient)


    }
})

// findData 

function findData(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {};
    myCollection.findOne(finddata,function(error,result){
        console.log("Your serial is " + result.serial + " Your position is " + result.position);
    })
}

// Find findData with condition 

function findDatawithcon(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {serial:"001"};
    myCollection.findOne(finddata,function(error,result){
        console.log("Her name is " + result.name + "." + " She lives in " + result.city);
    })
}

// Find ALL Array 


function findAll(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {};
    myCollection.find().toArray(function(error,result){
        console.log(result[3].city);
    })
}

// Find Data With Projection 

function findDataProjection(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {};
    var p = {projection:{name:""}}
    myCollection.find(finddata,p).toArray(function(error,result){
        console.log(result);
    })
}



