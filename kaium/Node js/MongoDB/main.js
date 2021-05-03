var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";
var config = {
    useUnifiedTopology: true
}
MongoClient.connect(url, config, function (error, myclicnt) {

    if (error) {
        console.log("failed");
    } else {

        console.log("done");
        insert(myclicnt)
// deleteData(myclicnt)
    }


})

function insert(connect) {

    var mydatabase = connect.db("softDev");
    var mycollection = mydatabase.collection("admin");
    var person = {
        name: " AL kaium",
        position: "Core Member of softDev",
        city: "Barguna",
        phoneNumber: "01785956149",
        serial: "05",
        bloodgroup: "B(+)"
    }

    mycollection.insertOne(person, function (error) {
        if (error) {
            console.log("Data insert failed");
        } else {
            console.log("Data insert succecfully");
        }
    })

}


function deleteData(connect) {

    var mydatabase = connect.db("softDev");
    var mycollection = mydatabase.collection("admin");
    var person = {
        name: " AL kaium",
        
    }

    mycollection.deleteOne(person, function (error) {
        if (error) {
            console.log("Data delete failed");
        } else {
            console.log("Data delete succecfully");
        }
    })

}