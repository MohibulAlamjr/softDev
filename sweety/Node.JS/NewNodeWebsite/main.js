var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {
    if(req.url == "/"){
       var data = fs.readFileSync('home.html','utf8');
       res.end(data);
    }

    else if(req.url == "/About"){
        var data = fs.readFileSync('About.html','utf8');
       res.end(data);
    }
    

    else if(req.url == "/contact"){
        var data = fs.readFileSync('contact.html','utf8');
       res.end(data);
    }

    else if(req.url == "/terms"){
        var data = fs.readFileSync('terms.html','utf8');
       res.end(data);
    }



});


server.listen(8080);
console.log('Success');

