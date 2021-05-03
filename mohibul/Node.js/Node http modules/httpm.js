var http = require('http');
http.createServer(function (req, res) {

if (req.url=="/"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}
else if(req.url=="/about"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> I am from about</h1>');
    res.end();
}
else if(req.url=="/contact"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> I am from contact</h1>');
    res.end();
}

}).listen(5050);