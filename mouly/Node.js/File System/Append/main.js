var fs = require('fs');

fs.appendFile('myindex.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 