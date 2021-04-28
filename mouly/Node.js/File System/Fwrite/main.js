var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 