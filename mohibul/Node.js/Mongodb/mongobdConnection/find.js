var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";
var config= { useUnifiedTopology: true }
MongoClient.connect(url,config,function(error,myclicnt){
 
    if(error){
        console.log("failed");
    }else{

        console.log("done");
        //findData(myclicnt);
        //findDatawithcon(myclicnt);
        //findAll(myclicnt)
       // findwithpro(myclicnt);
        //FindAllDataByProjection(myclicnt);
        //findWithQuary(myclicnt)
        //limitedata(myclicnt)
        //findSort(myclicnt)
        //updatedata(myclicnt)
        //createcollection(myclicnt)
        dropcollection(myclicnt)

    }
       

})

function findData(con){
var mydatabase = con.db("softDev");
var myCollection = mydatabase.collection('admin');
var finddata={};
myCollection.findOne(finddata,function(error,result){
 console.log("your name is "+" ."+result.name+"your position is "+result.position);
})

}

function findDatawithcon(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={serial:"07"};
    myCollection.findOne(finddata,function(error,result){
     console.log("your name is "+" ."+result.name+"your position is "+result.position);
    })
}


function findAll(con){

    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={};
    myCollection.find().toArray(function(error,result){
     console.log(result[1].name);
    })


}

function  findwithpro(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={}
    var pro ={projection:{
        name:1,
        position:1
        
    
    }
    }
    myCollection.find(finddata, pro).toArray(function(error,result){
     console.log(result);
    })
}


function findWithQuary(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={
        city:"Dhaka",
        name:"Mohibul Alam"
};

    
    myCollection.find(finddata).toArray(function(error,result){
     console.log(result);
    })

}

function limitedata(con){

    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={
        city:"Dhaka",
        name:"Mohibul Alam"
};

    
    myCollection.find(finddata).limit(3).toArray(function(error,result){
     console.log(result);
    })

}

function findSort(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={
        serial: -1
};

    
    myCollection.find().sort(finddata).toArray(function(error,result){
     console.log(result);
    })


}

function updatedata(con){
    var mydatabase = con.db("softDev");
    var myCollection = mydatabase.collection('admin');
    var finddata={
        serial:"04"
};

var newValue = {$set:{name:"Joy"}}

    
    myCollection.updateOne(finddata,newValue,function(error,result){
     console.log(result);
    })



}

function createcollection(con){
    var mydatabase = con.db("softDev");
    mydatabase.createCollection("serajum",function(error,result){
        console.log(result)
    })

}

function  dropcollection(con){

    var mydatabase = con.db("softDev");
    mydatabase.dropCollection("serajum",function(error,result){
        console.log(result)
    })

}