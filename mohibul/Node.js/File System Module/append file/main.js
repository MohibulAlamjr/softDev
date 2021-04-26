var fs = require('fs');

fs.appendFile('mm.text', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});