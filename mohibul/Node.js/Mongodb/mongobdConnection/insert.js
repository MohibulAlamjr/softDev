var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";
var config= { useUnifiedTopology: true }
MongoClient.connect(url,config,function(error,myclicnt){
 
    if(error){
        console.log("failed");
    }else{

        console.log("done");
        insert(myclicnt)
    }
       

})

function insert(connect){

 var mydatabase= connect.db("softDev");
 var mycollection= mydatabase.collection("admin");
 var person = {
     name:"Mohibul Alam",
     position:"Core Member of softDev",
     city: "Dhaka",
     phoneNumber:"01774276336",
     serial:"04"
 }

 mycollection.insertOne(person,function(error){
     if(error){
         console.log("Data insert failed");
     }else{
        console.log("Data insert succecfully");
     }
 })

}