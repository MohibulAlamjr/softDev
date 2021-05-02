var http =require('http');
var URL= require('url');
var server = http.createServer(function(req,res){

var myURL ="http://kaium.com/blog.html?year=2021&month=july";
var myURLobj = URL.parse(myURL,true);
var myhostName = myURLobj.host;
var mypathName = myURLobj.pathname;
var mySearchName = myURLobj.search;

res.writeHead(200,{'Content-Type':'text/html'})
res.write(mypathName);
res.end();


 
});
server.listen(8080);
console.log("Server Run Success");