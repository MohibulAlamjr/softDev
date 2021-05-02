var fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.writeFile('demo.txt', 'hello Kaium', function (error) {
            if (error) {
                res.writeHead(200, {
                    'Content-Type': 'text/html '
                });
                res.write("file Write Fail");
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html '
                });
                res.write("file Write Success");
                res.end();


            }

        });


        let mydata = fs.readFileSync('index.html');


    }

});
server.listen(2060);
console.log("Server Run Success");