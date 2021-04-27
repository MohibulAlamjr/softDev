var fs = require('fs');

fs.rename('Append1.txt', 'myAppend.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});