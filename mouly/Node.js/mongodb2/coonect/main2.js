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
        // findProjection(myclient);
        // findAllData(myclient);
        // limitData(myclient);
        // findSort(myclient);
        // updateOne(myclient);
        // createcollection(myclient);
        dropCollection(myclient);
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
    var Itemprojection = {projection:{name:1}}
    myCollection.find(Itemobj,Itemprojection).toArray(function(error,result){
        console.log(result);
    })

}

// find data with query


function findAllData(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var Itemobj = {city:"Dhaka",name:"Mohibul Alam"}
    
    myCollection.find(Itemobj).toArray(function(error,result){
        console.log(result);
    })

}

// limit data 


function  limitData(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var Itemobj = {city:"Dhaka",name:"Mohibul Alam"}
    
    myCollection.find(Itemobj).limit(2).toArray(function(error,result){
        console.log(result);
    })

}


// sorting 


function  findSort(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var Itemobj = {serial:1}
    
    myCollection.find().sort(Itemobj).toArray(function(error,result){
        console.log(result);
    })

}


// update data


function  updateOne(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var Itemobj = {serial:"001"};

    var newvalue = {
        $set:{name:"Saiyoni"}

    }
    
    myCollection.updateOne(Itemobj,newvalue,function(error,result){
        console.log(result.n);
    })

}


// createcollection 

function  createcollection(connect){
    var mydatabase = connect.db("softDev");
     mydatabase.createCollectio("ThankYou",function(error,result){
         console.log(result);
     });
}

// drop collection 


function  dropCollection(connect){
    var mydatabase = connect.db("softDev");
     mydatabase.dropCollection("ThankYou",function(error,result){
         console.log(result);
     });
}