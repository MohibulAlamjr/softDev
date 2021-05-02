var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){

if (req.url="/") {
fs.readFile('index.html',function(error,data){

    res.writeHead(200,{'Content-Type':'text/html '});
    res.write(data);
    res.end();

});
    
}

});
server.listen(1010);
console.log("Server Run Success");