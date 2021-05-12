var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

if (req.url=="/"){
    let  data = fs.readFileSync('home.html','utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}
else if(req.url=="/about"){
    let  data = fs.readFileSync('about.html','utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}
else if(req.url=="/contact"){
    let  data = fs.readFileSync('contact.html','utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}

}).listen(8080);