var url = require('url');
var adr = 'http://localhost:8080/default.YouTube.com?ID=347698776534&pass=Sweety';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.search); 
var qdata = q.query; 
console.log(qdata.pass);