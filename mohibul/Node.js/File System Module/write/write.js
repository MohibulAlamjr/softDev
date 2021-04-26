var fs = require('fs');

fs.writeFile('new.txt', ' This is my text from write.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});