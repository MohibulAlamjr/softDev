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
        // fineData(myclicnt)
        fineDatawithcon(myclicnt)
        // insert(myclicnt)
        // deleteData(myclicnt)
        // deleteallData(myclicnt)
    }


})


function fineData(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');
    var finddata = {};
    mycollection.findOne(finddata, function (error, result) {
        //  console.log(result);
        console.log('Your name is :' + result.name, '. your position is :' + result.position);
    })
}


function fineDatawithcon(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');
    var finddata = {
        serial: "08"
    };
    mycollection.findOne(finddata, function (error, result) {
        //  console.log(result);
        console.log('Your name is :' + result.name, '. your position is :' + result.position);
    })
}