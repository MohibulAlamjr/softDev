var fs = require('fs');

fs.appendFile('main.js', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});  This is my text.