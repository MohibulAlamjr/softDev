var fs = require('fs');

fs.open('file.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 