var fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.rename('demo.txt', 'demoNew.txt','Hellow kaium s', function (error) {
            if (error) {
                res.writeHead(200, {
                    'Content-Type': 'text/html '
                });
                res.write("file rename Fail");
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html '
                });
                res.write("file rename Success");
                res.end();
            }

        });


    }

});

server.listen(3080);
console.log("Server Run Success");