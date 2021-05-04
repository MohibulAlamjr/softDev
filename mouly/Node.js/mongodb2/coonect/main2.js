var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(url,config,function(error,myclient){
 
    if(error){
        console.log("failed");
    }else{

        console.log("done");
        // findData(myclient);
        // findDatawithcondition(myclient);
        // findAll(myclient);
        findProjection(myclient);
    }
       

})


// finding data without condition

function findData(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {};
    myCollection.findOne(finddata,function(error,result){
        console.log("Your name is "+result.name+ "Your position is "+result.position);
    })

}

// finding data without condition 

function findDatawithcondition(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {serial: "07"};
    myCollection.findOne(finddata,function(error,result){
        console.log("Your name is "+result.name+ "Your position is "+result.position);
    })

}

// find all 

function findAll(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata = {};
    myCollection.find().toArray(function(error,result){
        console.log(result[1].name);
    })

}

// select specific column 


function findProjection(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var Itemobj = {}
    var Itemprojection = {projection:{name:"",serial:""}}
    myCollection.find(Itemobj,Itemprojection).toArray(function(error,result){
        console.log(result);
    })

}
