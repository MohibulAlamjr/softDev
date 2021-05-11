var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

            if (req.url == "/") {
                var data = fs.readFileSync('home.html', 'utf8');
                res.end(data);

            } else if (req.url == "/Contact") {

                var data = fs.readFileSync('contact.html', 'utf8');
                res.end(data);

            } else if (req.url == "/About") {


                var data = fs.readFileSync('about.html', 'utf8');
                res.end(data);
            } else if (req.url == "/Terms") {
                var data = fs.readFileSync('terms.html', 'utf8');
                res.end(data);

            }
        }