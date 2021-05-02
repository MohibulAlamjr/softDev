var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.vapqc.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url, function(error) {
  if (error) {
      console.log("Failed");
  } else{
      console.log("Done");
  }

})