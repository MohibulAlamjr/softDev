var url = require('url');
var adr = 'https://www.facebook.com/profile.php?id=100011125712637&pass=2566652';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 

var qdata = q.query; 
console.log(qdata.id); 
console.log(qdata.pass); 
