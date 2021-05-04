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
        // fineDatawithcon(myclicnt)
        // insert(myclicnt)
        // deleteData(myclicnt)
        // deleteallData(myclicnt)
        // fineallDatacon(myclicnt)
        // findpro(myclicnt)
        // findproByQuery(myclicnt)
        // insert(myclicnt)
        // findproByQuerylimit(myclicnt)
        // findshort(myclicnt)
        dropCollection(myclicnt)
        // createCollection(myclicnt)
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





function fineallDatacon(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');

    var finddata = {}
    mycollection.find().toArray(function (error, result) {
        console.log(result[1].name);

    })

}




function findpro(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');

    var finddata = {}

    var inprojection = {
        projection: {
            id: 1
        }
    }
    mycollection.find(finddata, inprojection).toArray(function (error, result) {
        console.log(result);

    })

}



function findproByQuery(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');

    var Query = {

        city: "Barguna",
        name: " AL kaium"

    };


    mycollection.find(Query).toArray(function (error, result) {
        console.log(result);

    })

}




function insert(connect) {

    var mydatabase = connect.db("softDev");
    var mycollection = mydatabase.collection("admin");
    var person = {
        name: "MD AL Kaium",
        position: "Core Member of softDev",
        city: "Barguna",
        phoneNumber: "01785956149",
        serial: "14",
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



function findproByQuerylimit(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');

    var Query = {

        city: "Barguna",
        name: " AL kaium"

    };


    mycollection.find(Query).limit(2).toArray(function (error, result) {
        console.log(result);

    })

}

function findshort(con) {
    var mydatabase = con.db("softDev");
    var mycollection = mydatabase.collection('admin');

    var Query = {

        serial: 1

    };


    mycollection.find().sort(Query).toArray(function (error, result) {
        console.log(result);

    })

}




// function update(con) {
//     var mydatabase = con.db("softDev");
//     var mycollection = mydatabase.collection('admin');

//     var Query = {

//         serial: "04"

//     };

//     var newValu


//     mycollection.UpdateOne(Query, ).toArray(function (error, result) {
//         console.log(result);

//     })

// }

function createCollection(con) {
    var mydatabase = con.db("softDev");
    mydatabase.createCollection("Happy", function (error, result) {
        console.log(result)

    })
}

function dropCollection(con) {
    var mydatabase = con.db("softDev");
    mydatabase.dropCollection("Happy", function (error, result) {
        console.log(result)

    })
}