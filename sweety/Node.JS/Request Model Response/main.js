var http = require('http');
var server = http.createServer(function(req,res) {
    if(req.url == "/"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>This is my Home Page</h2>')
        res.end();
    }

    else if(req.url == "/About"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>This is my About Page</h2>')
        res.end();
    }


    else if(req.url == "/contact"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>This is my Contact Page</h2>')
        res.end();
    }



});


server.listen(8080);
console.log('Success');





