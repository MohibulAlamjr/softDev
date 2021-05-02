var MongoClient = require('mongodb').MongoClient;
var URL="mongodb+srv://weAresoftDev:x8rAY6ffshuejQk@cluster0.c3u3b.mongodb.net?retryWrites=true&w=majority";

var confige={ useUnifiedTopology: true }

MongoClient.connect(URL,confige,function (error) {
if (error) {

console.log("Connection Fail")
    
}
else{
    
console.log("Connection Success")
}
    
});