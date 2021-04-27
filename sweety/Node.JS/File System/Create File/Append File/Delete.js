var fs = require('fs');

fs.unlink('Append2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
