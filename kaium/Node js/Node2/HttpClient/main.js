var http =require('http');
var server = http.createServer(function(req,res){

if (req.url=="/") {
res.writeHead(200,{'content-type':'text/html'})
res.write('<h1>this is Home Page</h1>')
res.end();
    
}

 else if (req.url=="/contact") {

    res.writeHead(200,{'content-type':'text/html'})
res.write('<h1>this is Contact Page</h1>')
res.end();
    
 }
 else if (req.url=="/about") {
  res.writeHead(200,{'content-type':'text/html'})
res.write('<h1>this is About Page</h1>')
res.end();
    
 }



});
server.listen(8080);
console.log("Server Run Success");