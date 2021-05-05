var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(url,config,function(error,myclient){
 
    if(error){
        console.log("failed");
    }else{

        console.log("done");
         InsertData(myclient);
        // deleteData(myclient);
        // deleteMany(myclient);
    }
       

})

// InsertData 

function InsertData(connect){
    var MyDatabase = connect.db("softDev");
    var mycollection = MyDatabase.collection("mouly");

    var mydata = {
        name:"Bilash",
        position:"Core Member of softDev",
        city:"Dhaka",
        phonenumber:"01778127862",
        serial:"03"
    }

    mycollection.insertOne(mydata, function(error){
        if(error){
            console.log("Date insert failed");
        }else{
            console.log("Data insert successfully");
        }
    })

}

// data delete 

function deleteData(connect){
    var MyDatabase = connect.db("softDev");
    var mycollection = MyDatabase.collection("admin");
    var mydata = {
       
        phonenumber:"01778127862"
       
    }

    mycollection.deleteOne(mydata, function(error){
        if(error){
            console.log("Data delete failed");
        }else{
            console.log("Data delete successfully");
        }
    })

}

// delete many

function deleteMany(connect){
    var MyDatabase = connect.db("softDev");
    var mycollection = MyDatabase.collection("admin");
    var mydata = {
       
        position:"Core Member of softDev"
       
    }

    mycollection.deleteMany(mydata, function(error, obj){
        if(error){
            console.log("Data delete failed");
        }else{
            console.log(obj.result.n + "document(c) deleted");
        }
    })

}

