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
        // findDataProjection(myclient)
        // findwithQuery(myclient)
        // limitData(myclient)
        // findSort(myclient)
        // updateData(myclient)
        // createCollection(myclient)
        dropCollection(myclient)


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
    var p = {projection:{name:1}}
    myCollection.find(finddata,p).toArray(function(error,result){
        console.log(result);
    })
}


// Find With Query 

function findwithQuery(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {
        city:"Dhaka",
        name:"Mohibul Alam"
    }; 
    myCollection.find(finddata).toArray(function(error,result){
        console.log(result);
    })
}

// Limit Data 

function limitData(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {
        city:"Dhaka",
        name:"Mohibul Alam"
    }; 
    myCollection.find(finddata).limit(3).toArray(function(error,result){
        console.log(result);
    })
}

// Sorting 

function findSort(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {
        serial:1
    }; 
    myCollection.find().sort(finddata).toArray(function(error,result){
        console.log(result);
    })
}

// Update data 


function updateData(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {
        serial:"002"
    }; 

    var myValue = {$set:{name:"Sweety"}};
    myCollection.updateOne(finddata,myValue,function(error,result){
        console.log(result.n);
    })
}


// Create Collection 

function  createCollection(con){
    var mydatabase = con.db("softDev");
    mydatabase = mydatabase. createCollection("BirthDay",function(error,result){
   console.log(result)

    })
}


// Collection Drop 

function dropCollection(con){
    var mydatabase = con.db("softDev");
    mydatabase = mydatabase. dropCollection("BirthDay",function(error,result){
   console.log(result)

    })
}









