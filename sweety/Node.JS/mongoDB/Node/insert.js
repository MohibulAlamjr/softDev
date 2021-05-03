var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net/softDev?retryWrites=true&w=majority"



var config =  { useUnifiedTopology: true } 
MongoClient.connect(URL,config,function(error,myclient){


    if(error){
        console.log('failed');
    }
    else{
        console.log('success');
        insert(myclient)
        // deleteData(myclient)
        // deleteAllData(myclient)
    }
})

// Insert data 

function insert(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection("sweety");

    var person = {
        name:"Shovhana sweety",
        position:"Core Member of softDev",
        city:"Dhaka",
        phoneNumber:"017777777777",
        serial:"01"
    }

    myCollection.insertOne(person,function(error){
        if(error){
            console.log("Data insert failed");
        }
        else{
            console.log("Data inserted success");
        }
    })
}


// Delete Data 

function deleteData(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection("admin");

    var person = {
        phoneNumber:"017777777777"
        
    }

    myCollection.deleteOne(person,function(error){
        if(error){
            console.log("Data Data failed");
        }
        else{
            console.log("Data Deleted success");
        }
    })
}


// Delete All Data 


function deleteAllData(connect){
    var mydatabase = connect.db("softDev");
    var myCollection = mydatabase.collection("admin");

    var person = {
        position:"Core Member of softDev"
        
    }

    myCollection.deleteMany(person,function(error,obj){
        if(error){
            console.log("Data Delete failed");
        }
        else{
            console.log(obj.result.n +"document(s) deleted");
        }
    })
}
